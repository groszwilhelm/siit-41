console.log('fetch, here we go!');

const displayDiv = document.querySelector('#display');
const fetchBtn = document.querySelector('#new-quote');

const url = `https://api.chucknorris.io/jokes/random`;
// const url = `https://dog.ceo/api/breeds/image/random`;


fetchBtn.addEventListener('click', function () {
    displayDiv.textContent = 'Loading quote...';
    fetchBtn.disabled = true;

    console.log('Initiating request...');
    // ASYNCROUNOUS CODE!
    fetch(url)                                                  // do the request
        .then((response) => {
            console.log('The response has been received!!!!');
            return response.json()                              // parse the response body as JSON
        })                    
        .then((jsonResponse) => {
            console.log('The response has been parsed');
            console.log(jsonResponse)                           // Hadle the response

            // const img = document.createElement('img');
            // img.src = jsonResponse.message;
            // document.body.append(img);

            displayDiv.textContent = jsonResponse.value;
            fetchBtn.disabled = false;
        });

    console.log('Request has been sent. Waiting...');
});







