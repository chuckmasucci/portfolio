import m from 'mithril'

const SwipeOverlay = {
    
    view({ attrs }) {
        return (
            <div class="client-container__overlay-swipe">
                <span>{ attrs.copy }</span>
            </div>
        )
    }
}

module.exports = SwipeOverlay;
