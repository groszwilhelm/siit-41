let clicks = 0;

let divAdd1 = document.querySelector('.output-add-1');
let divAdd5 = document.querySelector('.output-add-5');

function addClicks(amount = 1){
    console.log(`Creating the function for adding ${amount} clicks`);
    return function(){
        clicks += amount;
        console.log(clicks);
    }
}

divAdd1.addEventListener('click', addClicks());

divAdd5.addEventListener('click', addClicks(5));