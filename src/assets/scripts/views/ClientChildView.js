var m = require("mithril");

var ClientChildView = {
    oninit: function () {

    },

    onupdate: function (vnode) {
        console.log('onupdate ' + vnode.attrs.name);
        console.log(vnode.client);
    },

    view: function (vnode) {
        return(
            <div>{vnode.attrs.name}</div>
        )
    }
};

module.exports = ClientChildView;