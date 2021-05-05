var arrayInteger = [0, -1, 1, -2, -3, 5, 6, -97, 20, 26, -97, 99, 100];
console.log("arrayInteger = ", arrayInteger);

function lastIndexOfElementThatHasNegativeValue(arrayInteger) 
{   
    arrayInteger.lastIndexOf(-97);
    return arrayInteger.lastIndexOf(-97);
}

console.log("Value of the element: ", arrayInteger[7]);
console.log("Latest index of element is: ", lastIndexOfElementThatHasNegativeValue(arrayInteger));