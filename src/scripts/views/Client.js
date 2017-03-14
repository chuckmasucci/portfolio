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

    static view (vnode) {
        return(
            <section id="content-container" class="content-container client-container">
                { vnode.children }
                <a href={"/client/" + ClientModel.prevClient.slug} oncreate={m.route.link} class="client-container__toggle client-container__toggle-shadow--size-8 client-container__prev">
                    <div class="client-container__toggle__arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="25" viewBox="0 0 21 25">
                            <path d="M13.8 25H21L7.2 12.5 21 0H13.8L0 12.5Z" stroke-width="0.3"/>
                        </svg>
                    </div>
                </a>

                <a href={"/client/" + ClientModel.nextClient.slug} oncreate={m.route.link} class="client-container__toggle client-container__toggle-shadow--size-8 client-container__next">
                    <div class="client-container__toggle__arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="25" viewBox="0 0 21 25">
                            <path d="M7.2 0H0L13.8 12.5 0 25H7.2L21 12.5Z" stroke-width="0.3"/>
                        </svg>
                    </div>
                </a>
            </section>
        )
    }
}

module.exports = ClientView
