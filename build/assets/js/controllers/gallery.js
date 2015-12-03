'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _dragdealer = require('dragdealer');

var _dragdealer2 = _interopRequireDefault(_dragdealer);

var Gallery = (function () {
    function Gallery() {
        _classCallCheck(this, Gallery);

        this.initMobile();
        this.initDesk();
    }

    _createClass(Gallery, [{
        key: 'initMobile',
        value: function initMobile() {
            var galleries = $('.gallery');
            var Dragdealer = _dragdealer2['default'].Dragdealer;
            this.draggers = [];
            var that = this;
            galleries.each(function () {

                var thatGallery = this;
                var dragger = new Dragdealer($(this).attr('id'), {
                    steps: $(this).find('.slide').length,
                    speed: 0.3,
                    loose: true,
                    requestAnimationFrame: true,
                    callback: function callback(x, y) {
                        var step = dragger.getStep()[0];
                        $(thatGallery).parent().find('.buttons').find('.button').each(function () {
                            console.log($(this));
                            if ($(this).attr('value') == step) {
                                $(this).addClass('active');
                            } else {
                                $(this).removeClass('active');
                            }
                        });
                    }
                });

                that.draggers.push(dragger);

                var buttons = $('<div class="buttons"></div>');
                var galleryLength = $(this).find('.slide').length;
                for (var i = 1; i <= galleryLength; i++) {
                    var button = $('<div class="button button' + i + (i == 1 ? ' active' : '') + '" value="' + i + '"></div>');
                    button.on('click', function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        e.stopImmediatePropagation();
                        dragger.setStep($(this).attr('value'));
                        console.log($(this).attr('value'));
                    });
                    buttons.append(button);
                }

                $(this).parent().append(buttons);
            });
        }
    }, {
        key: 'initDesk',
        value: function initDesk() {
            var galleries = $('#section4').find('.content.desk-only').find('.dog');
            var position = 0;
            var size = galleries.length;

            console.log(galleries);

            galleries.each(function () {
                $(this).find('.background').on('click', function () {
                    nextStep();
                });
            });

            var firstBack = $('<div class="firstBackground"></div>');
            var lastBack = $('<div class="lastBackground"></div>');

            $(galleries).first().css({
                'border-left': 'solid 4px #fff'
            });

            $(galleries).last().css({
                'border-right': 'solid 4px #fff'
            });

            firstBack.css({
                'display': 'inline-block',
                'width': '90px',
                'height': '100%',
                'margin-right': '-90px',
                'z-index': '-1',
                'background-image': $(galleries).last().find('.background').css('background-image'),
                'background-size': 'auto 100%',
                'background-position': 'top right',
                'cursor': 'pointer'
            }).on('click', function () {
                setStep(size - 1);
            });

            lastBack.css({
                'display': 'inline-block',
                'width': '90px',
                'height': '100%',
                'margin-right': '-90px',
                'z-index': '-1',
                'background-image': $(galleries).first().find('.background').css('background-image'),
                'background-size': 'auto 100%',
                'background-position': 'top left',
                'cursor': 'pointer'
            }).on('click', function () {
                setStep(0);
            });

            $(galleries).parent().prepend(firstBack);
            $(galleries).parent().append(lastBack);

            setStep(0);

            function nextStep() {
                setStep(position + 1);
            }

            function setStep(newStep) {
                console.log('setting step to ' + newStep);
                position = newStep % size;
                animationCtrl.css(galleries[0], {
                    'margin-left': 'calc(' + -100 * position + '% + ' + 90 * position + 'px)'
                }, .8);
                console.log('uhn...');
            }
        }
    }]);

    return Gallery;
})();

exports['default'] = Gallery;
module.exports = exports['default'];