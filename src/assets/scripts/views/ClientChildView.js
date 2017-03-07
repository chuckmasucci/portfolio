var m = require("mithril");
var ClientModel = require("../models/ClientModel");
var App = require("../models/App.js");

var ClientChildView = {
    navHold: false,
    oninit: function (vnode) {
        // Get the initial state of the child view
        this.initial = vnode.attrs.initial;

        // TODO Refactor when nav functionality is rebuilt
        var self = this;
        window.addEventListener('navState', function (e) {
            self.navHold = true;
        }, false);
    },

    oncreate: function (vnode) {
        // Transition in
        vnode.dom.classList.remove('content-container--transition-out');
        vnode.dom.classList.add('content-container--transition-in');
    },

    onbeforeupdate: function (vnode, old) {
        //TODO Make this better

        // TODO Refactor when nav functionality is rebuilt
        if(this.navHold) {
            this.navHold = false;
            return false;
        }

        // Checks initial boolean to determine if we are holding or transitioning out
        if(this.initial) {
            this.initial = false;
        }
        else {
            this.transitionOut(vnode);
            return false;
        }
    },

    onupdate: function (vnode) {
        // Transition in content
        vnode.dom.classList.remove('content-container--transition-out');
        vnode.dom.classList.add('content-container--transition-in');
    },

    transitionOut: function () {
        // Transition out content
        document.getElementById('client-container__clients').classList.remove('content-container--transition-in');
        document.getElementById('client-container__clients').classList.add('content-container--transition-out');
        this.initial = true;

        // We hold for .5s here in order to allow the content to transition out before we redraw the dom and transition in new client content
        setTimeout(m.redraw, 500);
    },

    view: function (vnode) {
        return(
            <div id="client-container__clients" class="client-container__clients">
            {('title' in ClientModel.currentClient) &&
                <div class="client-container__clients__content">
                    <span>
                        <img src={ClientModel.currentClient.images.hero} class="client-container__clients__content__hero" />

                        <div class="client-container__clients__content__title client-container__clients__content__title--shadow-size-8">{ClientModel.currentClient.title}</div>
                        <div class="client-container__clients__content__role">{ClientModel.currentClient.role}</div>
                    </span>
                </div>
            }
            </div>
        )
    }
};
module.exports = ClientChildView;