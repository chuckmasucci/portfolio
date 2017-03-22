import m from 'mithril'
import App from '../models/App'
import ClientModel from '../models/ClientModel'

class HomeView {
    static oncreate(vnode) {
        // Wait for transition in animation to complere (.5s) and remove the class
        setTimeout(function () {
            vnode.dom.classList.remove("content-container--transition-in--next")
        }, 500);
    }

    static onbeforeremove(vnode) {
        // Add transition out class to dom container
        vnode.dom.classList.add("content-container--transition-out--next")

        // This hold's the mithril lifecycle until the transition animation complextes
        // On complete the onremove method is called and this view is destroyed
        return new Promise((resolve) => {
            setTimeout(resolve, 500)
        });
    }

    static view(vnode) {
        return(
            <section id="content-container" class="home content-container content-container--transition-in--next">
                <div id="content-container__home" class="content-container__home">
                    <div class="content-container__home__title">
                        <h2 class="content-container__home__title__name content-container__home__title--text-shadow--size-8">CHUCK MASUCCI</h2>
                        <h3 class="content-container__home__title__description content-container__home__title--text-shadow--size-3">TECHNICAL DIRECTOR</h3>
                        {Object.keys(ClientModel.currentClient).length > 0 &&
                        <a class="btn btn--green btn--box-shadow" href={"/client/" + ClientModel.currentClient.slug} oncreate={m.route.link}>
                            <span class="btn__copy">VIEW WORK</span>
                        </a>
                        }
                    </div>
                </div>
            </section>
        )
    }
}


module.exports = HomeView
