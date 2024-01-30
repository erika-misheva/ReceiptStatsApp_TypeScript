import { Product } from "./Classes/Product.js"
import { Display } from "./Services/Display.js";

function api<T>(url: string): Promise<T> {
    console.log('Fetching data from:', url);
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json() as Promise<T>;
      })
      .then(data => {
        console.log('Data received:', data);
        return data;
      });
}

  let reciept = document.querySelector('.reciept') as HTMLDivElement;
  console.log(reciept);

  function runApp(){
  api<Product[]>("https://interview-task-api.mca.dev/qr-scanner-codes/alpha-qr-gFpwhsQ8fkY1")
    .then(response => {
        console.log(response);
        Display(response, reciept);
    })
    .catch(error => {
      console.error('Error fetching data:', error.message);
    });
  }

  runApp();
    


