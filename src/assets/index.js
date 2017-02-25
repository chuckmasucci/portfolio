// index.js
const m = require("mithril");
const Home = require("./scripts/views/Home.js");
const Client = require("./scripts/views/Client.js");
const Layout = require("./scripts/views/Layout.js");
const Nav = require("./scripts/views/Nav.js");
const ClientChildView = require("./scripts/views/ClientChildView.js");

m.route(document.body, "/", {
    "/": {
        render: function () {
            return m(Layout, [m(Home), m(Nav)]);
        }
    },
    "/client/:id": {
        render: function (vnode) {
            return m(Layout, [m(Client, [m(ClientChildView, {name: "Client Child 1"}), m(ClientChildView, {name: "Client Child 2"})]), m(Nav)]);
        }
    }
});