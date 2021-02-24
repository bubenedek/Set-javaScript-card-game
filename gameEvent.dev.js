"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GameEvent = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function $(id) {
  return document.querySelector(id);
}

function $$(id) {
  return document.querySelectorAll(id);
}

function delegate(parent, type, selector, handler) {
  parent.addEventListener(type, function (event) {
    var targetElement = event.target.closest(selector);

    if (this.contains(targetElement)) {
      handler.call(targetElement, event);
    }
  });
}

var GameEvent =
/*#__PURE__*/
function () {
  function GameEvent() {
    _classCallCheck(this, GameEvent);
  }

  _createClass(GameEvent, [{
    key: "handleCardClick",
    value: function handleCardClick(e) {
      console.log(e.target);
    }
  }]);

  return GameEvent;
}();

exports.GameEvent = GameEvent;