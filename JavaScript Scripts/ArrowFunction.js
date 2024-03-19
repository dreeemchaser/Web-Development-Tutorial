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



