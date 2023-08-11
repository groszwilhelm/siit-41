console.log('main.js is loaded!');

/**
 * SETTINS
 */
const diceNumber = 2;


/**
 * IMPLEMENTATION
 */
function displayDice(parentElem) {
    let randomNr = Math.floor(Math.random() * 6) + 1;

    const imgElem = document.createElement('img');
    imgElem.setAttribute('src', `assets/imgs/dice-face-${randomNr}.svg`);
    parentElem.appendChild(imgElem);
}


function newRoll() {
    const displayElem = document.querySelector('.display');

    let childNodes = displayElem.childNodes;
    while(childNodes.length) {
        childNodes[0].remove();
    }

    for (let i = 0; i < diceNumber; i++) {
        displayDice(displayElem);
    }
}


const newRollBtn = document.querySelector('#new-roll-btn');
// first eventListener
newRollBtn.addEventListener('click', newRoll);

// second eventListener
newRollBtn.addEventListener('click', function () {
    console.log('Button was clicked!');
});