export const CardState = {
    UNSELECTED: 1,
    SELECTED : 2,
    DEAD : 4
};

export const CardShape = {
    OVAL: 1,
    WAVY: 2,
    DIAMOND: 4
};

export const CardColor = {
    RED: 1,
    GREEN: 2,
    PURPLE: 4
};

export const CardNumber = {
    ONE: 1,
    TWO: 2,
    THREE: 4
};

export const CardPattern = {
    SOLID: 1,
    STRIPED: 2,
    BLANK: 4
}


export class Card {
    constructor(number,color,shape){
        this.state = CardState.UNSELECTED;
        this.number = number;
        this.color = color;
        this.shape = shape;
    }

    getNumber(){
        return this.number;
    }
    getColor(){
        return this.color;
    }
    getShape(){
        return this.shape;
    }
}

export class CardPlus extends Card{
    constructor(number,pattern,color,shape){
        super();
        this.state = CardState.UNSELECTED;
        this.number = number;
        this.pattern = pattern;
        this.color = color;
        this.shape = shape;
    }
    getPattern(){
        return this.pattern;
    }
    getNumber(){
        return this.number;
    }
    getColor(){
        return this.color;
    }
    getShape(){
        return this.shape;
    }
}