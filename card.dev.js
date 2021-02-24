"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardPlus = exports.Card = exports.CardPattern = exports.CardNumber = exports.CardColor = exports.CardShape = exports.CardState = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CardState = {
  UNSELECTED: 1,
  SELECTED: 2,
  DEAD: 4
};
exports.CardState = CardState;
var CardShape = {
  OVAL: 1,
  WAVY: 2,
  DIAMOND: 4
};
exports.CardShape = CardShape;
var CardColor = {
  RED: 1,
  GREEN: 2,
  PURPLE: 4
};
exports.CardColor = CardColor;
var CardNumber = {
  ONE: 1,
  TWO: 2,
  THREE: 4
};
exports.CardNumber = CardNumber;
var CardPattern = {
  SOLID: 1,
  STRIPED: 2,
  BLANK: 4
};
exports.CardPattern = CardPattern;

var Card =
/*#__PURE__*/
function () {
  function Card(number, color, shape) {
    _classCallCheck(this, Card);

    this.state = CardState.UNSELECTED;
    this.number = number;
    this.color = color;
    this.shape = shape;
  }

  _createClass(Card, [{
    key: "getNumber",
    value: function getNumber() {
      return this.number;
    }
  }, {
    key: "getColor",
    value: function getColor() {
      return this.color;
    }
  }, {
    key: "getShape",
    value: function getShape() {
      return this.shape;
    }
  }]);

  return Card;
}();

exports.Card = Card;

var CardPlus =
/*#__PURE__*/
function (_Card) {
  _inherits(CardPlus, _Card);

  function CardPlus(number, pattern, color, shape) {
    var _this;

    _classCallCheck(this, CardPlus);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CardPlus).call(this));
    _this.state = CardState.UNSELECTED;
    _this.number = number;
    _this.pattern = pattern;
    _this.color = color;
    _this.shape = shape;
    return _this;
  }

  _createClass(CardPlus, [{
    key: "getPattern",
    value: function getPattern() {
      return this.pattern;
    }
  }, {
    key: "getNumber",
    value: function getNumber() {
      return this.number;
    }
  }, {
    key: "getColor",
    value: function getColor() {
      return this.color;
    }
  }, {
    key: "getShape",
    value: function getShape() {
      return this.shape;
    }
  }]);

  return CardPlus;
}(Card);

exports.CardPlus = CardPlus;