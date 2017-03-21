import m from 'mithril'
import App from '../models/App'
import ClientModel from '../models/ClientModel'
import ClientListView from './ClientListView'
import NavItem from './NavItem'

class Nav {
    static oninit(vnode) {
        vnode.state.nav = false
    }

    static onupdate(vnode) {
        // Open or close nav
        if(vnode.state.nav)
            this.navToggle(vnode)
    }

    static view(vnode) {
        return (
            <nav id="nav" class="nav layout__nav">
                {<button class="menu" onclick={ (e) => { e.redraw = false; this.navToggle(vnode) } }>
                    <i class="fa fa-chevron-circle-down"></i>
                </button>}
                <ul class="nav__list-main">
                    <NavItem type="link" route="/" icon="fa-home" title="Home" />
                    <NavItem type="spacer" spacer-type="bullet" />
                    <NavItem type="link" route={'/client/' + ClientModel.currentClient.slug} icon="fa-home" title="Projects" />
                    <NavItem type="spacer" spacer-type="bullet" />
                    <NavItem type="link" route="/contact/" icon="fa-address-card" title="Contact" />
                </ul>
            </nav>
        )
    }

    static navToggle(vnode) {
        if(!vnode.state.nav){
            vnode.dom.classList.add('nav--open')
            vnode.state.nav = true
            App.sendUpdate(new Event('navopen'))
        }
        else{
            vnode.dom.classList.remove('nav--open')
            vnode.state.nav = false
            App.sendUpdate(new Event('navclose'))
        }
    }
}

module.exports = Nav
