'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _gsapTweenLite = require('gsap-tween-lite');

var _gsapTweenLite2 = _interopRequireDefault(_gsapTweenLite);

var _gsapCssPlugin = require('gsap-css-plugin');

var _gsapCssPlugin2 = _interopRequireDefault(_gsapCssPlugin);

require('gsap-scroll-to');

var Animation = (function () {
    function Animation() {
        var timeDefault = arguments.length <= 0 || arguments[0] === undefined ? .5 : arguments[0];

        _classCallCheck(this, Animation);

        this.timeDefault = timeDefault;
    }

    _createClass(Animation, [{
        key: 'show',
        value: function show(object, time, callback) {
            if (time === undefined) time = this.timeDefault;

            this.fadeIn(object, time, callback);
        }
    }, {
        key: 'hide',
        value: function hide(object, time, callback) {
            if (time === undefined) time = this.timeDefault;

            this.fadeOut(object, time, callback);
        }
    }, {
        key: 'slideDown',
        value: function slideDown(object, time, callback) {
            if (time === undefined) time = this.timeDefault;

            _gsapTweenLite2['default'].to(object, time / 2, {
                css: {
                    height: 200
                },
                ease: Power2.easeInOut,
                onComplete: callback
            });
        }
    }, {
        key: 'SlideUp',
        value: function SlideUp(object, time, callback) {
            if (time === undefined) time = this.timeDefault;

            _gsapTweenLite2['default'].to(object, time / 2, {
                css: {
                    height: 0
                },
                ease: Power2.easeInOut,
                onComplete: callback
            });
        }
    }, {
        key: 'fadeIn',
        value: function fadeIn(object, time, callback) {
            if (time === undefined) time = this.timeDefault;

            _gsapTweenLite2['default'].to(object, time, {
                autoAlpha: 1,
                ease: Power2.easeOut,
                onComplete: callback
            });
        }
    }, {
        key: 'fadeOut',
        value: function fadeOut(object, time, callback) {
            if (time === undefined) time = this.timeDefault;

            _gsapTweenLite2['default'].to(object, time, {
                autoAlpha: 0,
                ease: Power2.easeIn,
                onComplete: callback
            });
        }
    }, {
        key: 'slideToPosition',
        value: function slideToPosition(object, positionX, positionY, time, callback) {
            if (positionX === undefined) positionX = 0;
            if (positionY === undefined) positionY = 0;
            if (time === undefined) time = this.timeDefault;

            _gsapTweenLite2['default'].to(object, time, {
                css: {
                    top: positionY,
                    left: positionX
                },
                ease: Power2.easeInOut,
                onComplete: callback
            });
        }
    }, {
        key: 'css',
        value: function css(object, cssObject, time, callbackEnd, callbackStart) {
            if (time === undefined) time = this.timeDefault;

            _gsapTweenLite2['default'].to(object, time, {
                css: cssObject,
                ease: Power4.easeInOut,
                force3D: true,
                onStart: callbackStart,
                onComplete: callbackEnd
            });
        }
    }, {
        key: 'cssLinear',
        value: function cssLinear(object, cssObject, time, callbackEnd, callbackStart) {
            if (time === undefined) time = this.timeDefault;

            _gsapTweenLite2['default'].to(object, time, {
                css: cssObject,
                ease: Power0.easeNone,
                force3D: true,
                onStart: callbackStart,
                onComplete: callbackEnd
            });
        }
    }, {
        key: 'changeText',
        value: function changeText(object, newText, time, callbackEnd, callbackMiddle) {
            if (time === undefined) time = this.timeDefault;

            var textObject = (0, _jquery2['default'])('<div class="textAnimation"></div>'),
                letterObject = (0, _jquery2['default'])('<span class="letter"></span>').css({ display: 'inline-block', padding: '10px', margin: '-10px', 'white-space': 'pre', position: 'relative' }),
                height = 50,
                duration = .3,
                newTextLength = newText.length;

            if (object.find('.textAnimation').length > 0) {
                (function () {
                    textObject = object.find('.textAnimation');
                    var oldTextLength = textObject.find('.letter').length;

                    for (var i = 0; i < oldTextLength; i++) {
                        _gsapTweenLite2['default'].to(object.find('#letter' + i), .3, {
                            ease: Power2.easeInOut,
                            force3D: true,
                            delay: i * duration / 3,
                            css: {
                                top: -1 * height,
                                opacity: 0,
                                transform: 'rotate(90deg)'
                            },
                            onCompleteScope: object.find('#letter' + i),
                            onComplete: function onComplete() {
                                if ((0, _jquery2['default'])(this).attr('id').split('letter')[1] == oldTextLength - 1) {
                                    if (callbackMiddle) callbackMiddle();
                                    textObject.html('');
                                    for (var _i = 0; _i < newTextLength; _i++) {
                                        textObject.append(letterObject.clone().text(newText[_i]).attr('id', 'letter' + _i).css({ opacity: 0, top: height, transform: 'rotate(90deg)' }));
                                    }

                                    for (var _i2 = 0; _i2 < newTextLength; _i2++) {
                                        _gsapTweenLite2['default'].to(object.find('#letter' + _i2), .3, {
                                            ease: Power2.easeInOut,
                                            force3D: true,
                                            delay: _i2 * duration / 3,
                                            css: {
                                                top: 0,
                                                opacity: 1,
                                                transform: 'rotate(0)'
                                            },
                                            onCompleteScope: object.find('#letter' + _i2),
                                            onComplete: function onComplete() {
                                                if ((0, _jquery2['default'])(this).attr('id').split('letter')[1] == oldTextLength - 1) {
                                                    if (callbackEnd) callbackEnd();
                                                }
                                            }
                                        });
                                    }
                                }
                            }
                        });
                    }
                })();
            } else {
                (function () {
                    var oldText = object.text(),
                        oldTextLength = oldText.length;

                    for (var i = 0; i < oldTextLength; i++) {
                        textObject.append(letterObject.clone().text(oldText[i]).attr('id', 'letter' + i));
                    }
                    object.html('').append(textObject);

                    for (var i = 0; i < oldTextLength; i++) {
                        _gsapTweenLite2['default'].to(object.find('#letter' + i), .3, {
                            ease: Power2.easeInOut,
                            force3D: true,
                            delay: i * duration / 3,
                            css: {
                                top: -1 * height,
                                opacity: 0
                            },
                            onCompleteScope: object.find('#letter' + i),
                            onComplete: function onComplete() {
                                if ((0, _jquery2['default'])(this).attr('id').split('letter')[1] == oldTextLength - 1) {
                                    textObject.html('');
                                    if (callbackMiddle) callbackMiddle();

                                    for (var _i3 = 0; _i3 < newTextLength; _i3++) {
                                        textObject.append(letterObject.clone().text(newText[_i3]).attr('id', 'letter' + _i3).css({ opacity: 0, top: height, transform: 'rotate(90deg)' }));
                                    }

                                    for (var _i4 = 0; _i4 < newTextLength; _i4++) {
                                        _gsapTweenLite2['default'].to(object.find('#letter' + _i4), .3, {
                                            ease: Power2.easeInOut,
                                            force3D: true,
                                            delay: _i4 * duration / 3,
                                            css: {
                                                top: 0,
                                                opacity: 1,
                                                transform: 'rotate(0)'
                                            },
                                            onCompleteScope: object.find('#letter' + _i4),
                                            onComplete: function onComplete() {
                                                if ((0, _jquery2['default'])(this).attr('id').split('letter')[1] == oldTextLength - 1) {
                                                    if (callbackEnd) callbackEnd();
                                                }
                                            }
                                        });
                                    }
                                }
                            }
                        });
                    }
                })();
            }
        }
    }, {
        key: 'scrollTo',
        value: function scrollTo(object, y) {
            var time = arguments.length <= 2 || arguments[2] === undefined ? this.timeDefault : arguments[2];

            _gsapTweenLite2['default'].to(object, time, {
                scrollTo: {
                    y: y
                },

                ease: Power4.easeOut
            });
        }
    }]);

    return Animation;
})();

exports['default'] = Animation;
module.exports = exports['default'];