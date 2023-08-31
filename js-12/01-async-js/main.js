let clickCounter = 0;

let output = document.querySelector('output');
let btn = document.querySelector('button');

btn.addEventListener('click', function(){
    output.textContent = ++clickCounter;
});


/**
 * PROCESSING DATA
 */

const processLength = 10000;
const batchLegth = 100;
let asyncCounter = 0
let batchCounter = 0;

let intervalId = setInterval(function(){
    console.log('');
    console.log(`=== BATCH NO. ${++batchCounter} has started ==`);
    console.log('');

    let i = 0;
    while(i < batchLegth && asyncCounter < processLength){
        console.log(asyncCounter);
        asyncCounter++;

        i++;
    }

    if(asyncCounter == processLength){
        clearInterval(intervalId);
    }
}, 100);

