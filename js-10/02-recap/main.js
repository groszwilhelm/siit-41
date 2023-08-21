console.log('remove loaded...');

(function () {
    let counter = 0;

    const clickCounter = function () {
        console.log(`${++counter} clicks registered!`);
    }

    // creates the counter
    const btn1 = document.querySelector('#btn-1');
    btn1.addEventListener('click', clickCounter);

    // stops the counter
    const btn2 = document.querySelector('#btn-2');
    btn2.addEventListener('click', function () {
        btn1.removeEventListener('click', clickCounter);
    });
})();


// (function test(){
//     console.log(`Test function was called!`);
// })();