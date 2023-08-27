/**
 * EXAMPLE OF A GET REQUEST with QUERY parameters
 * query parameters are placed in the URL, after the question mark (?) and are separate by the ampersand (&)
 * in our example, the query params are: limit (value of 2) and random (value of 1)
 */
const url = "https://quiz-api.siit.ro/api/questions?limit=2&random=1";

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers,
})
    .then(response => response.json())
    .then(data => console.log(data));