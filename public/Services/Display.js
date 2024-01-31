import { format } from "./Format.js";
import { sortAndGroupByDomestic } from "./Format.js";
import { totalPrice } from "./Format.js";
import { totalCount } from "./Format.js";
export function Display(products, outputElement) {
    let domesticOutputElement = document.querySelector(".domestic");
    let importedOutputElement = document.querySelector(".imported");
    let domesticProducts = sortAndGroupByDomestic(products, true);
    let importedProducts = sortAndGroupByDomestic(products, false);
    if (domesticOutputElement) {
        const domesticHeadingLi = document.createElement("li");
        domesticHeadingLi.innerHTML = `.&nbsp;Domestic`;
        domesticOutputElement.appendChild(domesticHeadingLi);
        format(domesticProducts, domesticOutputElement);
    }
    if (importedOutputElement) {
        const importedHeadingLi = document.createElement("li");
        importedHeadingLi.innerHTML = `.&nbsp;Imported`;
        importedOutputElement.appendChild(importedHeadingLi);
        format(importedProducts, importedOutputElement);
    }
    const domesticCostLi = document.createElement("li");
    domesticCostLi.innerText = `Domestic Cost: ${totalPrice(domesticProducts)}`;
    outputElement.appendChild(domesticCostLi);
    const importedCostLi = document.createElement("li");
    importedCostLi.innerText = `Imported Cost: ${totalPrice(importedProducts)}`;
    outputElement.appendChild(importedCostLi);
    const domesticCountLi = document.createElement("li");
    domesticCountLi.innerText = `Domestic Count: ${totalCount(domesticProducts)}`;
    outputElement.appendChild(domesticCountLi);
    const importedCountLi = document.createElement("li");
    importedCountLi.innerText = `Imported Count: ${totalCount(importedProducts)}`;
    outputElement.appendChild(importedCountLi);
}
