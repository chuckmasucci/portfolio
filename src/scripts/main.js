import m from 'mithril'
import Layout from './views/Layout'
import Nav from './views/Nav'
import Home from './views/Home'
import Client from './views/Client'
import ClientChildView from './views/ClientChildView'
import ClientButtonView from './views/ClientButton'
import Contact from './views/Contact'

// m.route.prefix("#!")

m.route(document.body, '/', {
    '/': {
        render: vnode => {
            return [m(Layout, vnode.attrs, m(Home, vnode.attrs)), m(Nav, vnode.attrs)]
        }
    },
    '/client/:id': {
        render: vnode => {
            return [m(Layout, vnode.attrs, [m(Client, vnode.attrs, m(ClientChildView, vnode.attrs))]), m(Nav, vnode.attrs)]
        }
    },
    '/contact': {
        render: vnode => {
            return [m(Layout, vnode.attrs, m(Contact, vnode.attrs)), m(Nav, vnode.attrs)]
        }
    }
});
