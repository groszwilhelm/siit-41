"use strict";

console.log('recap.js is loaded...');


function greeting(greetingType, name = 'Howdy') {
    console.log(`${greetingType} ${name}!`);
}


function rollDice(diceSides = 6) {
    return Math.floor(Math.random() * diceSides) + 1;
}


let greet = function () {
    console.log('This works in JS!');
}


// function greet() {
//     console.log('This works in JS!');
// }


let displayCounter = function () {
    if(counter > 0){
        counter--;
        console.log(counter);
    }
    else{
        clearInterval(timerInterval);
        console.log('FINISH!');
    }
}

let counter = 5;
let timerInterval = setInterval(displayCounter, 1000);