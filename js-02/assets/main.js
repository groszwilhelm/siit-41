console.log('main.js is loaded...');


let nr1 = prompt('Input the first number');
nr1 = Number(nr1);

let nr2 = prompt('Input the second number');
nr2 = Number(nr2);

if (nr1 <= nr2) {
    alert('Ascending order');
} else {
    alert('Descending order');
}
