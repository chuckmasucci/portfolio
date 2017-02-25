// Home
var m = require("mithril");
var App = require("../models/App.js");
var ClientModel = require("../models/ClientModel");

var HomeView = {
    oninit:  ClientModel.getFirstClient,

    onbeforeremove: function (vnode) {
        App.sendUpdate(new Event("pageState"));
        vnode.dom.classList.add("content-container--transition-out");

        return new Promise(function(resolve) {
            setTimeout(resolve, 500);
        })
    },

    view: function() {
        return(
            <section id="content-container" class="home content-container content-container--transition-in">
                <div class="content-container__title">
                    <h2 class="content-container__title__name content-container__title--text-shadow--size-8">CHUCK MASUCCI</h2>
                    <h3 class="content-container__title__description content-container__title--text-shadow--size-3">TECHNICAL DIRECTOR</h3>
                    <a class="btn btn--green btn--box-shadow" href={"#!/client/" + ClientModel.firstClient}>
                        {ClientModel.firstClient.length > 0 &&
                            <span class="btn__copy">VIEW</span>
                        }
                    </a>
                </div>
            </section>
        )
    }
};


module.exports = HomeView;