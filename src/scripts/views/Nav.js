import m from 'mithril'

class Nav {
    static onupdate(vnode) {
        // Open or close nav
        if(vnode.attrs.nav == 'opening') {
            vnode.dom.classList.add('layout__nav--open')
        }
        else if(vnode.attrs.nav == 'closing') {
            vnode.dom.classList.remove('layout__nav--open')
        }
    }

    static view(vnode) {
        // TODO Add client list
        return (
            <nav id="nav" class="layout__nav">
                <ul>
                    <li><a href="/" oncreate={m.route.link}>HOME</a></li>
                    <li><a href="/contact" oncreate={m.route.link}>CONTACT</a></li>
                </ul>
            </nav>
        )
    }
}

module.exports = Nav
