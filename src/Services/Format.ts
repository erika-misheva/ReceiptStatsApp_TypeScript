import { Product } from "../Classes/Product.js";

export function format(products: Product[], container: HTMLUListElement) {

  products.forEach(product => {
    const nameLi = document.createElement('li');
    nameLi.innerHTML = `...&nbsp;Name: ${product.name}`;
    container.appendChild(nameLi);

    const priceLi = document.createElement('li');
    priceLi.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;Price: ${product.price}`;
    container.appendChild(priceLi);

    const descriptionLi = document.createElement('li');
    descriptionLi.innerHTML = `${product.description
      ? `&nbsp;&nbsp;&nbsp;&nbsp;Description: ${product.description.slice(
        0,
        10
      )}...`
      : ""
      } `
    container.appendChild(descriptionLi);
    const weightLi = document.createElement('li');
    weightLi.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;Weight: ${product.weight !== undefined ? product.weight + "g" : "N/A"}`;
    container.appendChild(weightLi);

  });
}

export function sortAndGroupByDomestic(products: Product[], isDomestic: boolean): Product[] {
  const sortedProducts = products.filter(product => product.domestic == isDomestic).sort((a, b) => a.name.localeCompare(b.name));
  return sortedProducts;
}

export function totalPrice(products: Product[]): number {
  const totalPrice = products.reduce((total, product) => {
    return total + product.price;
  }, 0);

  return totalPrice;
}

export function totalCount(products: Product[]): number {
  return products.length;
}



