var m = require("mithril");
var App = require("../models/App.js");
var ClientModel = require("../models/ClientModel");

//{Projects.project.images.thumbnail}

const ProjectView = {
    client: '',
    toggles: '',

    oninit: function(vnode) {
        this.data = {state: "initial"};
        ClientModel.loadProject(vnode.attrs.id);
    },

    oncreate: function (vnode) {
        setTimeout(function () {
            this.toggles = document.getElementsByClassName("client-container__toggle");

            for (var i = 0; i < toggles.length; i++) {
                toggles[i].classList.add("client-container__toggle--transition-in");
            }
        }, 500);
    },

    onbeforeupdate: function(vnode, old) {


    },

    onupdate: function (vnode) {
        console.log("update");
    },

    onbeforeremove: function (vnode) {

        App.sendUpdate(new Event("pageState"));
        vnode.dom.classList.add("content-container--transition-out");

        for (var i = 0; i < toggles.length; i++) {
            toggles[i].classList.add("client-container__toggle--transition-out");
        }

        return new Promise(function(resolve) {
            setTimeout(resolve, 500);
        })
    },

    view: function (vnode) {
        console.log(vnode);
        return(
            <section id="content-container" class="client-container content-container content-container--transition-in">
                {vnode.children[0]}
                <br/>
                {vnode.children[1]}
                {/*
                <a href="#" class="client-container__toggle client-container__toggle-shadow--size-8 client-container__prev">
                    <div class="client-container__toggle__arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="25" viewBox="0 0 21 25">
                            <path d="M13.8 25H21L7.2 12.5 21 0H13.8L0 12.5Z" stroke-width="0.3"/>
                        </svg>
                    </div>
                </a>

                <a href={"/client/" + ClientModel.nextClient} oncreate={m.route.link} class="client-container__toggle client-container__toggle-shadow--size-8 client-container__next">
                    <div class="client-container__toggle__arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="25" viewBox="0 0 21 25">
                            <path d="M7.2 0H0L13.8 12.5 0 25H7.2L21 12.5Z" stroke-width="0.3"/>
                        </svg>
                    </div>
                </a>
                {Object.keys(ClientModel.client).length > 0 &&
                <div class="client-container__content">
                    <img src={ClientModel.client.images.hero} class="client-container__content__hero" />

                    <div class="client-container__content__title client-container__content__title--shadow-size-8">{ClientModel.client.title}</div>
                    <div class="client-container__content__role">{ClientModel.client.role}</div>

                </div>
                }*/}
            </section>
        )
    }
};

module.exports = ProjectView;