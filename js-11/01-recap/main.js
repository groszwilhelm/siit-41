console.log(`Recap main.js is loaded`);


const url = "https://dog.ceo/api/breeds/list/all";

/**
 * REQUEST using .then
 */
// fetch(url)
//     .then(response => {
//         console.log(`The request has been received`);
//         console.log(response);
//         return response.json();
//     })
//     .then(data => {
//         console.log(`The request body has been parsed`);
//         console.log(data);
//     });

/**
 * REQUEST using async await
 */
async function getBreeds() {
    // submit the request
    console.log(`Submit the request`);
    const response = await fetch(url);

    // the request is received...
    console.log(`The request has been received`);
    console.log(response);

    // parse the response body
    const breeds = await response.json();

    // can actually access the JSON data
    console.log(`The request body has been parsed`);
    console.log(breeds);

    // iteration through an object properties 
    for (const breedType in breeds.message) {
        console.log('');
        console.log(breedType);

        // !!! you can't directly access the property breedType !!!
        // console.log(breeds.message.breedType); 

        // check the array like access of the object property!
        console.log(breeds.message[breedType]);
    }

    breeds.message.forEach(breed => console.log(breed));

    console.log(breeds.message.hound);
    console.log(breeds.message[`hound`]);

}

// async function call
getBreeds();