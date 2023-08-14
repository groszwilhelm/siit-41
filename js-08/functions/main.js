
let n = 'Ludovic';

function greet(){
    n = 'Adi';

    console.log(`local scope function greet ${n} before sayHi was called`);

    function sayHi(){
        n = 'Vader';
        console.log(`local scope function sayHi ${n}`);
    }

    sayHi();

    console.log(`local scope function greet ${n} after sayHi was called`);
}


greet();

console.log(`global scope ${n}`);
