import m from 'mithril'
import App from '../models/App'
import ClientModel from '../models/ClientModel'
import ClientButtonView from './ClientButton'
import SwipeOverlay from './SwipeOverlay'
import stream from 'mithril/stream';

class ClientView {
    static oninit(vnode) {
        // Inform the client model of the current project based on the url slug
        ClientModel.setCurrentClientId(vnode.attrs.id)

        this.direction = stream('next')
    }

    static onupdate(vnode) {
        // Initialize Hammer for touch events
        this.clientTouch = new Hammer(vnode.dom);
        this.clientTouch.on("swipe", (ev) => {
            if(ev.direction == Hammer.DIRECTION_LEFT) {
                this.direction('next')
                this.changeClient('next')
            }
            else if(ev.direction == Hammer.DIRECTION_RIGHT) {
                this.direction('prev')
                this.changeClient('prev')
            }
        });
    }

    static onbeforeupdate(vnode) {
        // When url updates we update the client model with the current project based on the url slug
        ClientModel.setCurrentClientId(vnode.attrs.id)

        // Update the client with new data based on the new project
        ClientModel.setClientData()

        // Sets the direction in attrs object so ClientChildView recieves the direction
        vnode.attrs.navDirection = this.direction()
    }

    static onbeforeremove(vnode) {
        // Inform the App model the view is about to be removed and transition out
        vnode.dom.classList.add("content-container--transition-out--next")

        return new Promise((resolve) => {
            setTimeout(resolve, 500)
        })
    }

    static view (vnode) {
        return(
            <section id="content-container" class="content-container client-container">
                <SwipeOverlay copy="SWIPE TO NAVIGATE" />
                <ClientButtonView direction="prev" setdirection={ this.direction } changeClient = { this.changeClient } />
                <ClientButtonView direction="next" setdirection={ this.direction } changeClient = { this.changeClient } />
                { vnode.children }
            </section>
        )
    }

    static changeClient(direction) {
        if(direction == 'prev')
            m.route.set('/client/' + ClientModel.prevClient.slug)
        else if(direction == 'next')
            m.route.set('/client/' + ClientModel.nextClient.slug)

        return false
    }
}

module.exports = ClientView
