

// Egy lapna 4 attributuma lehet:
//  - Szám (1,2,3)
//  - Tartalom (H,O,S)
//  - Szín (g,p,r)
//  - Forma (D,P,S)


export class Deck {

  state = [1,2,4];
  numbers = [1,2,3];
  patterns = ['H','O','S'];
  colors = ['g','p','r'];
  shapes = ['D','P','S'];
  deckEasy = [];
  deckHard = [];

  createDeckHard() {
    for(let n = 0; n < this.numbers.length; ++n){
      for(let p = 0; p < this.patterns.length; ++p){
        for(let c = 0; c < this.colors.length; ++c){
          for(let s = 0; s < this.shapes.length; ++s){
            this.deckHard.push(this.numbers[n] + this.patterns[p] + this.colors[c] + this.shapes[s]);
          }
        }
      }
    }
  }

  createDeckEasy() {
      for(let n = 0; n < this.numbers.length; ++n){
        for(let c = 0; c < this.colors.length; ++c){
            for(let s = 0; s < this.shapes.length; ++s){
              this.deckEasy.push(this.numbers[n] + this.colors[c] + this.shapes[s]);
            }
        }
    }
  }

  //SOURCE: https://javascript.info/task/shuffle
  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      // swap elements array[i] and array[j]
      // we use "destructuring assignment" syntax to achieve that
      // you'll find more details about that syntax in later chapters
      // same can be written as:
      // let t = array[i]; array[i] = array[j]; array[j] = t
      [array[i], array[j]] = [array[j], array[i]];
    }
  }


  makeDeckEasy(){
    this.createDeckEasy();
    this.shuffle(this.deckEasy);
  }

  makeDeckHard(){
    this.createDeckHard();
    this.shuffle(this.deckHard);
  }

  drawEasy(deck){
    let svgCard = deck.shift();
    let state = this.state[0];
    let num = svgCard[0];
    let color = svgCard[1];
    let shape = svgCard[2];
    return {state,num,shape,color};
  }

  drawHard(deck){
    let svgCard = deck.shift();
    let state = this.state[0];
    let num = svgCard[0];
    let pattern = svgCard[1];
    let color = svgCard[2];
    let shape = svgCard[3];
    return {state,num,pattern,shape,color};
  }
  
  
  getDeckHard(){
    return this.deckHard;
  }

  getDeckEasy(){
    return this.deckEasy;
  }
}