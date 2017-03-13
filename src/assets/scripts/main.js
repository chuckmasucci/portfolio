// index.js
import m from 'mithril'
import Layout from './views/Layout'
import Nav from './views/Nav'
import Home from './views/Home'
import Client from './views/Client'
import ClientChildView from './views/ClientChildView'

m.route(document.body, "/", {
    "/": {
        render: vnode => {
            return m(Layout, vnode.attrs, [m(Home, vnode.attrs), m(Nav, vnode.attrs)])
        }
    },
    "/client/:id": {
        render: vnode => {
            return m(Layout, vnode.attrs, [m(Client, vnode.attrs, [m(ClientChildView, {initial: false})]), m(Nav)])
        }
    }
});
