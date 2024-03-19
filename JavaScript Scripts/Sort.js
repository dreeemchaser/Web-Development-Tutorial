/*
 ?   <--------------------sort()----------------->
 ?    sort() - method used to sort elements of an array
 !    sorts elements as string in LEXICOGRAPHIC order.
 ?     (LEXICOGRAPHIC) ->  alphabet + numbers + symbols
 */

// Sorting An array of numbers:

let numbers = [1,10,2,9,7,5,3,4,8];

//numbers.sort( (a,b) => a - b );
//numbers.sort( (a,b) => b - a );

// console.log(numbers);

// sort objects with a given property.

const people = [{name : "Alexander", age: 23, gpa: 3.1},
    {name : "Kevin", age: 34, gpa: 3.8},
    {name : "Jonothan", age: 27, gpa: 3.3},
    {name : "Tia", age: 22, gpa: 4.1}]

// normal order
people.sort( (a,b) => b.name.localeCompare(a.name));

// reverse order
//people.sort( (a,b) => a.name - b.name );

console.log(people);