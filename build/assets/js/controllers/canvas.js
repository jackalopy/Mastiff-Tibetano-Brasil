"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Canvas = (function () {
    function Canvas() {
        _classCallCheck(this, Canvas);

        this.canvas = $('#canvas_section1');
        this.stage = new createjs.Stage("canvas_section1");
        this.background = new createjs.Shape();
        this.background.graphics.beginFill("#ff000030").drawRect(0, 0, viewportCtrl.width * .6, viewportCtrl.height);
        this.stage.addChild(this.background);
        this.polygon = new createjs.Shape();
        this.polygon.graphics.beginFill("DeepSkyBlue").moveTo(0, 0).lineTo(viewportCtrl.width * .6, 0).lineTo(viewportCtrl.width, viewportCtrl.height).lineTo(0, viewportCtrl.height).closePath();
        this.stage.addChild(this.polygon);
        this.stage.update();
        // createjs.Tween.get(polygon, { loop: true })
        //   .to({ x: 400 }, 1000, createjs.Ease.getPowInOut(4))
        //   .to({ alpha: 0, y: 175 }, 500, createjs.Ease.getPowInOut(2))
        //   .to({ alpha: 0, y: 225 }, 100)
        //   .to({ alpha: 1, y: 200 }, 500, createjs.Ease.getPowInOut(2))
        //   .to({ x: 100 }, 800, createjs.Ease.getPowInOut(2))
        //   .to({ y: 100 }, 800, createjs.Ease.getPowInOut(2));

        // createjs.Ticker.setFPS(60);
        // createjs.Ticker.addEventListener("tick", stage);
    }

    _createClass(Canvas, [{
        key: "resize",
        value: function resize() {
            this.canvas.attr('width', viewportCtrl.width * .6);
            this.canvas.attr('height', viewportCtrl.height);
            this.background.graphics.beginFill("#ff000030").drawRect(0, 0, viewportCtrl.width * .6, viewportCtrl.height);
            this.polygon.graphics.beginFill("DeepSkyBlue").moveTo(0, 0).lineTo(viewportCtrl.width * .4, 0).lineTo(viewportCtrl.width * .6, viewportCtrl.height).lineTo(0, viewportCtrl.height).closePath();
            this.stage.update();
        }
    }]);

    return Canvas;
})();

exports["default"] = Canvas;
module.exports = exports["default"];