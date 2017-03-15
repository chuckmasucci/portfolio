import m from 'mithril'
import ClientModel from '../models/ClientModel'

class ClientButtonView {
    static oncreate(vnode) {
        vnode.state.direction = vnode.attrs.direction;
    }

    static view(vnode) {
        return (
            <a href={ (vnode.state.direction == 'prev') && "/client/" + ClientModel.prevClient.slug + '?d=0' || (vnode.state.direction == 'next') && '/client/' + ClientModel.nextClient.slug  + '?d=1' } oncreate={ m.route.link } class={"client-container__toggle client-container__toggle-shadow--size-8 client-container__"+vnode.attrs.direction}>
                <div class="client-container__toggle__arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="25" viewBox="0 0 21 25" transform={ (vnode.state.direction == 'next') && 'rotate(180)'}>
                        <path d="M13.8 25H21L7.2 12.5 21 0H13.8L0 12.5Z" stroke-width="0.3"/>
                    </svg>
                </div>
            </a>
        )
    }
}

module.exports = ClientButtonView
