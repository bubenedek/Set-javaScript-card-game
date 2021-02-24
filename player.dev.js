"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Player = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Player =
/*#__PURE__*/
function () {
  function Player(score, isActive) {
    _classCallCheck(this, Player);

    this.score = 0;
    this.isActive = true;
  }

  _createClass(Player, [{
    key: "incScore",
    value: function incScore() {
      this.score += 1;
    }
  }, {
    key: "decScore",
    value: function decScore() {
      if (this.score > 0) {
        this.score -= 1;
      }
    }
  }, {
    key: "getScore",
    value: function getScore() {
      return this.score;
    }
  }]);

  return Player;
}();

exports.Player = Player;