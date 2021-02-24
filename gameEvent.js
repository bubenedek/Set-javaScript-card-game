import { isSetEasy } from "./set.js";
import { isSetHard } from "./set.js";
import { isContainsSetEasy } from "./set.js";
import { isContainsSetHard } from "./set.js";
import { findSetEasy } from "./set.js";
import { findSetHard } from "./set.js";
import { renderEasy } from "./render.js";
import { renderHard } from "./render.js";

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

export class GameEvent {

    selectedCards = [];

    handleCardClick(e,selectedCards,state,difficulty,player){
        let isGameOver = false;
        if(!e.target.classList.contains("card-img")){
            return;
        }
        let cardNum;
        let cardPattern;
        let cardColor;
        let cardShape;
        let cardRow;
        let card;

        let table = state.table;
        if(difficulty === 1){
            cardNum = e.target.classList[1][0];
            cardColor = e.target.classList[1][1];
            cardShape = e.target.classList[1][2];
            cardRow = table.find(element => element.find(myCard => 
                parseInt(myCard.number) === parseInt(cardNum) 
                && myCard.color.toString() === cardColor.toString() 
                && myCard.shape.toString() === cardShape.toString())
                );
            card = cardRow.find(actCard => 
                parseInt(actCard.number) === parseInt(cardNum) 
                && actCard.color.toString() === cardColor.toString() 
                && actCard.shape.toString() === cardShape.toString()
                );
        }else{
            cardNum = e.target.classList[1][0];
            cardPattern = e.target.classList[1][1];
            cardColor = e.target.classList[1][2];
            cardShape = e.target.classList[1][3];
            cardRow = table.find(element => element.find(myCard => 
                parseInt(myCard.number) === parseInt(cardNum)
                && myCard.pattern.toString() === cardPattern.toString()
                && myCard.color.toString() === cardColor.toString() 
                && myCard.shape.toString() === cardShape.toString())
                );
            card = cardRow.find(actCard => 
                parseInt(actCard.number) === parseInt(cardNum) 
                && actCard.pattern.toString() === cardPattern.toString() 
                && actCard.color.toString() === cardColor.toString() 
                && actCard.shape.toString() === cardShape.toString()
                );
        }
        let cardDiv = e.target.parentNode;
        
        if(selectedCards.length < 3){
            if(!cardDiv.classList.contains("selected")){
                card.state = 2;
                cardDiv.classList.add("selected");
                selectedCards.push(card);
            }else{
                card.state = 1;
                const index = selectedCards.indexOf(card);
                cardDiv.classList.remove("selected");
                selectedCards.splice(index,1);
            }
            if(selectedCards.length === 3){
                if(difficulty === 1){                    
                    if(isSetEasy(selectedCards)){
                        player.incScore();
                        selectedCards.forEach(sCard => {
                            sCard.state = 3;
                        });
                            if(state.deck.deckEasy.length != 0){
                                if(state.table.length === 4){
                                state.updateEasy(3,4);
                                }
                            }else{
                                if(state.table.length === 4){
                                    state.remove(3,4);
                                }else{
                                    state.remove(3,state.table.length);
                                }
                            }
                            $('.game-board').innerHTML = renderEasy(state);
                            const index = selectedCards.indexOf(card);
                            console.log("You found a SET.");
                    }else{
                            player.decScore();
                            selectedCards.forEach(sCard => {
                                sCard.state = 1;
                                $('.game-board').innerHTML = renderEasy(state);
                                const index = selectedCards.indexOf(card);
                            });
                                console.log("This is not a SET. Try again");
                    }
                                $('.score-value').innerHTML = player.score;
                }else{
                    if(isSetHard(selectedCards)){
                        player.incScore();
                        selectedCards.forEach(sCard => {
                            sCard.state = 3;
                        });
                        if(state.deck.deckHard.length != 0){
                            if(state.table.length === 4){
                            state.updateHard(3,4);
                            }
                        }else{
                            if(state.table.length === 4){
                                    state.remove(3,4);
                                }else{
                                    state.remove(3,state.table.length);
                                    console.log(state.table);
                                }
                            }
                        $('.game-board').innerHTML = renderHard(state);
                        const index = selectedCards.indexOf(card);
                        console.log("You found a SET.");
                    }else{
                            player.decScore();
                            selectedCards.forEach(sCard => {
                                sCard.state = 1;
                                $('.game-board').innerHTML = renderHard(state);
                                const index = selectedCards.indexOf(card);
                            });
                                console.log("This is not a SET. Try again");
                    }
                    $('.score-value').innerHTML = player.score;
                }
                selectedCards.splice(0,3);
                
                
            }
        }else{
            e.preventDefault();
        }
        if(difficulty === 1){
            if(!isContainsSetEasy(state.table)){
                if(state.deck.deckEasy.length === 0){
                    $(".game-board").classList.remove("visible");
                    $(".game-table").classList.remove("visible");
                    $(".end-screen").classList.add("visible");
                    $(".final-score").innerHTML = player.getScore();
                }else{
                    if(state.deck.deckEasy.length != 0){
                        state.addPlusRowEasy();
                        $('.game-board').innerHTML = renderEasy(state);
                    }
                }
            }
        }else{
            if(!isContainsSetHard(state.table)){
                if(state.deck.deckHard.length === 0){
                    $(".game-board").classList.remove("visible");
                    $(".game-table").classList.remove("visible");
                    $(".end-screen").classList.add("visible");
                    $(".final-score").innerHTML = player.getScore();

                }else{
                    if(state.deck.deckHard.length != 0){
                        state.addPlusRowHard();
                        $('.game-board').innerHTML = renderHard(state);
                    }
                }
            }
        }

    }

    handleIsCSetBtn(e,difficulty,state){
        if (difficulty === 1) {
            if(isContainsSetEasy(state.table)){
                $('.contains-set-txt').innerHTML = "<p>You can find a SET</p>";
            }else{
                $('.contains-set-txt').innerHTML = "<p>No more SET</p>";
            }
        }else{
            if(isContainsSetHard(state.table)){
                $('.contains-set-txt').innerHTML = "<p>You can find a SET</p>";
            }else{
                $('.contains-set-txt').innerHTML = "<p>No more SET</p>";
            }
        }
    }

    handleFindSetBtn(e,difficulty,state){
        if (difficulty === 1) {
            let cards = findSetEasy(state.table);
            cards.forEach(card => {
                if(card.state != 3){                    
                    let cardName = (card.number + card.color + card.shape).toString();
                    ($$('.card-img')).forEach(element => {
                        if(element.classList.contains(cardName)){
                            element.parentNode.classList.add("help-select");
                        }
                    });
                }
            });
        }else{
            let cards = findSetHard(state.table);
            cards.forEach(card => {
                if(card.state != 3){                    
                    let cardName = (card.number + card.pattern + card.color + card.shape).toString();
                    ($$('.card-img')).forEach(element => {
                        if(element.classList.contains(cardName)){
                            element.parentNode.classList.add("help-select");
                        }
                    });
                }
            });
        }
    }

    handleAddThreeBtn(e,difficulty,state){
        if(difficulty === 1){
            if(state.deck.deckEasy.length != 0){
                state.addPlusRowEasy();
                $('.game-board').innerHTML = renderEasy(state);
            }
        }else{
            if(state.deck.deckHard.length != 0){
                state.addPlusRowHard();
                $('.game-board').innerHTML = renderHard(state);
            }
        }
    }
}