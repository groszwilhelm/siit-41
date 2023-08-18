console.log('main.js loaded...');

const userTextbox = document.querySelector('#user-input');
const submitBtn = document.querySelector('#user-btn');
const output = document.querySelector('output');

let userClicks = 0;


submitBtn.addEventListener('click', function(){
    // const userName = userTextbox.getAttribute('value');

    // set the number of the clicks
    userClicks = Number(userTextbox.value);

    // clear the textbox
    userTextbox.value = '';

    // display the number of clicks in the UI
    output.innerText = userClicks;
});


function newClick(evt){
    console.log(`New click is registered`);
    const targetElem = evt.target;
    userClicks += Number(targetElem.dataset.clicksChange);

    // display the number of clicks in the UI
    output.innerText = userClicks;
}

const changeBtns = document.querySelectorAll('button.change-clicks');
for (let i = 0; i < changeBtns.length; i++) {
    changeBtns[i].addEventListener('click', newClick);
}