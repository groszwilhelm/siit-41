console.log('main.js is loaded...');



class Game {

    static maxPoints = 100;
    static players = [];

    static addPlayer(player){
        this.players.push(player);
    }

    static rollDice(){
        return Math.floor(Math.random() * 6) + 1;
    }

    getMaxPoints(){
        return this.maxPoints;
    }
}

Game.addPlayer({ name: 'Costel' });
Game.addPlayer({ name: 'Maria' });
Game.addPlayer({ name: 'Marcel' });

console.log(Game.maxPoints);
console.log(Game.players);
