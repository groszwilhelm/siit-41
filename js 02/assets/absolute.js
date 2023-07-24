console.log('displaying the absolute value of a number');


let userNr = prompt('Input a value');
userNr = Number(userNr);

// let abs = userNr;
// if (abs < 0) {
//     abs = -abs;
// }

// alert('The absolute value of ' + userNr + ' is: ' + abs);


if (userNr < 0) {
    userNr = -userNr;
}

alert('The absolute value is: ' + userNr);