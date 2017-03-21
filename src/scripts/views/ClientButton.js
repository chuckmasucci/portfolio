import m from 'mithril'
import ClientModel from '../models/ClientModel'

const ClientButtonView = {
    oncreate(vnode) {
        setTimeout(() => {
            vnode.dom.classList.add('client-container__toggle--transition-in')
        }, 500)
    },

    view(vnode) {
        return (
            <a onclick={ (e) => this.changeClient(e, vnode.attrs.changeClient, vnode.attrs.setdirection, vnode.attrs.direction) } href={ (vnode.attrs.direction == 'prev') && "/client/" + ClientModel.prevClient.slug + '?d=0' || (vnode.attrs.direction == 'next') && '/client/' + ClientModel.nextClient.slug  + '?d=1' } oncreate={ m.route.link } class={"client-container__toggle client-container__toggle-shadow--size-8 client-container__"+vnode.attrs.direction}>
                <div class="client-container__toggle__arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="25" viewBox="0 0 21 25" transform={ (vnode.attrs.direction == 'next') && 'rotate(180)'}>
                        <path d="M13.8 25H21L7.2 12.5 21 0H13.8L0 12.5Z" stroke-width="0.3"/>
                    </svg>
                </div>
            </a>
        )
    },

    changeClient(e, setdirection, changeClient, direction) {
        // TODO Get back/prev browser buttons to work with prev direction
        // TODO Clicking fast issues

        e.redraw = false
        e.preventDefault = true

        setdirection(direction)
        changeClient(direction)

        // Prevents href from firing
        return false
    }
}

module.exports = ClientButtonView
