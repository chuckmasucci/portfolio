// index.js
var m = require("mithril");
var Home = require("./views/Home.js");
var Client = require("./views/Client.js");
var Layout = require("./views/Layout.js");
var Nav = require("./views/Nav.js");
var ClientChildView = require("./views/ClientChildView.js");

// Site routes: /, /client/"clientslug"
m.route(document.body, "/", {
    "/": {
        render: function (vnode) {
            return m(Layout, vnode.attrs, [m(Home), m(Nav)]);
        }
    },
    "/client/:id": {
        render: function (vnode) {
            return m(Layout, vnode.attrs, [m(Client, vnode.attrs, [m(ClientChildView, {initial: false})]), m(Nav)]);
        }
    }
});