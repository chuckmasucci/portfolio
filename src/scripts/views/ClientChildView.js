import m from 'mithril'
import App from '../models/App'
import ClientAttrView from './ClientAttrView'
import ClientModel from '../models/ClientModel'

class ClientChildView {
    static oninit() {
        // Set this to false until onupdate completes. This is used to allow or disallow onupdate from firing to accomodate transitions between clients
        this.clientSet = false
    }

    static oncreate(vnode) {
        // Transition in
        if(vnode.attrs.navDirection == 'next') {
            vnode.dom.classList.remove('content-container--transition-out--next')
            vnode.dom.classList.add('content-container--transition-in--next')
        }

        m.redraw()
    }

    static onbeforeupdate(vnode) {
        // Set navDirection to component state
        this.navDirection = vnode.attrs.navDirection



        // Checks to see if the client has finished transitioning in and is ready to be transitioned out
        if(this.clientSet) {
            if(this.navDirection == 'next') {
                this.container.classList.add('content-container--transition-out--next')
                this.container.classList.remove('content-container--transition-in--next')
            }
            else if(this.navDirection == 'prev') {
                this.container.classList.add('content-container--transition-out--prev')
                this.container.classList.remove('content-container--transition-in--prev')
            }

            // Pauses the redraw for .5s to allow the transitions to finish
            setTimeout(m.redraw, 500)

            // Resets back to false so this conditional is bypassed when m.redraw is called
            this.clientSet = false

            // This stops onupdate from being fired allowing the timeout to complete
            return false
        }
    }

    static onupdate(vnode) {
        // Let's load the image dynamically so we can use the img's onload callback to properly animate the image.
        // This will stop the new client from animating in before the image is loaded and on the dom
        let clientImg = document.getElementById('client-container__clients__content__hero')
        clientImg.src = ClientModel.currentClient.images.hero
        clientImg.onload = () => {
            // Show the dom before we transition in
            vnode.dom.style.display = 'block'

            // Transition in content
            if(this.navDirection == 'next') {
                vnode.dom.classList.add('content-container--transition-in--next')
                vnode.dom.classList.remove('content-container--transition-out--next')
            }
            else if(this.navDirection == 'prev') {
                vnode.dom.classList.add('content-container--transition-in--prev')
                vnode.dom.classList.remove('content-container--transition-out--prev')
            }

            setTimeout(() => {
                vnode.dom.classList.remove('content-container--transition-in--next')
                vnode.dom.classList.remove('content-container--transition-in--prev')
            }, 500)

            // Get the container dom element
            // it will be used during transition out since onbeforeupdate's vnode does not contain a dom
            this.container = vnode.dom

            // Set to true to allow the next client to transition in
            this.clientSet = true
        }


    }

    static view(vnode) {
        return(
            <div id="client-container__clients" class="client-container__clients">
            {('title' in ClientModel.currentClient) &&
                <div class="client-container__clients__content">
                    <span>
                        <img src="" id="client-container__clients__content__hero" class="client-container__clients__content__hero" />
                        <div class="client-container__clients__content__title client-container__clients__content__title--shadow-size-8">{ClientModel.currentClient.title}</div>
                    </span>

                    <div class="client-container__clients__content__attributes">
                        <ClientAttrView description="// Agency" copy={ ClientModel.currentClient.agency } bgcolor={ ClientModel.currentClient.color } />
                        <ClientAttrView description="// Project(s)" copy={ ClientModel.currentClient.project } bgcolor={ ClientModel.currentClient.color } />
                        <ClientAttrView description="// Role" copy={ ClientModel.currentClient.role } bgcolor={ ClientModel.currentClient.color } />
                        <ClientAttrView description="// Technologies" copy={ ClientModel.currentClient.technologies } bgcolor={ ClientModel.currentClient.color } />
                    </div>
                </div>
            }
            </div>
        )
    }
}

module.exports = ClientChildView


// "technologies": "HTML & CSS (Sass, Compass, Responsive Design)\r\nJavascript (Backbone, Raphael, Require, Three, Google Maps API, TweenMax)\r\nSVG",
