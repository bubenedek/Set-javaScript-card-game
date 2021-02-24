import { AppState } from "./state.js";
import { GameEvent } from "./gameEvent.js";
import { renderEasy } from "./render.js";
import { renderHard } from "./render.js";
import { Player } from "./player.js";

function $(id) {
    return document.querySelector(id);
}

function $$(id) {
    return document.querySelectorAll(id);
}

function delegate(parent, type, selector, handler) {
    parent.addEventListener(type, function (event) {
        const targetElement = event.target.closest(selector);

        if(this.contains(targetElement)){
            handler.call(targetElement, event);
    }
    });
}


const rulesBtn = $('#rulesBtn');
const rulesDiv = $('.rules');


const playBtn = $('#playBtn');
const nextBtn = $('#nextBtn');
const startBtn = $('#startBtn');
const isCSetBtn = $('#isCSetBtn');
const findSetBtn = $('#findSetBtn');
const addThreeBtn = $('#addThreeBtn');
const tlEasyBtn = $('#topListEasyBtn');
const tlHardBtn = $('#topListHardBtn');
const tlMultiplayerBtn = $('#topListMultiplayerBtn');
const mainMenuEasyBtn = $('#backEasyBtn');
const mainMenuHardBtn = $('#backHardBtn');
const mainMenuMultiplayerBtn = $('#backMultiplayerBtn');



let numOfPlayers = 0;
let gameType = 0; // 1 = Training, 2 = Competitive
let players = [];
let difficulty = 0; // 1 = easy(3 attr), 2 = hard(4attr)
let isSetBtn = false;
let showSetBtn = false;
let manualSetBtn = false;
const state = new AppState();
const gameArea = $('.game-board');
const gameEvent = new GameEvent();
const player = new Player();
const toMainMenuBtn = $('.toMainMenuBtn');


function init() {
    rulesBtn.addEventListener('click',handleRulesBtn);
    rulesDiv.addEventListener('click',removeRules);
    playBtn.addEventListener('click',handlePlayBtn);
    getCheckedPlayerRadio();
    getCheckedGameMode();
    getCheckedGameDifficulty();
    setIsSetBtnValue();
    setShowSetBtnValue();
    setManualSetBtn();
    nextBtn.addEventListener('click',handleNextBtn);
    startBtn.addEventListener('click',handleStartBtn);
    delegate(gameArea,'click','.card',function(e){gameEvent.handleCardClick(e,gameEvent.selectedCards,state,difficulty,player)});
    isCSetBtn.addEventListener('click',function(e){gameEvent.handleIsCSetBtn(e,difficulty,state)});
    findSetBtn.addEventListener('click',function(e){gameEvent.handleFindSetBtn(e,difficulty,state)});
    addThreeBtn.addEventListener('click',function(e){gameEvent.handleAddThreeBtn(e,difficulty,state)});
    toMainMenuBtn.addEventListener('click',handleMainMenuBtn);
    tlEasyBtn.addEventListener('click',handleEasyTopListBtn);
    tlHardBtn.addEventListener('click',handleHardTopListBtn);
    tlMultiplayerBtn.addEventListener('click',handleMultiplayerTopListBtn);
    mainMenuEasyBtn.addEventListener('click',handleBackEasyBtn);
    mainMenuHardBtn.addEventListener('click',handleBackHardBtn);
    mainMenuMultiplayerBtn.addEventListener('click',handleBackMultiplayerBtn);
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

function getNumOfPlayers(){
    $$('input[name="playersNum"]').forEach(player => {
        if(player.checked == true){
            numOfPlayers = player.value;
        }
    });
}

function getCheckedPlayerRadio() {
    $$('input[name="playersNum"').forEach((radio) => {
        radio.addEventListener('click',() => {
            numOfPlayers = 0;
            $$('input[name = "playersName"]').forEach(element => {
                if (radio.value >= parseInt(element.value.substr(6))) {
                    element.classList.add('visible');
                }else if(element.classList.contains('visible')){
                    element.classList.remove('visible');
                }
            });
            showNextBtn();
        });
    });
}

function getGameMode() {
    $$('input[name="gm"]').forEach(diff => {
        if(diff.checked == true){
            gameType = diff.value;
        }
    });
}

function getCheckedGameMode() {
    $$('input[name="gm"]').forEach((gm) => {
        gm.addEventListener('click',() =>{
                showNextBtn();
            });
        });
    }

function getGameDifficulty() {
    $$('input[name="gd"]').forEach(diff => {
        if(diff.checked == true){
            difficulty = parseInt(diff.value);
        }
    });
}

function getCheckedGameDifficulty() {
    $$('input[name="gd"]').forEach((gd) => {
        gd.addEventListener('click',() =>{
                showNextBtn();
            });
        });
    }

function setIsSetBtnValue(){
    $('#is-set').addEventListener('click',() =>{
        isSetBtn = $('#is-set').checked;
    })
}

function setShowSetBtnValue(){
    $('#show-set').addEventListener('click',() =>{
        showSetBtn = $('#show-set').checked;
    })
}

function setManualSetBtn(){
    $('#manual-three').addEventListener('click',() =>{
        manualSetBtn = $('#manual-three').checked;
    })
}

function showNextBtn(){
    getGameMode();
    getNumOfPlayers();
    getGameDifficulty();
    if(numOfPlayers != 0 && gameType == 1 && difficulty != 0){
        if ($(".start").classList.contains("visible")) {
                $(".start").classList.remove("visible");
        }
        $(".next").classList.add("visible");
    }else if(numOfPlayers != 0 && gameType == 2 && difficulty != 0){
        if($(".next").classList.contains("visible")){
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
    state.init(3,4,difficulty);
    console.log(state.table);
    if (difficulty === 1) {
        gameArea.innerHTML = renderEasy(state);
    }else{
        gameArea.innerHTML = renderHard(state);
    }
    if($(".play-menu").classList.contains("visible")){
        $(".play-menu").classList.remove("visible");
    } else if($(".other-options").classList.contains("visible")){
        $(".other-options").classList.remove("visible");
    }
    $(".start").classList.remove("visible");
    $(".game-board").classList.add("visible");
    $(".game-table").classList.add("visible");
    if(isSetBtn === false){
        $("#isCSetBtn").style.display = 'none';
    }
    if(showSetBtn === false){
        $("#findSetBtn").style.display = 'none';
    }
    if(manualSetBtn === false){
        $("#addThreeBtn").style.display = 'none';
    }
}


function handleMainMenuBtn() {
    $(".end-screen").classList.remove("visible");
    $(".main-menu").classList.add("visible");
}


function handleEasyTopListBtn(){
    $(".main-menu").classList.remove("visible");
    $(".top-list-easy").classList.add("visible");
}

function handleHardTopListBtn(){
    $(".main-menu").classList.remove("visible");
    $(".top-list-hard").classList.add("visible");
}

function handleMultiplayerTopListBtn(){
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