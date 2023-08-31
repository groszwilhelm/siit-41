console.log('main.js is loaded...');


function getAsyncRandomNumber(){
    return new Promise((resolve, reject) => {
        // the promise logic
        setTimeout(function(){
            const nr = Math.floor(Math.random() * 10) + 1;

            // adding a bit of randomness...
            if(Math.random() > 0.5){
                const succesObj = {
                    message: `You are lucky`,
                    number: nr
                }
                resolve(succesObj);
            }
            else{
                const errorObj = {
                    message: `Too bad...`,
                    number: undefined
                }
                reject(errorObj);
            }
        }, 2000);
    });
}


getAsyncRandomNumber()
    .then((successObj) => {
        // resolve
        console.log('The promise was a sucess..');
        // console.log(`The returned number was ${asyncNr}`);
        console.log(successObj);
    },
    (errorObj) => {
        // reject
        console.error('The promise was rejected...');
        console.log(errorObj);
    });