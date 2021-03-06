import m from 'mithril'

class ClientsModel {
    // Load client data JSON file
    static loadList(id) {
        this.list = []
        this.currentClient = []
        this.nextClient = []
        this.prevClient = []
        this.currentIndex = 0
        this.prevIndex = 0
        this.nextIndex = 0
        this.id = ''

        return m.request({
            method: "GET",
            url: "/assets/data/projects.json",
        }).then((result) => {
            ClientsModel.list = result
            if(id === undefined) {
                ClientsModel.setClientByIndex(0)
            }
            else {
                ClientsModel.setCurrentClientId(id)
                ClientsModel.setClientData()
            }
        })
    }

    // Defines the client slug
    static setCurrentClientId(id) {
        this.id = id
    }

    // Defines previous, current, and next client data into separate objects based on global id
    static setClientData() {
        var clientData = this.getClientById(this.id)
        this.currentIndex = clientData.index
        this.currentClient = clientData.client
        this.setPrevClient()
        this.setNextClient()

    }

    // Defines previous, current, and next client data into separate objects based on @param index
    static setClientByIndex(index) {
        this.currentIndex = index
        this.currentClient = this.list[0]
        this.setPrevClient()
        this.setNextClient()
    }

    static setNextClient() {
        this.nextIndex = this.currentIndex == this.list.length - 1 ? 0 : this.currentIndex + 1
        this.nextClient = this.list[this.nextIndex]
    }

    static setPrevClient() {
        this.prevIndex = this.currentIndex === 0 ? this.list.length - 1 : this.currentIndex - 1
        this.prevClient = this.list[this.prevIndex]
    }

    // Returns current client based on client slug @param id
    static getClientById(id) {
        var index = 0
        for(let i in ClientsModel.list) {
            let client = ClientsModel.list[i]
            if(client.slug == id)
                return { client: client, index: index }

            index++
        }
    }

}

module.exports = ClientsModel
