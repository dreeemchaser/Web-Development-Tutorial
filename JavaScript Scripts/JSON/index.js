//!        JSON - (JavaScript Object Notation) - data-interchange format
//?        Used for exchanging DATA between server and  web application.
//!        JSON FILES {KEY: VALUE} OR [VALUE, VALUE, VALUE]

// !               Methods:
//? JSON.stringify() - converts JS object to a JSON string.


 // Names
const names = ["Kevin", "Alexander", "Tia"];
const person = {"name": "Alexander", "age": 32, "isEmployed": false, "hobbies": ["JellyFishing", "Karate", "Gaming"]};
const people = [{"name": "Alexander", "age": 32,"isEmployed": false},
                {"name": "Tia","age": 33,"isEmployed": true},
                {"name": "Jonathan","age": 27, "isEmployed": true}];
//const jsonString = JSON.stringify(names);
//console.log(jsonString);

//const jsonString = JSON.stringify(person);
//console.log(jsonString);

//const jsonString = JSON.stringify(people);
//console.log(jsonString)


//? JSON.parse() - converts JSON string to a JS object.

const jsonNames = `["Kevin", "Alexander", "Tia"]`;
const jsonPerson = `{"name": "Alexander", "age": 32, "isEmployed": false, "hobbies": ["JellyFishing", "Karate", "Gaming"]}`;
const jsonPeople = `[{"name": "Alexander", "age": 32,"isEmployed": false},
    {"name": "Tia","age": 33,"isEmployed": true},
    {"name": "Jonathan","age": 27, "isEmployed": true}]`;

const parsedNames = JSON.parse(jsonNames);
//console.log(parsedNames)

const parsedPerson = JSON.parse(jsonPerson);
//console.log(parsedPerson)

const parsedPeople = JSON.parse(jsonPeople);
//console.log(parsedPeople)


//!  How to fetch JSON file
// fetch() - function


fetch("person.json")
    .then( respone => respone.json())
    .then(value => console.log(value))

fetch("people.json")
    .then( respone => respone.json())
    .then(value => console.log(value))

fetch("people.json")
    .then( respone => respone.json())
    .then(value => console.log(value))


// how to iterate through each object:
fetch("people.json")
    .then( respone => respone.json())
    .then(values => values.forEach(value => console.log(value.age)))
    .catch(reportError => console.log(reportError));
