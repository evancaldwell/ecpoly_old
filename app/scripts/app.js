(function(document) {
  'use strict';

  document.addEventListener('polymer-ready', function() {
    // Perform some behaviour
    console.log('Polymer is ready to rock!');
  });
  
  // setup
  var homePage = document.getElementById('home')
  var bioPage = document.getElementById('bio')
  var projectsPage = document.getElementById('projects')
  var contactPage = document.getElementById('contact')

  // custom transformation: scale header's title
  var titleStyle = document.querySelector('.title').style
  var titleSpan = document.querySelector('#title-text')
  addEventListener('core-header-transform', function(e) {
    var d = e.detail
    var m = d.height - d.condensedHeight
    var scale = Math.max(0.75, (m - d.y) / (m / 0.25)  + 0.75)
    titleStyle.transform = titleStyle.webkitTransform =
    'scale(' + scale + ') translateZ(0)'
    // if (d.condensedHeight === 64) {
    //  titleSpan.style.visibility="hidden"
    // }
  })

  // tab switching
  var tabs = document.querySelector('paper-tabs')
  var pages = document.querySelector('core-pages')

  tabs.addEventListener('core-select', function() {
    pages.selected = tabs.selected
    switch (pages.selected) {
      case 0:
        // homePage.setAttribute("class", "expand")
        // bioPage.setAttribute("class", "compress")
        // projectsPage.setAttribute("class", "compress")
        // contactPage.setAttribute("class", "compress")
        homePage.classList.remove('compress')
        homePage.classList.add('expand')
        homePage.querySelector('#home-inner').classList.remove('raise')
        homePage.querySelector('#home-inner').classList.add('lower', 'delay-1s')
        bioPage.classList.remove('slideout-left')
        bioPage.classList.add('slidein-left')
        projectsPage.classList.remove('slideout-right')
        projectsPage.classList.add('slidein-right')
        contactPage.classList.remove('expand')
        contactPage.classList.add('compress')
        break
      case 1:
        // homePage.setAttribute("class", "compress")
        // bioPage.setAttribute("class", "expand")
        // projectsPage.setAttribute("class", "compress")
        // contactPage.setAttribute("class", "compress")
        homePage.classList.remove('expand')
        homePage.classList.add('compress')
        homePage.querySelector('#home-inner').classList.add('raise')
        homePage.querySelector('#home-inner').classList.remove('lower')
        bioPage.classList.remove('slidein-left')
        bioPage.classList.add('slideout-left')
        projectsPage.classList.remove('slideout-right')
        projectsPage.classList.add('slidein-right')
        contactPage.classList.remove('expand')
        contactPage.classList.add('compress')
        break
      case 2:
        // homePage.setAttribute("class", "compress")
        // bioPage.setAttribute("class", "compress")
        // projectsPage.setAttribute("class", "expand")
        // contactPage.setAttribute("class", "compress")
        homePage.classList.remove('expand')
        homePage.classList.add('compress')
        homePage.querySelector('#home-inner').classList.add('raise')
        homePage.querySelector('#home-inner').classList.remove('lower')
        bioPage.classList.remove('slideout-left')
        bioPage.classList.add('slidein-left')
        projectsPage.classList.remove('slidein-right')
        projectsPage.classList.add('slideout-right')
        contactPage.classList.remove('expand')
        contactPage.classList.add('compress')
        break
      case 3:
        // homePage.setAttribute("class", "compress")
        // bioPage.setAttribute("class", "compress")
        // projectsPage.setAttribute("class", "compress")
        // contactPage.setAttribute("class", "expand")
        homePage.classList.remove('expand')
        homePage.classList.add('compress')
        homePage.querySelector('#home-inner').classList.add('raise')
        homePage.querySelector('#home-inner').classList.remove('lower')
        bioPage.classList.remove('slideout-left')
        bioPage.classList.add('slidein-left')
        projectsPage.classList.remove('slideout-right')
        projectsPage.classList.add('slidein-right')
        contactPage.classList.remove('compress')
        contactPage.classList.add('expand')
        break
    }
  })

  function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }

// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));
