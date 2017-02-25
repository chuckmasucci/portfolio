var m = require("mithril");

var ClientChildView = {

    view: function (vnode) {
        return(
            <div>{vnode.attrs.name}</div>
        )
    }
};

module.exports = ClientChildView;