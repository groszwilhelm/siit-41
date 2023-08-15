
let n = 'Ludovic';

function outerFunction(){
    let n = 'Adi';

    console.log(`local scope function outerFunction: ${n} (before innerFunction was called)`);

    function innerFunction(){
        let n = 'Vader';
        console.log(`local scope function innerFunction: ${n}`);
    }

    innerFunction();

    console.log(`local scope function outerFunction: ${n} (after innerFunction was called)`);
}

console.log(`global scope ${n} (before outer function was called)`);
outerFunction();
console.log(`global scope ${n} (after outer function was called)`);
