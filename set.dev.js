"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSetEasy = isSetEasy;
exports.isSetHard = isSetHard;
exports.isContainsSetEasy = isContainsSetEasy;
exports.findSetEasy = findSetEasy;
exports.isContainsSetHard = isContainsSetHard;
exports.findSetHard = findSetHard;

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

function isSetEasy(cards) {
  var card1 = cards[0];
  var card2 = cards[1];
  var card3 = cards[2];

  if (checkEasyAttributes(card1, card2, card3)) {
    return true;
  } else {
    return false;
  }
}

function isSetHard(cards) {
  var card1 = cards[0];
  var card2 = cards[1];
  var card3 = cards[2];

  if (checkHardAttributes(card1, card2, card3)) {
    return true;
  } else {
    return false;
  }
}

function isContainsSetEasy(cards) {
  var exit = false;
  cards.forEach(function (firstCardRow) {
    firstCardRow.forEach(function (firstCardCol) {
      cards.forEach(function (secondCardRow) {
        secondCardRow.forEach(function (secondCardCol) {
          if (firstCardCol != "" && secondCardCol != "" && (firstCardCol != secondCardCol || firstCardRow != secondCardRow)) {
            cards.forEach(function (thirdCardRow) {
              thirdCardRow.forEach(function (thirdCardCol) {
                if (thirdCardCol != "" && (firstCardCol != thirdCardCol || firstCardRow != thirdCardRow) && (thirdCardCol != secondCardCol || thirdCardRow != secondCardRow)) {
                  if (checkEasyAttributes(firstCardCol, secondCardCol, thirdCardCol)) {
                    exit = true;
                  }

                  ;
                }
              });
            });
          }
        });
      });
    });
  });
  return exit;
}

function findSetEasy(cards) {
  var set = [];
  cards.forEach(function (firstCardRow) {
    firstCardRow.forEach(function (firstCardCol) {
      cards.forEach(function (secondCardRow) {
        secondCardRow.forEach(function (secondCardCol) {
          if (firstCardCol != "" && secondCardCol != "" && (firstCardCol != secondCardCol || firstCardRow != secondCardRow)) {
            cards.forEach(function (thirdCardRow) {
              thirdCardRow.forEach(function (thirdCardCol) {
                if (thirdCardCol != "" && (firstCardCol != thirdCardCol || firstCardRow != thirdCardRow) && (thirdCardCol != secondCardCol || thirdCardRow != secondCardRow)) {
                  if (checkEasyAttributes(firstCardCol, secondCardCol, thirdCardCol)) {
                    set = [firstCardCol, secondCardCol, thirdCardCol];
                  }

                  ;
                }
              });
            });
          }
        });
      });
    });
  });
  return set;
}

function isContainsSetHard(cards) {
  var exit = false;
  cards.forEach(function (firstCardRow) {
    firstCardRow.forEach(function (firstCardCol) {
      cards.forEach(function (secondCardRow) {
        secondCardRow.forEach(function (secondCardCol) {
          if (firstCardCol != "" && secondCardCol != "" && (firstCardCol != secondCardCol || firstCardRow != secondCardRow)) {
            cards.forEach(function (thirdCardRow) {
              thirdCardRow.forEach(function (thirdCardCol) {
                if (thirdCardCol != "" && (firstCardCol != thirdCardCol || firstCardRow != thirdCardRow) && (thirdCardCol != secondCardCol || thirdCardRow != secondCardRow)) {
                  if (checkHardAttributes(firstCardCol, secondCardCol, thirdCardCol)) {
                    exit = true;
                  }

                  ;
                }
              });
            });
          }
        });
      });
    });
  });
  return exit;
}

function findSetHard(cards) {
  var set = [];
  cards.forEach(function (firstCardRow) {
    firstCardRow.forEach(function (firstCardCol) {
      cards.forEach(function (secondCardRow) {
        secondCardRow.forEach(function (secondCardCol) {
          if (firstCardCol != "" && secondCardCol != "" && (firstCardCol != secondCardCol || firstCardRow != secondCardRow)) {
            cards.forEach(function (thirdCardRow) {
              thirdCardRow.forEach(function (thirdCardCol) {
                if (thirdCardCol != "" && (firstCardCol != thirdCardCol || firstCardRow != thirdCardRow) && (thirdCardCol != secondCardCol || thirdCardRow != secondCardRow)) {
                  if (checkHardAttributes(firstCardCol, secondCardCol, thirdCardCol)) {
                    set = [firstCardCol, secondCardCol, thirdCardCol];
                  }

                  ;
                }
              });
            });
          }
        });
      });
    });
  });
  return set;
}

function checkNumber(c1, c2, c3) {
  if (c1.number === c2.number && c2.number === c3.number) {
    return true;
  }

  if (c1.number != c2.number && c1.number != c3.number && c2.number != c3.number) {
    return true;
  }

  return false;
}

function checkColor(c1, c2, c3) {
  if (c1.color === c2.color && c2.color === c3.color) {
    return true;
  }

  if (c1.color != c2.color && c1.color != c3.color && c2.color != c3.color) {
    return true;
  }

  return false;
}

function checkShape(c1, c2, c3) {
  if (c1.shape === c2.shape && c2.shape === c3.shape) {
    return true;
  }

  if (c1.shape != c2.shape && c1.shape != c3.shape && c2.shape != c3.shape) {
    return true;
  }

  return false;
}

function checkPattern(c1, c2, c3) {
  if (c1.pattern === c2.pattern && c2.pattern === c3.pattern) {
    return true;
  }

  if (c1.pattern != c2.pattern && c1.pattern != c3.pattern && c2.pattern != c3.pattern) {
    return true;
  }

  return false;
}

function checkEasyAttributes(c1, c2, c3) {
  if (checkNumber(c1, c2, c3) && checkColor(c1, c2, c3) && checkShape(c1, c2, c3)) {
    return true;
  }

  return false;
}

function checkHardAttributes(c1, c2, c3) {
  if (checkNumber(c1, c2, c3) && checkColor(c1, c2, c3) && checkShape(c1, c2, c3) && checkPattern(c1, c2, c3)) {
    return true;
  }

  return false;
}