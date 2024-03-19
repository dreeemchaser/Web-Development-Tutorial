const fruits = [
    { name: "Apple", color:"red", calories : 78 },
    { name: "Orange", color:"orange", calories : 85 },
    { name: "Banana", color:"yellow", calories : 74 },
    { name: "coconut", color:"white", calories : 180 },
    { name: "Grapes", color:"green", calories : 75 },
    { name: "Lemon", color:"yellow", calories : 30 },
];

// ?            Add a fruit
// .push({name: "Kiwi", color:"green", calories: 55});

// ?            Remove element
// fruit.pop();

// ?       Remove element at certain indices
// fruit.splice(1,5);

// ?         for each - loop through
//fruit.forEach( fruit => console.log(fruit) )
console.log(`---------------------------------------------------------`);

// !        <----------------map()--------------------->
// !      run each element through a function and return an ARRAY
// Name:
const fruitNames = fruits.map( fruits => fruits.name);
console.log(fruitNames);

//Color:
const fruitColor = fruits.map( fruits => fruits.color);
console.log(fruitColor);

//Calories:
const fruitCalories = fruits.map(fruits => fruits.calories);
console.log(fruitCalories);
console.log(`---------------------------------------------------------`);


// !        <----------------Filter()--------------------->
// Yellow fruits only:
const yellowFruits = fruits.filter(fruits => fruits.color === "yellow");
console.log(yellowFruits);

// low cal fruits
const lowCalFruit = fruits.filter(fruits => fruits.calories < 80);
console.log(lowCalFruit);

// low cal fruits
const highCalFruit = fruits.filter(fruits => fruits.calories >= 100);
console.log(highCalFruit);
console.log(`---------------------------------------------------------`);



// !        <----------------reduce()--------------------->
// return object with the greatest amount of calories
const maxCalFruit = fruits.reduce( (max, fruit) =>
                                  fruit.calories > max.calories ?
                                  fruit : max);
console.log(`Fruit with max calories:`);
console.log(maxCalFruit);

// return object with the least amount of calories
const minCalFruit = fruits.reduce( (min, fruit) =>
    fruit.calories < min.calories ?
        fruit : min);
console.log(`Fruit with min calories:`);
console.log(minCalFruit);
