/**
 * EXAMPLE OF A POST REQUEST WITH AN AUTHENTICATION TOKEN
 */

// an auth token is received upon authentification
const token = `331|P9dYwVjqqBxxahAVRFoqMHceaFaHm9SAfdiHFOAX`;

const url = new URL(
    "http://quiz-api.siit.ro/api/profile"
);

let headers = {
    "Authorization": `Bearer ${token}`,      // THE AUTH TOKEN is placed in the request headers
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
})
    .then(response => response.json())
    .then(data => console.log(data));