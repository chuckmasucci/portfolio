// App model for holding app state data and event dispatching
// TODO needs some work

var m = require("mithril");
var stream = require('mithril/stream');

var App = {
    // State of the navigation (currently not implemented)
    navState: stream(false),

    // Toggles nav state and dispatches event for other classes to react upon
    toggleNav: function () {
        this.navState(!this.navState());
        this.sendUpdate(new Event('navState'));
    },

    // Changes nav state based on @param state
    updateNav: function(state) {
        this.navState(state);
        this.sendUpdate(new Event('navState'));
    },

    // Dispatch event helper
    sendUpdate: function (e) {
        window.dispatchEvent(e);
    },

    // Holds the main content container for each different view (used for transition animations)
    // TODO not sure if this is the best place for this
    setContentContainer: function (elem) {
        this.contentContainer = elem;
    }
};

module.exports = App;