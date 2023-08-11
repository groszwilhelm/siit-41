console.log('recap.js loaded...');

// let output = document.querySelector('#output');
// output.innerText = 0;
// output.classList.add('zero-clicks');


let container = document.querySelector('.container');
// container.innerText = 'some text added by JS';

// 1
// container.innerHTML += '<a href="#">and an anchor</a>';

// 2
// container.innerHTML += '<a href="#">';
// container.innerHTML += 'and an anchor</a>';


const textNode = document.createTextNode('Some text. ');
container.appendChild(textNode);

const anchor = document.createElement('a');
anchor.setAttribute('href', 'https://google.com');
container.appendChild(anchor);


// const anchorText = document.createTextNode('go to Google!');
// anchor.appendChild(anchorText);
anchor.innerText = 'go to Google!';

// container.innerHTML = container.innerHTML + '<a href="#">and an anchor</a>';



const test = container.querySelector('a');