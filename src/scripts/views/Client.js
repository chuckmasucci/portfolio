import m from 'mithril'
import App from '../models/App'
import ClientModel from '../models/ClientModel'

class ClientView {
    static oninit(vnode) {
        // Inform the client model of the current project based on the url slug
        ClientModel.setCurrentClientId(vnode.attrs.id)
}

    static oncreate () {
        // Transition the next and previous button in
        setTimeout(function () {
            this.toggles = document.getElementsByClassName("client-container__toggle")

            for (var i = 0; i < toggles.length; i++) {
                toggles[i].classList.add("client-container__toggle--transition-in")
            }
        }, 500)
    }

    static onbeforeupdate(vnode) {
        // When url updates we update the client model with the current project based on the url slug
        ClientModel.setCurrentClientId(vnode.attrs.id)

        // Update the client with new data based on the new project
        ClientModel.setClientData()
    }

    static onbeforeremove (vnode) {
        // Inform the App model the view is about to be removed and transition out
        App.sendUpdate(new Event("pageState"))
        vnode.dom.classList.add("content-container--transition-out")

        for (let i = 0; i < toggles.length; i++) {
            toggles[i].classList.add("client-container__toggle--transition-out")
        }

        return new Promise(function(resolve) {
            setTimeout(resolve, 500)
        })
    }

    static onupdate(vnode) {
        // Move content container element when nav is open or closed
        if (vnode.attrs.nav == 'opening')
            vnode.dom.classList.add('content-container--nav-open')
        else if(vnode.attrs.nav == 'closing')
            vnode.dom.classList.remove('content-container--nav-open')
    }

    static view (vnode) {
        return(
            <section id="content-container" class="content-container client-container">
                { vnode.children }
            </section>
        )
    }
}

module.exports = ClientView
