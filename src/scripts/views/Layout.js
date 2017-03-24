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
    }

    static onnavclose(vnode) {
        vnode.dom.classList.add('layout--nav-closed')
        vnode.dom.classList.remove('layout--nav-open')
    }

    static onupdate(vnode) {
        setTimeout(() => {
            vnode.dom.scrollTop = 0
        }, 500)
    }

    static view(vnode) {
        return (
            <main id="Layout" class="layout">
                { vnode.children }
            </main>
        )
    }
}

module.exports = Layout
