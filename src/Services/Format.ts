 import { Product } from "../Classes/Product.js";

 export function format(products: Product[]) : HTMLDivElement {
    let output = document.createElement('div');
    products.forEach(product => {
        const nameParagraph= document.createElement('p');
        nameParagraph.innerHTML = `...&nbsp;Name: ${product.name}`;
        output.appendChild(nameParagraph);

        const priceParagraph= document.createElement('p');
        priceParagraph.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;Price: ${product.price}`;
        output.appendChild(priceParagraph);

        const descriptionParagraph= document.createElement('p');
        descriptionParagraph.innerHTML = `${
              product.description
                ? `<p>&nbsp;&nbsp;&nbsp;&nbsp;Description: ${product.description.slice(
                    0,
                    10
                  )}...</p>`
                : ""
            }; `
        output.appendChild(descriptionParagraph);

        const weightParagraph= document.createElement('p');
        weightParagraph.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;Weight: ${
               product.weight !== undefined ? product.weight + "g" : "N/A"}`;
        output.appendChild(weightParagraph);

    });  
    return output;  
}

export function sortAndGroupByDomestic(products : Product[], isDomestic : boolean) :Product[]{
 const sortedProducts = products.filter(product => product.domestic == isDomestic).sort((a, b) => a.name.localeCompare(b.name));
 return sortedProducts;
}

export function totalPrice(products : Product[]) : number{
    const totalPrice = products.reduce((total, product) => {
        return total + product.price;
      }, 0);
    
      return totalPrice;
}

export function totalCount(products: Product[]) : number{
  return products.length;
}



