// Callback - function that is passed as an argument to another function.
/* 
    used: 
    -> reading a file 
    -> network requests 
    -> interacting with databases. 
*/ 

function sum(callback, x, y){
    let result = x * y ; 
    callback(result);
}

function displayConsole(result){
    console.log(result);
}

// sum(displayPage,78456,84156320);


function displayPage(result){
    document.getElementById("resultID").textContent = result;

}


//----------------------------------// 

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


// Map() -> Method NB: RETURNS A NEW ARRAY

const dates = ["2024-01-10", "2024-02-14", "2028-06-01", "2027-01-12"];
const newDates = dates.map(formatDate);

//console.log(newDates);

function formatDate(element){
    const parts = element.split("-");
    return `${parts[1]} - Month /${parts[2]} - Day /${parts[0]} - Year`; 
}



// .filter() method -> creates a new array by filtering out elements. 

let numbers = [1,2,3,4,5,6,7,8,9,10];
let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);

//console.log(evenNums);
//console.log(oddNums);

function isEven(element){
    return element % 2 == 0 ;
}
function isOdd(element){
    return element & 2 !== 0 ;
}

const ages = [16, 17, 18, 18, 40];
const adults = ages.filter(isAdult);
const children = ages.filter(isChild);
//console.log(adults);
//console.log(children);
function isAdult(element){
    return element >= 18;
}
function isChild(element){
    return element < 18;
}

const words = ["Apple", "Pear", "Banana", "Orange", "Lichi", "Watermelon"] ; 
const shortWords = words.filter(getShortWords);
const longWords = words.filter(getLongWords);
//console.log(shortWords);
//console.log(longWords);
function getShortWords(element){
    return element.length <= 6 ;
}
function getLongWords(element){
    return element.length > 6 ;
}

/// .reduce() - reduce elements of an array to a single value. 

const prices = [10, 15, 17, 25, 40] ;

const total = prices.reduce(sum);

//console.log(`$ ${total}`); 

function sum(previousElement, next){
    return previousElement + next ;
}

// simpler way of using the for loop. 

const grades = [75, 50, 60, 78, 60];

const maxValue = grades.reduce(getMax);
const minValue = grades.reduce(getMin);
//console.log(maxValue); 
//console.log(minValue); 
function getMax(accumulator, element){
    return Math.max(accumulator, element);
}
function getMin(accumulator, element){
    return Math.min(accumulator, element);
}


///// Function Expressions 


const numberss = [1,2,3,4,5,6];

const square = numberss.map(function(element){
    return Math.pow(element, 2);
});

const cubes = numberss.map(function(element){
    return Math.pow(element, 3);
});


const evenNumbers = numberss.filter(function(element){
    return element % 2 === 0;
});
const oddNumbers = numberss.filter(function(element){
    return element % 2 === 0;
});

const itotal = numberss.reduce(function(element, next){
    return element + next ;
});

//console.log(oddNumbers);
//console.log(evenNumbers);
//console.log(cubes);
//console.log(square);
//console.log(itotal);


// Arrow function - consise way to write function expression - good for simple functions that you only use once

const hello = (name, age) => {console.log(`Hello ${name}`)
                              console.log(`You are ${age}  years old!`)};
//hello("Alexander", 26);

// setTimeout( () =>  console.log("Hello") ,3000);


// array funciton with map filter and reduce 

const numberArray = [1,2,3,4,5,6];

const squareNumberArray = numberArray.map(  (element) => Math.pow(element, 2));
const cubeNumberArray = numberArray.map(  (element) => Math.pow(element, 3));
const evenNumsNumberArray  = numberArray.filter( (element) => element % 2 === 0 );
const oddNumsNumberArray  = numberArray.filter( (element) => element % 2 !== 0  );
const sumNumberArray = numberArray.reduce( (accumulator, element) => accumulator + element );

console.log(squareNumberArray);
console.log(cubeNumberArray);
console.log(evenNumsNumberArray);
console.log(oddNumsNumberArray);
console.log(sumNumberArray);



