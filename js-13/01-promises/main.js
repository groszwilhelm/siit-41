
// fetch from api1 - "fake emag"
const emagPromise = fetch('http://172.24.0.1:8080/00-fake-api/emag/product-01.json')
    .then(response => response.json())
    .then(data => new Promise((resolve, reject) => reject({error: 'Something bad happened'})));

// fetch from api2 - "fake olx"
const olxPromise = fetch('http://172.24.0.1:8080/00-fake-api/olx/product-01.json')
    .then(response => response.json())
    .then(data => new Promise((resolve, reject) => resolve(data)));

// fetch from api3 - "fake pc-garage"
const pcGaragePromise = fetch('http://172.24.0.1:8080/00-fake-api/pc-garage/product-01.json')
    .then(response => response.json())
    .then(data => new Promise((resolve, reject) => resolve(data)));

// check min price
console.log('Can I check the prices? NO!!!');

// ASYNC code!!
Promise.all([emagPromise, olxPromise, pcGaragePromise])
    .then((promisesValues) => {
        // sort ascending
        promisesValues.forEach(prod => console.log(prod));

        // sort 
        promisesValues.sort((prodA, prodB) => {
            let prodAPriceProperty = getResponsePriceProperty(prodA);
            let prodBPriceProperty = getResponsePriceProperty(prodB);
            return prodA[prodAPriceProperty] - prodB[prodBPriceProperty];
        });

        console.log(promisesValues);
    })
    .catch(err =>{
        console.log(err);
    });


function getResponsePriceProperty(productJSON) {
    let propName;
    switch (productJSON.source) {
        case 'emag':
            propName = 'price';
            break;
        case 'olx':
            propName = 'productPrice';
            break;
        case 'pc garage':
            propName = 'product_price';
            break;
        default:
            console.error('Source unknown!!!')
    }

    return propName
}

Promise.allSettled([emagPromise, olxPromise, pcGaragePromise])
    .then((promisesValues) => {
        // sort ascending
        promisesValues.forEach(prod => console.log(prod));
    })



