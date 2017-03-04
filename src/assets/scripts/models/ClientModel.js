var m = require("mithril");

var ClientsModel = {
    list: [],
    currentClient: [],
    nextClient: [],
    prevClient: [],

    currentIndex: 0,
    prevIndex: 0,
    nextIndex: 0,

    loadList: function (id) {
        return m.request({
            method: "GET",
            url: "/chuckmasucci.github.io/src/assets/data/projects.json",
        }).then(function (result) {
            ClientsModel.list = result;
            // console.log(ClientsModel.list);
        });
    },

    setCurrentClient: function (id) {
        var clientData = this.getClientById(id);

        this.currentIndex = clientData.index;
        this.currentClient = clientData.client;
        console.log('current index = ' + clientData.index)
        this.setPrevClient();
        this.setNextClient();
    },

    setClientByIndex: function (index) {
        this.currentIndex = index;
        this.currentClient = this.list[0];
        // console.log(this.currentClient);
    },

    setNextClient: function () {
        this.nextIndex = this.currentIndex == this.list.length - 1 ? 0 : this.currentIndex + 1;
        this.nextClient = this.list[this.nextIndex];
    },

    setPrevClient: function() {
        this.prevIndex = this.currentIndex == 0 ? this.list.length - 1 : this.currentIndex - 1;
        this.prevClient = this.list[this.prevIndex];
    },

    getClientById: function (id) {
        var index = 0;
        for(var i in ClientsModel.list) {
            var client = ClientsModel.list[i];
            if(client.slug == id) {
                return {client: client, index: index};
                break;
            }

            index++;
        }
    }

};

module.exports = ClientsModel;


