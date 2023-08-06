// debugger;

console.log('main.js is loaded...');

// function declaration
function readUserNumber(){
    let inputNr = prompt('Please insert a number');
    inputNr = Number(inputNr);

    return inputNr;
}

// function declaration
function generateResultString(inputNr) {
    // debugger;
    let output = '';
    for (let i = 1; i <= inputNr; i++) {
        if (output) {
            output = output + ' ';
        }

        output = output + i;
    }

    return output;
}

// function declaration
function displayResult(output) {
    // console.log('===================');
    // console.log('>>' + output + '<<');
    // console.log('===================');

    document.write(output);
}


// function call
let userNr = readUserNumber();
let displayString = generateResultString(userNr);
displayResult(displayString);

console.log('main.js has executed...');