import { Card } from "./card.js";
import { CardPlus } from "./card.js";
import { Deck } from "./deck.js";



export class AppState{
    table = [];
    deck = new Deck();
    hand = [];
    

    init(width, height,difficulty) {
        
        this.table = [];
        if(difficulty === 1){
            this.deck.makeDeckEasy();
            for (let y = 0; y < height; y++) {
                this.table[y] = [];
                for(let x = 0; x < width; x++){
                    let svgCard = this.deck.drawEasy(this.deck.deckEasy);
                    let currCard = new Card();
                    currCard.state = svgCard.state;
                    currCard.number = svgCard.num;
                    currCard.color = svgCard.color;
                    currCard.shape = svgCard.shape;
                    this.table[y][x] = currCard;
                }
            }
        }else{
            this.deck.makeDeckHard();
            for (let y = 0; y < height; y++) {
                this.table[y] = [];
                for(let x = 0; x < width; x++){
                    let svgCard = this.deck.drawHard(this.deck.deckHard);
                    let currCard = new CardPlus();
                    currCard.state = svgCard.state;
                    currCard.number = svgCard.num;
                    currCard.pattern = svgCard.pattern;
                    currCard.color = svgCard.color;
                    currCard.shape = svgCard.shape;
                    this.table[y][x] = currCard;
                }
            }
        }
    }

/*         init(width,height){
            this.deck.makeDeckEasy();
            this.deck.makeDeckHard();
            this.hand = [];
            let kIndex = 0;

            for (let i = 0; i < width.length; i++) {
                for (let j = 0; j < height.length; j++) {
                    let svgCard = this.deck.drawEasy(this.deck.deckEasy);
                    let currCard = new Card();
                    currCard.state = svgCard.state;
                    currCard.number = svgCard.num;
                    currCard.color = svgCard.color;
                    currCard.shape = svgCard.shape;
                    hand[kIndex] = currCard;
                    kIndex++;
                }
                
            }

        } */

    updateEasy(width,height){
        for (let y = 0; y < height; y++) {
            for(let x = 0; x < width; x++){
                if(this.table[y][x].state === 3){
                    let svgCard = this.deck.drawEasy(this.deck.deckEasy);
                    let currCard = new Card();
                    currCard.state = svgCard.state;
                    currCard.number = svgCard.num;
                    currCard.color = svgCard.color;
                    currCard.shape = svgCard.shape;
                    this.table[y][x] = currCard;
                }
            }
        }
    }

    updateHard(width,height){
        for (let y = 0; y < height; y++) {
            for(let x = 0; x < width; x++){
                if(this.table[y][x].state === 3){
                    let svgCard = this.deck.drawHard(this.deck.deckHard);
                    let currCard = new CardPlus();
                    currCard.state = svgCard.state;
                    currCard.number = svgCard.num;
                    currCard.pattern = svgCard.pattern;
                    currCard.color = svgCard.color;
                    currCard.shape = svgCard.shape;
                    this.table[y][x] = currCard;
                }
            }
        }
    }

    addPlusRowEasy(){
        let index = this.table.length;
        this.table[index] = [];
        for (let i = 0; i < 3; i++) {
            let svgCard = this.deck.drawEasy(this.deck.deckEasy);
            let currCard = new Card();
            currCard.state = svgCard.state;
            currCard.number = svgCard.num;
            currCard.color = svgCard.color;
            currCard.shape = svgCard.shape;
            this.table[index][i] = currCard;
        }
    }
    addPlusRowHard(){
        let index = this.table.length;
        this.table[index] = [];
        for (let i = 0; i < 3; i++) {
            let svgCard = this.deck.drawHard(this.deck.deckHard);
            let currCard = new CardPlus();
            currCard.state = svgCard.state;
            currCard.number = svgCard.num;
            currCard.pattern = svgCard.pattern;
            currCard.color = svgCard.color;
            currCard.shape = svgCard.shape;
            this.table[index][i] = currCard;
        }
    }

    remove(width,height){
        for (let y = 0; y < height; y++) {
            for(let x = 0; x < width; x++){
                if(this.table[y][x].state === 3){
                    this.table[y][x] = '';
                }
            }
        }
    }
    
}