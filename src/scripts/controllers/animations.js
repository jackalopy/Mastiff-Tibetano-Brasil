import $ from 'jquery';
import tween from 'gsap-tween-lite';
import css from 'gsap-css-plugin';
import 'gsap-scroll-to';

export default class Animation {
    constructor(timeDefault = .5) {
        this.timeDefault = timeDefault;
    }
    
    show(object, time = this.timeDefault, callback) {
        this.fadeIn(object, time, callback);
    }
    
    hide(object, time = this.timeDefault, callback) {
        this.fadeOut(object, time, callback);
    }
    
    slideDown(object, time = this.timeDefault, callback) {
        tween.to(object, time/2, {
           css: {
               height: 200
           },
           ease: Power2.easeInOut,
           onComplete: callback
        });
    }
    
    SlideUp(object, time = this.timeDefault, callback) {
        tween.to(object, time/2, {
           css: {
               height: 0
           },
           ease: Power2.easeInOut,
           onComplete: callback
        });
    }
    
    fadeIn(object, time = this.timeDefault, callback) {
        tween.to(object, time, {
            autoAlpha: 1,
            ease: Power2.easeOut,
            onComplete: callback
        });
    }
    
    fadeOut(object, time = this.timeDefault, callback) {
        tween.to(object, time, {
            autoAlpha: 0,
            ease: Power2.easeIn,
            onComplete: callback
        });
    }
    
    slideToPosition(object, positionX = 0, positionY = 0, time = this.timeDefault, callback) {
        tween.to(object, time, {
            css: {
                top: positionY,
                left: positionX,
            },
            ease: Power2.easeInOut,
            onComplete: callback
        });
    }
    
    css(object, cssObject, time = this.timeDefault, callbackEnd, callbackStart) {
        tween.to(object, time, {
            css: cssObject,
            ease: Power4.easeInOut,
            force3D: true,
            onStart: callbackStart,
            onComplete: callbackEnd
        });
    }
    
    cssLinear(object, cssObject, time = this.timeDefault, callbackEnd, callbackStart) {
        tween.to(object, time, {
            css: cssObject,
            ease: Power0.easeNone,
            force3D: true,
            onStart: callbackStart,
            onComplete: callbackEnd
        });
    }
    
    changeText(object, newText, time = this.timeDefault, callbackEnd, callbackMiddle) {
        let textObject = $('<div class="textAnimation"></div>'),
            letterObject = $('<span class="letter"></span>').css({display: 'inline-block', padding: '10px', margin: '-10px', 'white-space': 'pre', position: 'relative'}),
            height = 50,
            duration = .3,
            newTextLength = newText.length;
            
        if(object.find('.textAnimation').length > 0) {
            textObject = object.find('.textAnimation');
            let oldTextLength = textObject.find('.letter').length;
            
            for(let i = 0; i < oldTextLength; i++) {
                tween.to(object.find('#letter' + i), .3, {
                    ease: Power2.easeInOut,
                    force3D: true,
                    delay: i*duration/3,
                    css: {
                        top: -1* height,
                        opacity: 0,
                        transform: 'rotate(90deg)'
                    },
                    onCompleteScope: object.find('#letter' + i),
                    onComplete: function() {
                        if($(this).attr('id').split('letter')[1] == oldTextLength - 1) {
                            if(callbackMiddle) callbackMiddle();
                            textObject.html('');
                            for(let i = 0; i < newTextLength; i++) {
                                textObject.append(letterObject.clone().text(newText[i]).attr('id', 'letter' + i).css({opacity: 0, top: height, transform: 'rotate(90deg)' }));
                            }
                            
                            for(let i = 0; i < newTextLength; i++) {
                                tween.to(object.find('#letter' + i), .3, {
                                    ease: Power2.easeInOut,
                                    force3D: true,
                                    delay: i*duration/3,
                                    css: {
                                        top: 0,
                                        opacity: 1,
                                        transform: 'rotate(0)'
                                    },
                                    onCompleteScope: object.find('#letter' + i),
                                    onComplete: function() {
                                        if($(this).attr('id').split('letter')[1] == oldTextLength - 1) {
                                            if(callbackEnd) callbackEnd();
                                        }
                                    }
                                });
                            }
                        }
                    }
                });
            }
            
        } else {
            let oldText = object.text(),
                oldTextLength = oldText.length;
                
            for(let i = 0; i < oldTextLength; i++) {
                textObject.append(letterObject.clone().text(oldText[i]).attr('id', 'letter' + i));
            }
            object.html('').append(textObject);
            
            for(let i = 0; i < oldTextLength; i++) {
                tween.to(object.find('#letter' + i), .3, {
                    ease: Power2.easeInOut,
                    force3D: true,
                    delay: i*duration/3,
                    css: {
                        top: -1* height,
                        opacity: 0
                    },
                    onCompleteScope: object.find('#letter' + i),
                    onComplete: function() {
                        if($(this).attr('id').split('letter')[1] == oldTextLength - 1) {
                            textObject.html('');
                            if(callbackMiddle) callbackMiddle();
                            
                            for(let i = 0; i < newTextLength; i++) {
                                textObject.append(letterObject.clone().text(newText[i]).attr('id', 'letter' + i).css({opacity: 0, top: height, transform: 'rotate(90deg)' }));
                            }
                            
                            for(let i = 0; i < newTextLength; i++) {
                                tween.to(object.find('#letter' + i), .3, {
                                    ease: Power2.easeInOut,
                                    force3D: true,
                                    delay: i*duration/3,
                                    css: {
                                        top: 0,
                                        opacity: 1,
                                        transform: 'rotate(0)'
                                    },
                                    onCompleteScope: object.find('#letter' + i),
                                    onComplete: function() {
                                        if($(this).attr('id').split('letter')[1] == oldTextLength - 1) {
                                            if(callbackEnd )callbackEnd();
                                        }
                                    }
                                });
                            }
                        }
                    }
                });
            }
        }
    }
    
    scrollTo(object, y, time = this.timeDefault) {
        tween.to(object, time, {
            scrollTo: {
                y: y
            },
            
            ease: Power4.easeOut
        });
    }
}