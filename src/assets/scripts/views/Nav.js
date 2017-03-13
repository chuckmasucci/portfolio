import m from 'mithril'

class Nav {
    static onupdate(vnode) {
        // Open or close nav
        vnode.attrs.navOpen ? vnode.dom.classList.add('layout__nav--open') : vnode.dom.classList.remove('layout__nav--open')
    }

    static view(vnode) {
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
