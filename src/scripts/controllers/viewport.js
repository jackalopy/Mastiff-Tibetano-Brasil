export default class Viewport {
    constructor() {
        
    }
    
    scrollTo(object) {
        animationCtrl.scrollTo(window, object.offset().top, 1);
    }
    
    resize() {
        this.height = $('#section1').height();
        this.width = $('#section1').width();
    }
};