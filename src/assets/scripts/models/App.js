var m = require("mithril");
var stream = require('mithril/stream');

var App = {
    navState: stream(false),

    toggleNav: function () {
        this.navState(!this.navState());
        this.sendUpdate(new Event('navState'));
    },

    updateNav: function(state) {
        this.navState(state);
        this.sendUpdate(new Event('navState'));
    },

    sendUpdate: function (e) {
        window.dispatchEvent(e);
    }
};

module.exports = App;