import m from 'mithril'
import App from '../models/App'
import ClientModel from '../models/ClientModel'

class HomeView {
    static oncreate(vnode) {
        // Wait for transition in animation to complere (.5s) and remove the class
        setTimeout(function () {
            vnode.dom.classList.remove("content-container--transition-in")
        }, 500);
    }

    static onbeforeremove() {
        // Inform the App model the page is being removed - this informs the nav to close
        App.sendUpdate(new Event("pageState"))

        // Declare the container element that will animate before being removed
        var transitionContainer = document.getElementById("content-container__home")
        transitionContainer.classList.add("content-container--transition-out")

        // This hold's the mithril lifecycle until the transition animation completes
        // On complete the onremove method is called and this view is destroyed
        return new Promise(function(resolve) {
            setTimeout(resolve, 500)
        });
    }

    static onupdate(vnode) {
        // Move content container element when nav is open or closed
        // Using vnode.attrs.nav attribute from parent Layout

        if(vnode.attrs.nav == 'opening') {
            vnode.dom.classList.add('content-container--nav-open')
        }
        else if(vnode.attrs.nav == 'closing') {
            vnode.dom.classList.remove('content-container--nav-open')
        }
    }

    static view() {
        return(
            <section id="content-container" class="home content-container content-container--transition-in">
                <div id="content-container__home" class="content-container__home">
                    <div class="content-container__home__title">
                        <h2 class="content-container__home__title__name content-container__home__title--text-shadow--size-8">CHUCK MASUCCI</h2>
                        <h3 class="content-container__home__title__description content-container__home__title--text-shadow--size-3">TECHNICAL DIRECTOR</h3>
                        {Object.keys(ClientModel.currentClient).length > 0 &&
                        <a class="btn btn--green btn--box-shadow" href={"/client/" + ClientModel.currentClient.slug} oncreate={m.route.link}>
                            <span class="btn__copy">VIEW</span>
                        </a>
                        }
                    </div>
                </div>
            </section>
        )
    }
}


module.exports = HomeView
