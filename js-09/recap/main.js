console.log('recap main.js loaded...');

let globalVar = 'this is global';
let testVar = 'global scope';

function testFnc() {
    console.log('Test function was called');
    let localVar = 'this is local';

    testVar = 'local scope';
    debugger;
 
    console.log('Local var: ' + localVar);
    console.log('Local var(testVar): ' + testVar);
}

testFnc();