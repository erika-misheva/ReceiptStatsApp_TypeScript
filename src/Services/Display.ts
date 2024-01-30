import { Product } from "../Classes/Product.js";
import {format} from "./Format.js"
import {sortAndGroupByDomestic} from "./Format.js"
import {totalPrice} from "./Format.js"
import {totalCount} from "./Format.js"

export function Display(products : Product[], outputElement : HTMLDivElement){
    const domesticHeadingParagraph = document.createElement('p');
    domesticHeadingParagraph.innerHTML = `.&nbsp;Domestic`
    outputElement.append(domesticHeadingParagraph);
    let domesticProducts = sortAndGroupByDomestic(products, true);
    outputElement.append(format(domesticProducts));

    const importedHeadingParagraph = document.createElement('p');
    importedHeadingParagraph.innerHTML = `.&nbsp;Imported`;  
    outputElement.append(importedHeadingParagraph);
    let importedProducts = sortAndGroupByDomestic(products, false);
    outputElement.append(format(importedProducts));

    outputElement.innerHTML += `<p>Domestic Cost: ${totalPrice(domesticProducts)}</p>
    <p>Imported Cost: ${totalPrice(importedProducts)}</p>
    <p>Domestic Count: ${totalCount(domesticProducts)}</p>
    <p>Imported Count: ${totalCount(importedProducts)}</p>`;
}
