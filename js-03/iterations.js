
debugger;

// let askForValue = true;
// while (askForValue === true) {
//     userValue = prompt('Input a value');
//     if(userValue === null){
//         askForValue = false;
//     } else{
//         console.log('User has typed ' + userValue);
//     }
// }


for (let askForValue = true; askForValue === true; ) {
    userValue = prompt('Input a value');
    if(userValue === null){
        askForValue = false;
    } else{
        console.log('User has typed ' + userValue);
    }
}



// let userValue;
// do {
//     userValue = prompt('Input a value');
//     if(userValue !== null){
//         console.log('User has typed ' + userValue);
//     }
// } while (userValue !== null);

alert('Thank you!');