"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Deck = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Egy lapna 4 attributuma lehet:
//  - Szám (1,2,3)
//  - Tartalom (H,O,S)
//  - Szín (g,p,r)
//  - Forma (D,P,S)
var Deck =
/*#__PURE__*/
function () {
  function Deck() {
    _classCallCheck(this, Deck);

    this.numbers = [1, 2, 3];
    this.patterns = ['H', 'O', 'S'];
    this.colors = ['g', 'p', 'r'];
    this.shapes = ['D', 'P', 'S'];
    this.deckEasy = [];
    this.deckHard = [];
  }

  _createClass(Deck, [{
    key: "createDeckHard",
    value: function createDeckHard(deck) {
      for (var n = 0; n < this.numbers.length; ++n) {
        for (var p = 0; p < patterns.length; ++p) {
          for (var c = 0; c < colors.length; ++c) {
            for (var s = 0; s < shapes.length; ++s) {
              this.deck.push(this.numbers[n] + this.patterns[p] + this.colors[c] + this.shapes[s]);
            }
          }
        }
      }
    }
  }, {
    key: "createDeckEasy",
    value: function createDeckEasy(deck) {
      for (var n = 0; n < this.numbers.length; ++n) {
        for (var c = 0; c < this.colors.length; ++c) {
          for (var s = 0; s < this.shapes.length; ++s) {
            this.deck.push(this.numbers[n] + this.colors[c] + this.shapes[s]);
          }
        }
      }
    } //SOURCE: https://javascript.info/task/shuffle

  }, {
    key: "shuffle",
    value: function shuffle(array) {
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
        // swap elements array[i] and array[j]
        // we use "destructuring assignment" syntax to achieve that
        // you'll find more details about that syntax in later chapters
        // same can be written as:
        // let t = array[i]; array[i] = array[j]; array[j] = t

        var _ref = [array[j], array[i]];
        array[i] = _ref[0];
        array[j] = _ref[1];
      }
    }
  }, {
    key: "makeDeckEasy",
    value: function makeDeckEasy(deck) {
      this.createDeckEasy(this.deck);
      this.shuffle(this.deck);
    }
  }, {
    key: "makeDeckHard",
    value: function makeDeckHard(deck) {
      this.createDeckHard(this.deck);
      this.shuffle(this.deck);
    }
  }, {
    key: "draw",
    value: function draw(deck) {
      var svgCard = deck.shift();
      var num = svgCard[0];
      var color = svgCard[1];
      var shape = svgCard[2];
      return {
        num: num,
        shape: shape,
        color: color
      };
    }
  }, {
    key: "getDeckHard",
    value: function getDeckHard() {
      return this.deckHard;
    }
  }, {
    key: "getDeckEasy",
    value: function getDeckEasy() {
      return this.deckEasy;
    }
  }]);

  return Deck;
}();

exports.Deck = Deck;