import { Display } from "./Services/Display.js";
function api(url) {
    console.log('Fetching data from:', url);
    return fetch(url)
        .then(response => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    })
        .then(data => {
        console.log('Data received:', data);
        return data;
    });
}
let reciept = document.querySelector('.reciept');
console.log(reciept);
function runApp() {
    api("https://interview-task-api.mca.dev/qr-scanner-codes/alpha-qr-gFpwhsQ8fkY1")
        .then(response => {
        console.log(response);
        // Display(response, reciept);
    })
        .catch(error => {
        console.error('Error fetching data:', error.message);
    });
}
runApp();
export {};
