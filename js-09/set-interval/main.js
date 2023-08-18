console.log('set interval main.js loaded...');

let remainingSeconds = 5;
let clickCounter = 0;

const callback = function(){
    console.log(`Remaining: ${--remainingSeconds}`);
    // if(remainingSeconds == 0){
    if(!remainingSeconds){
        clearInterval(intervalId);
    }
}
const intervalId = setInterval(callback, 1000);


const btn = document.querySelector('button');
btn.addEventListener('click', function() {
    if(remainingSeconds){
        console.log(`Clicks: ${++clickCounter}`);
    }
});
