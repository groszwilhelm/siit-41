let students = [
    {
        name: 'Adi',
    },
    {
        name: 'Cristi'
    },
    {
        name: 'Bogdan'
    },
    {
        name: 'Florin'
    }

];

let containerDiv = document.querySelector('.container');
console.log(containerDiv);

let mainHeader = document.querySelector('h1');
console.log(mainHeader);

let ol = document.querySelector('ol');
for (let i = 0; i < students.length; i++) {
    let newLi = document.createElement('li');
    newLi.innerText = `${students[i].name}`;
    newLi.setAttribute('class', 'student');
    newLi.style.color = 'red';

    ol.appendChild(newLi);
}