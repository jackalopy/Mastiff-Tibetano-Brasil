
$(document).ready(function() {
    let Animation = require('./controllers/animations');
    let Viewport = require('./controllers/viewport');
    let Menu = require('./controllers/menu');
    let Gallery = require('./controllers/gallery');
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