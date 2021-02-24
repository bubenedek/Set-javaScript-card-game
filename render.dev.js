"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderEasy = renderEasy;
exports.renderHard = renderHard;

var _card = require("./card.js");

function renderEasy(state) {
  return renderTableEasy(state.table);
}

function renderHard(state) {
  return renderTableHard(state.table);
}

function renderTableEasy(table) {
  return table.map(renderRowEasy).join("");
}

function renderTableHard(table) {
  return table.map(renderRowHard).join("");
}

function renderRowEasy(row) {
  return row.map(renderCardEasy).join("");
}

function renderRowHard(row) {
  return row.map(renderCardHard).join("");
}

function renderCardEasy(card) {
  var cardName = (card.number + card.color + card.shape).toString();

  if (card.state === _card.CardState.UNSELECTED) {
    return "\n            <div class = \"card\">\n                <div class = \"card-face\">\n                    <img class = \"card-img ".concat(cardName, "\" src=\"icons/easy/").concat(cardName, ".svg\">\n                </div>\n            </div>\n        ");
  }
}

function renderCardHard(card) {
  var cardName = (card.number + card.pattern + card.color + card.shape).toString();

  if (card.state === _card.CardState.UNSELECTED) {
    return "\n            <div class = \"card\">\n                <div class = \"card-face\">\n                    <img class = \"card-img ".concat(cardName, "\" src=\"icons/hard/").concat(cardName, ".svg\">\n                </div>\n            </div>\n        ");
  }
}