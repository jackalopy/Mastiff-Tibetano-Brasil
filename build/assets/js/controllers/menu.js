'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Menu = (function () {
    function Menu() {
        var menuClass = arguments.length <= 0 || arguments[0] === undefined ? 'menu' : arguments[0];
        var mobileMenu = arguments.length <= 1 || arguments[1] === undefined ? 'mobile-menu' : arguments[1];
        var menuButton = arguments.length <= 2 || arguments[2] === undefined ? 'menu-btn' : arguments[2];
        var toSectionClass = arguments.length <= 3 || arguments[3] === undefined ? 'toSection' : arguments[3];
        var sectionClass = arguments.length <= 4 || arguments[4] === undefined ? 'section' : arguments[4];

        _classCallCheck(this, Menu);

        this.menuClass = menuClass;
        this.mobileMenuClass = mobileMenu;
        this.menuButtonClass = menuButton;
        this.toSectionClass = toSectionClass;
        this.sectionClass = sectionClass;
        this.state;
        this.init();
    }

    _createClass(Menu, [{
        key: 'init',
        value: function init() {
            var that = this;
            this.menu = $('.' + this.menuClass);
            this.mobileMenu = $('.' + this.mobileMenuClass);
            this.menuButton = $('.' + this.menuButtonClass);
            this.sections = $('.' + this.sectionClass);
            this.sectionsLength = this.sections.length;
            var dots = $('<div class="dots"></div>');

            console.log('initializing menu');
            console.log(this.sections);
            console.log(this.menu);

            for (var i = 0; i < this.sectionsLength; i++) {
                var dot = $('<div class="dot ' + this.toSectionClass + '" menu_value="' + (i + 1) + '"></div>');
                var hover = $('<div class="hover toAppear"></div>').text($('#' + this.sectionClass + (i + 1)).attr('menu_title'));

                dot.append(hover);
                dot.hover(function () {
                    $(this).find('.hover').addClass('appeared');
                }, function () {
                    $(this).find('.hover').removeClass('appeared');
                });

                dots.append(dot);
            }

            this.menu.append(dots);
            var links = this.mobileMenu.find('.links');

            for (var i = 0; i < this.sectionsLength; i++) {
                var link = $('<li class="link ' + this.toSectionClass + '" menu_value="' + (i + 1) + '"></li>');
                link.text($('#' + this.sectionClass + (i + 1)).attr('menu_title'));

                links.append(link);
            }

            $('.' + this.toSectionClass).on('click', function () {
                console.log($(this));
                console.log($(this).attr('menu_value'));
                console.log('#' + that.sectionClass + $(this).attr('menu_value'));

                viewportCtrl.scrollTo($('#' + that.sectionClass + $(this).attr('menu_value')));
                that.close();
            });

            this.menuButton.on('click', function () {
                that.toggleState();
            });

            this.close();
        }
    }, {
        key: 'open',
        value: function open() {
            this.state = "OPEN";
            this.mobileMenu.addClass('open');
            this.menuButton.addClass('active');
        }
    }, {
        key: 'close',
        value: function close() {
            this.state = "CLOSE";
            this.mobileMenu.removeClass('open');
            this.menuButton.removeClass('active');
        }
    }, {
        key: 'toggleState',
        value: function toggleState() {
            switch (this.state) {
                case "OPEN":
                    this.close();
                    break;
                case "CLOSE":
                    this.open();
                    break;
            }
        }
    }]);

    return Menu;
})();

exports['default'] = Menu;
;
module.exports = exports['default'];