// debugger;

// input the students
let nr = prompt('Input how many elements does the array has?');
nr = Number(nr);

let arr = [];
for (let i = 0; i < nr; i++) {
    arr[i] = prompt('Input element on index ' + i);
}

// add the trainer...
arr.push('Adi');

console.log(arr);

// output the values of an array one by one
for (let i = 0; i < arr.length; i++) {
    alert(arr[i]);
}
