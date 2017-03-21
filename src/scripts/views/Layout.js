import m from 'mithril'
import ClientModel from '../models/ClientModel'

class Layout {
    static oninit(vnode) {
        // Load client data
        ClientModel.loadList(vnode.attrs.id)

        window.addEventListener("navopen", () => {
            this.onnavopen(vnode)
        })

        window.addEventListener("navclose", () => {
            this.onnavclose(vnode)
        })
    }

    static onnavopen(vnode) {
        vnode.dom.classList.add('layout--nav-open')
        vnode.dom.classList.remove('layout--nav-closed')

        // vnode.dom.querySelector(".layout__overlay").classList.add('layout__overlay--open')
    }

    static onnavclose(vnode) {
        vnode.dom.classList.add('layout--nav-closed')
        vnode.dom.classList.remove('layout--nav-open')

        // vnode.dom.querySelector(".layout__overlay").classList.remove('layout__overlay--open')
    }

    static view(vnode) {
        // Set nav attributes to bubble down to children
        // vnode.attrs.nav = vnode.state.nav
        return (
            <main id="Layout" class="layout">
                <div class="layout__overlay"></div>
                { vnode.children }
            </main>
        )
    }
}

// <footer>&copy; 2017 Charles Masucci | Made with <a href="http://mithril.js.org/" target="_blank">Mithril</a></footer>

module.exports = Layout
