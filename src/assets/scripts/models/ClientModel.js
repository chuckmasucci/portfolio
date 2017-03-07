var m = require("mithril");
var App = require("../models/App.js");

var ClientsModel = {
    list: [],
    currentClient: [],
    nextClient: [],
    prevClient: [],

    currentIndex: 0,
    prevIndex: 0,
    nextIndex: 0,

    id: '',

    // Load client data JSON file
    loadList: function (id) {
        return m.request({
            method: "GET",
            url: "/assets/data/projects.json",
        }).then(function (result) {
            ClientsModel.list = result;

            if(id === undefined) {
                ClientsModel.setClientByIndex(0);
            }
            else {
                ClientsModel.setCurrentClientId(id);
                ClientsModel.setClientData()
            }
        });
    },

    // Defines the client slug
    setCurrentClientId: function (id) {
        this.id = id;
    },

    // Defines previous, current, and next client data into separate objects based on global id
    setClientData: function () {
        var clientData = this.getClientById(this.id);
        this.currentIndex = clientData.index;
        this.currentClient = clientData.client;
        this.setPrevClient();
        this.setNextClient();

    },

    // Defines previous, current, and next client data into separate objects based on @param index
    setClientByIndex: function (index) {
        this.currentIndex = index;
        this.currentClient = this.list[0];
        this.setPrevClient();
        this.setNextClient();
    },

    setNextClient: function () {
        this.nextIndex = this.currentIndex == this.list.length - 1 ? 0 : this.currentIndex + 1;
        this.nextClient = this.list[this.nextIndex];
    },

    setPrevClient: function() {
        this.prevIndex = this.currentIndex == 0 ? this.list.length - 1 : this.currentIndex - 1;
        this.prevClient = this.list[this.prevIndex];
    },

    // Returns current client based on client slug @param id
    getClientById: function (id) {
        var index = 0;
        for(var i in ClientsModel.list) {
            var client = ClientsModel.list[i];
            if(client.slug == id) {
                return {client: client, index: index};
            }

            index++;
        }
    }

};

module.exports = ClientsModel;


