import m from 'mithril'

class ContactView {
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

    static view() {
        return(
            <section id="content-container" class="content-container contact-container content-container--transition-in--next">

                <div class="contact-container__holder">
                    <div class="contact-container__information">
                        <h2 class="contact-container__title__name contact-container__title--text-shadow--size-8">CONTACT</h2>
                        <div class="contact-container__information__content-container contact-container__information__content-container--photo">
                            <img class="contact-container__information__photo" src="assets/images/picture-chuck.jpg" alt="Chuck Masucci" />
                        </div>
                        <div class="contact-container__information__content-container contact-container__information__content-container--text">
                            <div class="contact-container__information__content-container__content-items">
                                <div class="contact-container__information__content-container__content-item">
                                    <div class="contact-container__information__content-container__content-item--title">
                                        //email
                                    </div>
                                    <div class="contact-container__information__content-container__content-item--link">
                                        <a href="mailto:cmasucci@gmail.com">cmasucci@gmail.com</a>
                                    </div>
                                </div>
                                <div class="contact-container__information__content-container__content-item">
                                    <div class="contact-container__information__content-container__content-item--title">
                                        //resume
                                    </div>
                                    <div class="contact-container__information__content-container__content-item--link">
                                        <a href="http://linkedin.com/in/chuckmasucci/" target="_blank">linkedin.com/in/chuckmasucci/</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

module.exports = ContactView
