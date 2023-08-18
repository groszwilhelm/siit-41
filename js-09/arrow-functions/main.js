console.log('arrow functions main.js loaded...');

// function displayMsg() {
//     console.log('A message');
// }

// const displayMsg = function () {
//     console.log('A message');
// }

const displayMsg = () => console.log('A message');


// function opposite(value) {
//     return -value;
// }

const opposite = value => -value;

// function add(v1, v2) {
//     const sum = v1 + v2;
//     return sum;
// }

const add = (v1, v2) => {
    const sum = v1 + v2;
    return sum;
}


// function adder(v1, v2) {
//     return v1 + v2;
// }

const adder = (v1, v2) => v1 + v2;



const students = ['Crina', 'Daniel', 'Corina', 'Bogdan'];
students.forEach(elem => console.log(elem));

