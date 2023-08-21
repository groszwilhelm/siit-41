console.log('recap.js is loaded...');

const player = function(name){
    let score = 0;

    const rollDice = function(){
        let diceRoll = Math.floor(Math.random() * 6 + 1);
        score += diceRoll;
        console.log(`New dice roll for ${name} : ${diceRoll}, CURRENT SCORE: ${score}`);
    }

    const getScore = function(){
        return score;
    }

    const getName = function(){
        return name;
    }

    return{
        rollDice,
        getScore,
        getName
    }
}

//  GAME SETTINGS
const gameRounds = 10;

const players = [
    player('Agamemnon'),
    player('Achilles'),
    player('Ajax'),
    player('Jason'),
];

// GAME ROUNDS
for (let i = 1; i <= gameRounds; i++) {
    console.log('');
    console.log(`ROUND ${i} STARTS`);

    players.forEach(p => p.rollDice());
}

// RESULTS
console.log(``);
console.log(` ==🏆 THE FINAL RESULTS 🏆==`);
players.sort((p1, p2) => p2.getScore() - p1.getScore());
players.forEach((p, i) => console.log(`${ i + 1}. ${p.getName()}, ${p.getScore()} points`));