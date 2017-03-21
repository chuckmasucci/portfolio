import m from 'mithril'

const ClientList = {
    oninit(vnode) {
        vnode.state.subNav = false
    },

    view(vnode) {
        ClientList.vnode = vnode
        return (
            <ul class="nav__list-sub nav__list-sub--closed" onclick={ (e) => { this.subNavClick(vnode) } }>
                {(vnode.attrs.clients.length > 0) &&
                    vnode.attrs.clients.map((client, i) => <li><a href={ "/client/" + client.slug } oncreate={ m.route.link }>{client.title}</a></li>)
                }
            </ul>
        )
    },

    subNavClick(vnode) {
        vnode.state.subNav = !vnode.state.subNav
        if(!vnode.state.subNav) {
            vnode.dom.classList.add('nav__list-sub--closed')
        }
        else {
            vnode.dom.classList.remove('nav__list-sub--closed')
        }
    }
}

module.exports = ClientList
