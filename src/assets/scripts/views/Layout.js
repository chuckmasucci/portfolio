var m = require("mithril");
var Nav = require("./Nav.js");
var App = require("../models/App.js");
var ClientModel = require("../models/ClientModel");

var Layout = {
    oninit: function (vnode) {
        var self = this;

        // Load in client data
        ClientModel.loadList(vnode.attrs.id);

        // Add event listeners for the navigation and page state
        window.addEventListener('navState', function (e) {
            self.moveForNav(App.navState());
        }, false);

        window.addEventListener('pageState', function (e) {
            App.updateNav(false);
        }, false);
    },


    view: function(vnode) {
        // var self = this;

        return (
            <main class="layout">
                {/*TODO Add navigation function back in*/}
                {/*<button class="menu" onclick={ self.onMenuButtonClick }>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="23" viewBox="0 0 95.2 74.6">
                    <path d="M5.3 74.6C2.4 74.6 0 72.3 0 69.4c0-2.9 2.4-5.2 5.3-5.2 0.1 0 0.1 0 0.2 0v0H89.9v0c0 0 0 0 0.1 0 2.9 0 5.3 2.3 5.3 5.2 0 2.9-2.4 5.2-5.3 5.2 0 0 0 0-0.1 0v0H5.4v0c-0.1 0-0.1 0-0.2 0z" style="fill-opacity:0.07;stroke-width:0.08"/>
                    <path d="M5.3 12C2.4 12 0 9.7 0 6.8c0-2.9 2.4-5.2 5.3-5.2 0.1 0 0.1 0 0.2 0v0H89.9v0c0 0 0 0 0.1 0 2.9 0 5.3 2.3 5.3 5.2 0 2.9-2.4 5.2-5.3 5.2 0 0 0 0-0.1 0v0H5.4v0c-0.1 0-0.1 0-0.2 0z" style="fill-opacity:0.07;stroke-width:0.08"/>
                    <path d="M5.3 43.3C2.4 43.3 0 41 0 38.1c0-2.9 2.4-5.2 5.3-5.2 0.1 0 0.1 0 0.2 0v0H89.9v0c0 0 0 0 0.1 0 2.9 0 5.3 2.3 5.3 5.2 0 2.9-2.4 5.2-5.3 5.2 0 0 0 0-0.1 0v0H5.4v0c-0.1 0-0.1 0-0.2 0z" style="fill-opacity:0.07;stroke-width:0.08"/>
                    <path class="menu__hamburger-line" d="M5.3 73C2.4 73 0 70.7 0 67.8c0-2.9 2.4-5.2 5.3-5.2 0.1 0 0.1 0 0.2 0v0H89.9v0c0 0 0 0 0.1 0 2.9 0 5.3 2.3 5.3 5.2 0 2.9-2.4 5.2-5.3 5.2 0 0 0 0-0.1 0v0H5.4v0c-0.1 0-0.1 0-0.2 0z" stroke-width="0.08"/>
                    <path class="menu__hamburger-line" d="M5.3 10.4C2.4 10.4 0 8.1 0 5.2c0-2.9 2.4-5.2 5.3-5.2 0.1 0 0.1 0 0.2 0v0H89.9v0c0 0 0 0 0.1 0 2.9 0 5.3 2.3 5.3 5.2 0 2.9-2.4 5.2-5.3 5.2 0 0 0 0-0.1 0v0H5.4v0c-0.1 0-0.1 0-0.2 0z" stroke-width="0.08"/>
                    <path class="menu__hamburger-line" d="M5.3 41.7C2.4 41.7 0 39.4 0 36.5c0-2.9 2.4-5.2 5.3-5.2 0.1 0 0.1 0 0.2 0v0H89.9v0c0 0 0 0 0.1 0 2.9 0 5.3 2.3 5.3 5.2 0 2.9-2.4 5.2-5.3 5.2 0 0 0 0-0.1 0v0H5.4v0c-0.1 0-0.1 0-0.2 0z" stroke-width="0.08"/>
                </svg>
                </button>*/}
                { vnode.children }
            </main>
        )
    },

    onMenuButtonClick: function () {
        App.toggleNav();
    },

    moveForNav: function (navState) {
        // Move the content container to position based on state of nav
        App.setContentContainer(document.getElementById("content-container"));
        navState ? App.contentContainer.classList.add('content-container--nav-open') :App.contentContainer.classList.remove('content-container--nav-open');
    }
};

module.exports = Layout;