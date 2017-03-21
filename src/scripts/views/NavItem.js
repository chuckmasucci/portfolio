import m from 'mithril'

const NavItem = {
    onupdate(vnode) {
        if(vnode.attrs.type == 'link') {
            // Add link class
            vnode.dom.classList.add('nav__list-main__list-item')

            // Set active and inactive classes
            if(m.route.get() == vnode.attrs.route)
                vnode.dom.classList.add('nav__list-main__list-item-active')
            else
                vnode.dom.classList.remove('nav__list-main__list-item-active')
        }
        else if(vnode.attrs.type == 'spacer') {
            // Add spacer class
            vnode.dom.classList.add('nav__list-main__bullet')
        }
    },

    view({ attrs }) {
        return (
            <li>
                {(attrs.type == 'link') &&
                    <a href={ attrs.route } oncreate={ m.route.link }>
                        <i class={"fa " + attrs.icon + " fa-5x"} aria-hidden="true"></i>
                        { attrs.title }
                    </a>
                }
                {(attrs.type == 'spacer') &&
                    <span>&bull;</span>
                }
            </li>
        )
    }
}

module.exports = NavItem
