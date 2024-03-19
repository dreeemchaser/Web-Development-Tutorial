// ForEach() function:

let fruits = ["apple", "orange", "banana", "coconut"] ;
fruits.forEach(capitalizeFirstElement);
// fruits.forEach(displayConsole);

function lowercase(element, index, array){
    array[index] = element.toLowerCase();
}

function capitalizeFirstElement(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

function uppercase(element, index, array){
    array[index] = element.toUpperCase();
}

/*
function displayConsole(element){
    console.log(element);
}
*/

