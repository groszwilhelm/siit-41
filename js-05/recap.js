let inputNr = prompt('Please insert a number');
inputNr = Number(inputNr);

let output = '';
for (let i = 1; i <= inputNr; i++) {
    if (output) {
        output = output + ' ';
    }
    
    output = output + i;
}

console.log('>>' + output + '<<');