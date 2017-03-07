// Projects
// This view has been deprecated



// var m = require("mithril");
// var App = require("../models/App.js");
// var ProjectsModel = require("../models/ClientModel");
//
// var ProjectsView = {
//     oninit: ProjectsModel.loadList,
//
//     onbeforeremove: function (vnode) {
//         console.log("projects");
//         App.sendUpdate(new Event("pageState"));
//         vnode.dom.classList.add("content-container--transition-out");
//
//         return new Promise(function(resolve) {
//             setTimeout(resolve, 500);
//         })
//
//
//     },
//
//     view: function() {
//         return(
//             <section id="content-container" class="projects content-container content-container--transition-in">
//                 <div class="projects__title">
//                     <h2 class="projects__title__name projects__title--text-shadow--size-8">PROJECTS</h2>
//                 </div>
//                 <div class="projects__list-container">
//                     <div class="projects__list-container__grid">
//                         {ProjectsModel.list.map(function(project) {
//                             return (
//                                 <div class="projects__list-container__grid__cell">
//                                     <a href={"#!/project/" + project.slug + "/"}>
//                                         <img class="projects__list-container__grid__cell__image projects__list-container__grid__cell__image--shadow" src={project.images.thumbnail} alt={project.title} />
//                                         <div class="projects__list-container__grid__cell__overlay" style={"background-color:" + project.color}>
//                                             <div class="projects__list-container__grid__cell__overlay__copy">{project.title}</div>
//                                         </div>
//                                     </a>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </section>
//         )
//     }
// };
//
//
// module.exports = ProjectsView;