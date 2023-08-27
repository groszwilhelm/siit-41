const apiBaseUrl = `https://quiz-api.siit.ro/api`;

const registrationBtn = document.querySelector(`#registration-button`);
registrationBtn.addEventListener('click', registerUser);


async function registerUser() {
    clearRegistrationErrors();
    registrationBtn.disabled = true;

    const nameElem = document.querySelector(`#registration-name`);
    const emailElem = document.querySelector(`#registration-email`);
    const passwordElem = document.querySelector(`#registration-password`);
    const retypePasswordElem = document.querySelector(`#registration-retype-password`);

    const requestUrl = `${apiBaseUrl}/register`;

    const requestHeaders = {
        "Content-Type": "application/json",
        "Accept": "application/json",
    };

    const requestBody = {
        "name": nameElem.value,
        "email": emailElem.value,
        "password": passwordElem.value,
        "password_confirm": retypePasswordElem.value
    }

    const response = await fetch(requestUrl, {
        method: "POST",
        headers: requestHeaders,
        body: JSON.stringify(requestBody),
    });

    registrationBtn.disabled = false;

    const registrationResponse = await response.json();
    
    // error
    if (registrationResponse.errors) {
        displayRegistrationErrors(registrationResponse.errors);
        return;
    }

    // success
    console.log(registrationResponse);
}


function clearRegistrationErrors(){
    const errorElems = document.querySelectorAll(`#register-compoment .error`);
    errorElems.forEach(elem => elem.innerText = '');
}


function displayRegistrationErrors(responseErrors) {
    console.log(`we have errors!`);
    for (const error in responseErrors) {
        console.log('');
        console.log(error);
        console.log(responseErrors[error]);

        const errorElem = document.querySelector(`#${error}-error`);
        errorElem.textContent = responseErrors[error][0];
    }
}


