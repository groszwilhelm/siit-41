console.log('closures main.js is loaded...');

/*
const personName = 'Adi';

const greet = function(){
    console.log(`Hi, I am ${personName}`);
}
// greet('Adi');

const germanGreet = function(){
    console.log(`Guten tag, Ich bin ${personName}`);
}


function personPresentation(callbackFnc){
    callbackFnc();
    console.log('Glad to meet you');
}


// personPresentation(greet);
// personPresentation(germanGreet);
personPresentation(function() {
    console.log(`Salutare, sunt ${personName}`);
});
*/


const greet = function(personName){
    return function(){
        console.log(`Hi, I am ${personName}`);
    }
}

function personPresentation(callbackFnc){
    callbackFnc();
    console.log('Glad to meet you');
}

personPresentation(greet('Adi'));
personPresentation(greet('Bob'));