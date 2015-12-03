'use strict';

$(document).ready(function () {
    var Animation = require('./controllers/animations');
    var Viewport = require('./controllers/viewport');
    var Menu = require('./controllers/menu');
    var Gallery = require('./controllers/gallery');
    require('scrollreveal');

    window.scrollRevealCtrl = new scrollReveal({
        mobile: true
    });
    window.animationCtrl = new Animation();
    window.viewportCtrl = new Viewport();
    window.menuCtrl = new Menu();
    window.galleryCtrl = new Gallery();

    require('./actions/resize');
    require('./actions/click');
    require('./libraries/lightbox.js');
});