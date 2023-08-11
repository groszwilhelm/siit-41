console.log('main.js is loaded!');

/**
 * 
 */
function incrementClicks(evt){
    console.log(evt.srcElement);
    evt.srcElement.setAttribute('disabled', true);
}

const clickBtn1 = document.querySelector('#button-add-1');
clickBtn1.addEventListener('click', incrementClicks);

const clickBtn5 = document.querySelector('#button-add-5');
clickBtn5.addEventListener('click', incrementClicks);

