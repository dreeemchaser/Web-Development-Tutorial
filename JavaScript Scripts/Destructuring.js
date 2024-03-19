
// Destructuring -> extract values from arrays and objects, then assign them to variables in a convenient way !
/*
    [] = to perform array destructing
    {} - to perform object destructing
 */

//Example One:
// SWAP THE VALUE OF TWO VARIABLES

let a = 500 ;
let b = 2 ;
[a,b] = [b,a];

//console.log(b)
//console.log(a)

// Example Two
// Swap two ELEMENTS in an array

const colors = ["red", "green", "blue", "black", "white"];
[colors[0], colors[4]] = [colors[4], colors[0]];
//console.log(colors);

// Example Three
// Assign ARRAY ELEMENTS to VARIABLES
const newColors = ["red", "green", "blue", "black", "white"];
const [firstColor, secondColor, thirdColor,...extraColors] = newColors;
//console.log(firstColor);
//console.log(secondColor);
//console.log(thirdColor);
//console.log(extraColors);

// Example Four
// Extract Values from objects.

const person1 ={
    firstName: "Alex",
    lastName: "Draai",
    age: 23,
    job: "Developer"
}

const person2 ={
    firstNasme: "Jon",
    lastName: "Moor",
    age: 32
}

const {firstName, lastName, age, job="Unemployed"} = person2;
//console.log(firstName);
//console.log(lastName);
//console.log(age);
//console.log(job);

//Example Five
// Extract IN FUNCTION PARAMETERS.

function displayPerson({firstName, lastName, age, job="Unemployed"}){
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

const personOne ={
    firstName: "Tia",
    lastName: "Draai",
    age: 23,
    job: "Graphic Design"
}

const personTwo ={
    firstName: "John",
    lastName: "Moore",
    age: 32
}
