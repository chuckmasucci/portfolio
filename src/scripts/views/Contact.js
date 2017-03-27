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
                                        <a href="mailto:cmasucci@gmail.com">
                                          <i class="fa fa-envelope-o"></i> <span>Email</span>
                                        </a>
                                    </div>
                                </div>
                                <div class="contact-container__information__content-container__content-item">
                                    <div class="contact-container__information__content-container__content-item--title">
                                        <a href="http://linkedin.com/in/chuckmasucci/" target="_blank">
                                            <i class="fa fa-linkedin"></i> LinkedIn
                                        </a>
                                    </div>
                                </div>
                                <div class="contact-container__information__content-container__content-item">
                                    <div class="contact-container__information__content-container__content-item--title">
                                        <a href="https://www.dropbox.com/s/9ln2fihrpa4fhxi/Resume-Chuck_Masucci.pdf?dl=1" target="_blank">
                                            <i class="fa fa-file-text-o"></i> Resume
                                        </a>
                                    </div>
                                </div>
                                <div class="contact-container__information__content-container__content-item">
                                    <div class="contact-container__information__content-container__content-item--title">
                                        <a href="https://github.com/chuckmasucci/" target="_blank">
                                            <i class="fa fa-github"></i> GitHub
                                        </a>
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
