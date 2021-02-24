export class Player {
    constructor(score,isActive){
        this.score = 0;
        this.isActive = true;
    }

    incScore(){
        this.score += 1;
    }

    decScore(){
        if(this.score > 0){
            this.score -= 1;
        }
    }

    getScore(){
        return this.score;
    }


}