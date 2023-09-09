console.log('OOP - inheritage');


class Turtle {
    constructor(name){
        this.name = name;
        this.distance = 0;
    }

    move(tiles){
        this.distance += tiles;
        console.log(`${this.name} moves ${tiles} tiles and its current distance is ${this.distance}`);
    }
}


class LuckyTurtle extends Turtle{
    constructor(name, luckyNumber){
        super(name);    // call the constructor of the parent class

        // setting the Lucky turtle properties
        this.luckyNumber = luckyNumber;
    }

    move(tiles){
        super.move(tiles);  // call of the parent move method...

        //
        if(tiles === this.luckyNumber){
            const bonusDistance = 4;
            this.distance += bonusDistance;
            console.log(`Because ${this.name} got his lucky number, he moves ${bonusDistance} more tiles and its current distance is now ${this.distance}`);
        }
        
    }
}


class TurtleRaceGame{

    static players = [];
    static maxGameRounds = 5;
    static currentRound = 0;

    static addPlayer(newPlayer){
        this.players.push(newPlayer);
    }

    static newRound(){
        TurtleRaceGame.currentRound++;
        console.log('');
        console.log(`🚩 ROUND ${TurtleRaceGame.currentRound} STARTS`);

        TurtleRaceGame.players.forEach(player => {
            const randomDistance = Math.floor(Math.random() * 6 + 1);
            player.move(randomDistance);
        });
    }

    
    // static playGame(){
        
    // }

}

const t1 = new LuckyTurtle('Flash', 4);
TurtleRaceGame.addPlayer(t1);

const t2= new Turtle('Snappy');
TurtleRaceGame.addPlayer(t2);

TurtleRaceGame.newRound();
TurtleRaceGame.newRound();

