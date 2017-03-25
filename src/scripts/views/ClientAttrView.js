import m from 'mithril'

const ClientAttr = {
    view({ attrs }) {
        return(
            <div class="client-container__clients__content__attributes__container client-container__clients__content__attributes__container--box-shadow" style={ "background-color:" + attrs.bgcolor }>
                <p class="client-container__clients__content__attributes__container__desc">{ attrs.description }</p>
                <p class="client-container__clients__content__attributes__container__copy">{ attrs.copy }</p>
            </div>
        )
    }
}

module.exports = ClientAttr
