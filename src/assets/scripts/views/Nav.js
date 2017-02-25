// Nav
var m = require("mithril");
var App = require("../models/App.js");
var ClientModel = require("../models/ClientModel");

var Nav = {
    oninit: function (vnode) {
        const self = this;

        ClientModel.getFirstClient();

        window.addEventListener('navState', function (e) {
            vnode.state.open(App.navState());
        }, false);
    },

    oncreate: function (vnode) {
        this.el = vnode.dom;
    },

    view: function () {
        return (
            <nav id="nav" class="nav">
                <ul>
                    <li><a href="#!/">HOME</a></li>
                    <li><a href={"#!/client/" + ClientModel.firstClient}>PROJECTS</a></li>
                    <li><a href="#!/contact">CONTACT</a></li>
                </ul>

            </nav>
        )
    },

    open: function (navState) {
        navState ? this.el.style.right = "0px" : this.el.style.right = "-300px";
    }
};

module.exports = Nav;