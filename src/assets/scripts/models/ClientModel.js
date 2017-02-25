var m = require("mithril");

var Clients = {
    list: [],
    client: [],
    firstClient: '',
    currentClient: 0,
    nextClient: 0,
    prevClient: 0,

    loadProject: function (id) {
        return m.request({
            method: "GET",
            url: "/chuckmasucci.github.io/src/assets/data/projects.json",
        }).then(function (result) {
            Clients.list = result;
            for(var i in Clients.list) {
                var client = Clients.list[i];
                if(client.slug == id) {
                    Clients.client = client;
                    break;
                }
            }
        });
    },

    loadList: function () {
        return m.request({
            method: "GET",
            url: "/chuckmasucci.github.io/src/assets/data/projects.json",
        }).then(function (result) {
            Clients.list = result;
        });
    },
    
    getFirstClient: function () {
        return m.request({
            method: "GET",
            url: "/chuckmasucci.github.io/src/assets/data/projects.json",
        }).then(function (result) {
            Clients.firstClient = result[Clients.currentClient].slug;
            Clients.nextClient = result[(Clients.currentClient + 1)].slug;
        });
    },

};

module.exports = Clients;


