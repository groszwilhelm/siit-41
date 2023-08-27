/**
 * EXAMPLE OF A POST REQUEST
 */
const url = "http://quiz-api.siit.ro/api/register";

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

let body = {
    "email": "siit.frontend.41@siit.ro",
    "name": "Grupa 41 frontend",
    "password": "41-rules",
    "password_confirm": "41-rules"
}

fetch(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify(body),
})
    .then(response => response.json())
    .then(data => console.log(data));