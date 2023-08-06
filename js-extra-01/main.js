console.log('main.js loaded...');

function getRandomNumber(maxNumber){
    return  Math.floor(Math.random() * maxNumber);
}


function getRandomElement(arr) {
    let randomIndex = getRandomNumber(arr.length);
    return arr[randomIndex];
}


function shuffleElements(arr, numberOfInterchanges = 10) {
    for (let i = 0; i < numberOfInterchanges; i++) {
        let firstRandomIndex = getRandomNumber(arr.length);
        let secondRandomIndex = getRandomNumber(arr.length);

        let aux = arr[firstRandomIndex];
        arr[firstRandomIndex] = arr[secondRandomIndex];
        arr[secondRandomIndex] = aux;
    }

    return arr;
}