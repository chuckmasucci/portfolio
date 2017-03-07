# **Portfolio**

## Description
##### Goals
In developing my portfolio I wanted to create a unique experience where a visitor could quickly and easily click through all of the client work I have completed during my tenure as a Technical Director. The design is very minimalistic - with simple clean transitions.

Navigating the site allows the visitor to easily click previous and next buttons to progress through the list of clients/projects. It will _eventually_ allow for visitors to also navigate via keyboard on desktop and touch gestures on mobile.

##### Framework
Before diving into the code, I reviewed several JavaScript frameworks I could potentially use to create the site, including [React](https://facebook.github.io/react/), [AngularJS](https://angularjs.org/), [Vue](https://vuejs.org/), [Aurelia](http://aurelia.io/), and [Mithril](http://mithril.js.org/). In searching for the right framework to achieve my goals, it needed to have small footprint (lightweight and fast), routing, view templating, and XHR functionalities.

Ultimately I chose the Mithril framework since it was similar to React, but also included XHR and state management without addons.

##### Thoughts
I have enjoyed working with the Mithril framework, and it helped me simply create the portfolio I envisioned. Notwithstanding there were some hurdles I had to overcome to achieve this. The framework is fairly new and recently underwent a full rewrite. The documentation is somewhat robust, but for unique issues that arose during development, it was very difficult to find a similar issue and solution that used the latest version. That being said, there is a very active, online community that can offer real-time assistance _(a request I made is currently under discussion by dev team)_.

##### Pros & Cons
Pros
- Lightweight
- Active community
- MVC
- JSX and hyperscript templating
- Flexibility doesn't force restrictive conventions _(could also be a con in some ways)_
- Good for small projects

Cons
- Not as mature as other frameworks
- Pre-rewrite documentation returns higher search results
- Still in development
- Bad for large projects




## Initial setup
```
$ git clone https://github.com/chuckmasucci/portfolio.git
$ cd portfolio
$ npm install
```
_Server will run on http://localhost:8080/_

## Usage

##### Build & preview on local server
`$ gulp`

##### Build for development
`$ gulp build-dev`

##### Build for deployment
`$ gulp build-prod`


## Supported Browsers
- Desktop
 - Chrome latest
 - Firefox latest
 - Edge latest
- Mobile
 - Chrome latest
 - Safar latest

## Known Issues
- Previous button doesn't animate left-to-right
- Spam clicking back/forward button disrupts transition animation unpleasantly
- Navigation is incomplete and _not available_ in current build
- Only supports latest browsers

## TODO
- Add mobile touch navigation
- Add keyboard navigation
- Complete Navigation
- Make transitions left-to-right
- Add text project/client description content
- Refactor parts of code _(noted as TODO's in source)_
- Convert to ES6
- Clean up Sass
