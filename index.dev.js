"use strict";

var _state = require("./state.js");

var _gameEvent = require("./gameEvent.js");

var _render = require("./render.js");

var _player = require("./player.js");

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

var rulesBtn = $('#rulesBtn');
var rulesDiv = $('.rules');
var playBtn = $('#playBtn');
var nextBtn = $('#nextBtn');
var startBtn = $('#startBtn');
var isCSetBtn = $('#isCSetBtn');
var findSetBtn = $('#findSetBtn');
var addThreeBtn = $('#addThreeBtn');
var tlEasyBtn = $('#topListEasyBtn');
var tlHardBtn = $('#topListHardBtn');
var tlMultiplayerBtn = $('#topListMultiplayerBtn');
var mainMenuEasyBtn = $('#backEasyBtn');
var mainMenuHardBtn = $('#backHardBtn');
var mainMenuMultiplayerBtn = $('#backMultiplayerBtn');
var numOfPlayers = 0;
var gameType = 0; // 1 = Training, 2 = Competitive

var players = [];
var difficulty = 0; // 1 = easy(3 attr), 2 = hard(4attr)

var isSetBtn = false;
var showSetBtn = false;
var manualSetBtn = false;
var state = new _state.AppState();
var gameArea = $('.game-board');
var gameEvent = new _gameEvent.GameEvent();
var player = new _player.Player();
var toMainMenuBtn = $('.toMainMenuBtn');

function init() {
  rulesBtn.addEventListener('click', handleRulesBtn);
  rulesDiv.addEventListener('click', removeRules);
  playBtn.addEventListener('click', handlePlayBtn);
  getCheckedPlayerRadio();
  getCheckedGameMode();
  getCheckedGameDifficulty();
  setIsSetBtnValue();
  setShowSetBtnValue();
  setManualSetBtn();
  nextBtn.addEventListener('click', handleNextBtn);
  startBtn.addEventListener('click', handleStartBtn);
  delegate(gameArea, 'click', '.card', function (e) {
    gameEvent.handleCardClick(e, gameEvent.selectedCards, state, difficulty, player);
  });
  isCSetBtn.addEventListener('click', function (e) {
    gameEvent.handleIsCSetBtn(e, difficulty, state);
  });
  findSetBtn.addEventListener('click', function (e) {
    gameEvent.handleFindSetBtn(e, difficulty, state);
  });
  addThreeBtn.addEventListener('click', function (e) {
    gameEvent.handleAddThreeBtn(e, difficulty, state);
  });
  toMainMenuBtn.addEventListener('click', handleMainMenuBtn);
  tlEasyBtn.addEventListener('click', handleEasyTopListBtn);
  tlHardBtn.addEventListener('click', handleHardTopListBtn);
  tlMultiplayerBtn.addEventListener('click', handleMultiplayerTopListBtn);
  mainMenuEasyBtn.addEventListener('click', handleBackEasyBtn);
  mainMenuHardBtn.addEventListener('click', handleBackHardBtn);
  mainMenuMultiplayerBtn.addEventListener('click', handleBackMultiplayerBtn);
}

function handleRulesBtn(e) {
  $(".rules").classList.add("visible");
}

function removeRules(e) {
  if ($(".rules").classList.contains("visible")) {
    $(".rules").classList.remove("visible");
  }
}

function handlePlayBtn(e) {
  $(".play-menu").classList.add("visible");
  $(".main-menu").classList.remove("visible");
}

function getNumOfPlayers() {
  $$('input[name="playersNum"]').forEach(function (player) {
    if (player.checked == true) {
      numOfPlayers = player.value;
    }
  });
}

function getCheckedPlayerRadio() {
  $$('input[name="playersNum"').forEach(function (radio) {
    radio.addEventListener('click', function () {
      numOfPlayers = 0;
      $$('input[name = "playersName"]').forEach(function (element) {
        if (radio.value >= parseInt(element.value.substr(6))) {
          element.classList.add('visible');
        } else if (element.classList.contains('visible')) {
          element.classList.remove('visible');
        }
      });
      showNextBtn();
    });
  });
}

function getGameMode() {
  $$('input[name="gm"]').forEach(function (diff) {
    if (diff.checked == true) {
      gameType = diff.value;
    }
  });
}

function getCheckedGameMode() {
  $$('input[name="gm"]').forEach(function (gm) {
    gm.addEventListener('click', function () {
      showNextBtn();
    });
  });
}

function getGameDifficulty() {
  $$('input[name="gd"]').forEach(function (diff) {
    if (diff.checked == true) {
      difficulty = parseInt(diff.value);
    }
  });
}

function getCheckedGameDifficulty() {
  $$('input[name="gd"]').forEach(function (gd) {
    gd.addEventListener('click', function () {
      showNextBtn();
    });
  });
}

function setIsSetBtnValue() {
  $('#is-set').addEventListener('click', function () {
    isSetBtn = $('#is-set').checked;
  });
}

function setShowSetBtnValue() {
  $('#show-set').addEventListener('click', function () {
    showSetBtn = $('#show-set').checked;
  });
}

function setManualSetBtn() {
  $('#manual-three').addEventListener('click', function () {
    manualSetBtn = $('#manual-three').checked;
  });
}

function showNextBtn() {
  getGameMode();
  getNumOfPlayers();
  getGameDifficulty();

  if (numOfPlayers != 0 && gameType == 1 && difficulty != 0) {
    if ($(".start").classList.contains("visible")) {
      $(".start").classList.remove("visible");
    }

    $(".next").classList.add("visible");
  } else if (numOfPlayers != 0 && gameType == 2 && difficulty != 0) {
    if ($(".next").classList.contains("visible")) {
      $(".next").classList.remove("visible");
    }

    $(".start").classList.add("visible");
  }
}

function handleNextBtn() {
  $(".play-menu").classList.remove("visible");
  $(".other-options").classList.add("visible");
  $(".start").classList.add("visible");
}

function handleStartBtn() {
  console.log(manualSetBtn);
  state.init(3, 4, difficulty);
  console.log(state.table);

  if (difficulty === 1) {
    gameArea.innerHTML = (0, _render.renderEasy)(state);
  } else {
    gameArea.innerHTML = (0, _render.renderHard)(state);
  }

  if ($(".play-menu").classList.contains("visible")) {
    $(".play-menu").classList.remove("visible");
  } else if ($(".other-options").classList.contains("visible")) {
    $(".other-options").classList.remove("visible");
  }

  $(".start").classList.remove("visible");
  $(".game-board").classList.add("visible");
  $(".game-table").classList.add("visible");

  if (isSetBtn === false) {
    $("#isCSetBtn").style.display = 'none';
  }

  if (showSetBtn === false) {
    $("#findSetBtn").style.display = 'none';
  }

  if (manualSetBtn === false) {
    $("#addThreeBtn").style.display = 'none';
  }
}

function handleMainMenuBtn() {
  $(".end-screen").classList.remove("visible");
  $(".main-menu").classList.add("visible");
}

function handleEasyTopListBtn() {
  $(".main-menu").classList.remove("visible");
  $(".top-list-easy").classList.add("visible");
}

function handleHardTopListBtn() {
  $(".main-menu").classList.remove("visible");
  $(".top-list-hard").classList.add("visible");
}

function handleMultiplayerTopListBtn() {
  $(".main-menu").classList.remove("visible");
  $(".top-list-multiplayer").classList.add("visible");
}

function handleBackEasyBtn() {
  $(".top-list-easy").classList.remove("visible");
  $(".main-menu").classList.add("visible");
}

function handleBackHardBtn() {
  $(".top-list-hard").classList.remove("visible");
  $(".main-menu").classList.add("visible");
}

function handleBackMultiplayerBtn() {
  $(".top-list-multiplayer").classList.remove("visible");
  $(".main-menu").classList.add("visible");
}

window.addEventListener('load', init, false);