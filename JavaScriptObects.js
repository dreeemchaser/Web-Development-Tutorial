// Object - collection of related properties and/ or methods. 

/* object = {key : value , 
            function()
            }
*/

const objAlex = {
    firstName : "Alexander",
    lastName  : "Draai",
    age       : 23,
    isEmployed: false,
    sayHello  :  (firstName) => {console.log(`My name is ${firstName}`)},
    eat       :  ()  => {console.log(`I am eating sushi.`)}
} 

const objTia = {
    firstName : "Tia",
    lastName  : "Chauhan",
    age       : 23,
    isEmployed: true,
    sayHello  :  () => console.log(`My name is ${objTia.firstName}`),
    eat       :  () => {console.log(`I am eating waffles.`)}
} 


//objAlex.sayHello(objAlex.firstName);
//objAlex.eat();
//objTia.eat();




// THIS - reference to the object where THIS is used.

const objSpongeBob = {
    name : "SpongeBob",
    favFood : "Hamburgers", 
    sayHello: function() {console.log(`hi I am ${this.name}`)},
    eat:    function() {console.log(`${this.name} is eating ${this.favFood}`)},
}

const objPatrick = {
    name : "Patrick", 
    favFood : "Pizza", 
    sayHello: function() {console.log(`hi I am ${this.name}`)},
    eat:    function() {console.log(`${this.name} is eating ${this.favFood}`)},
}

//objSpongeBob.eat();
//objPatrick.eat();

// Constructors !

function Car(
    make, model, year, color)
{
    this.make = make; 
    this.mode = model; 
    this.year = year;
    this.color = color;
    this.drive = function(){console.log(`You drive the ${this.make}`)};
}

const carBMW = new Car("BMW", " M3 E46", 2009, "RED");
const carAUDI = new Car("Audi", "RS3", 2024, "BLACK");
const carVW = new Car("VW", "GOLF 8", 2024, "BLACK");

//carBMW.drive();
//carAUDI.drive();
//carVW.drive();


// Classes - provide structured and cleaner way to work with objects.

class Products{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }


    calcTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05; 

const product1 = new Products("Jeans", 19.99);
const product2 = new Products("Shirt", 22.50);
const product3 = new Products("Undies", 100.00);

//product1.displayProduct();
//product2.displayProduct();
//product3.displayProduct();

const totalProductOne = product1.calcTotal(salesTax);
//console.log(`Total Price (with tax): $${totalProductOne.toFixed(2)}`);

const totalProductTwo = product2.calcTotal(salesTax);
//console.log(`Total Price (with tax): $${totalProductTwo.toFixed(2)}`);

const totalProductThree = product3.calcTotal(salesTax);
//console.log(`Total Price (with tax): $${totalProductThree.toFixed(2)}`);


// Static - keyword that defines PROPERTIES or METHODS that belong to a class itself rather than the objects created from that class.

class MathUtil{
    static PI = 3.14159 

    static getDiameter(radius){
        return radius * 2 ;
    }
    static getCircumference(radius){
        return 2 * this.PI * radius ;
    }
    static getArea(radius){
        return this.PI * radius * radius ;
    }
}

//console.log(MathUtil.PI);
//console.log(MathUtil.getDiameter(10));
//console.log(MathUtil.getCircumference(10));
//console.log(MathUtil.getArea(10));


class User{

    static userCount = 0 ; 

    constructor(username){
        this.username = username;
        User.userCount++;
    }

    static getUserCount(){
        console.log(`There are ${User.userCount} users online`);
    }

    sayHello(){console.log(`Hello my username is ${this.username}`);}
}

const userOne = new User("Alex");
const userTwo = new User("Jo");
const userThree = new User("Mo");

//console.log(userOne.username);
//userOne.sayHello();
//console.log(userTwo.username);
//console.log(userThree.username);
//console.log(User.userCount);
//User.getUserCount();

// Inheritance - allows classes to inherit properties and methods from an existing class (parent -> child)
// SUPER - keyword - used in all classes to call constructor OR access the properties & methods of a parent class.
// this = object
// super = parent

class Animal{
  constructor(name, age) {
      this.name = name;
      this.age = age;
  }

  move(speed){
      console.log(`The ${this.name} moves at a speed of ${speed}mph.`)
  }
}
class Rabbit extends Animal{
  constructor(name, age, runSpeed) {
      super(name, age);
      this.runSpeed = runSpeed;
  }

  run(){
      console.log(`This ${this.name} can run`);
      super.move(this.runSpeed);
  }
}
class Fish extends Animal{
   constructor(name, age, swimSpeed) {
       super(name, age);
       this.swimSpeed = swimSpeed;
   }
    run(){
        console.log(`This ${this.name} can swim`);
        super.move(this.swimSpeed);
    }
}
class Hawk extends Animal{
   constructor(name, age, flySpeed) {
       super(name, age);
       this.flySpeed = flySpeed;
   }
    run(){
        console.log(`This ${this.name} can fly`);
        super.move(this.flySpeed);
    }
}

const rabbit = new Rabbit(`Alex`,21,154);
const fish = new Fish(`Jackson `,76,200);
const hawk = new Hawk(`Milo`,51,124);

// Getters and Setters

class Rectangle{
    constructor(width, height) {
        this.height = height;
        this._width = width;
    }
    set width(newWidth) {
        if(newWidth > 0){
            this._width = newWidth;
        } else  {
            console.log(`Width must be a positive number.`);
        }
    }

    set height(newHeight) {
        if(newHeight > 0){
            this._height = newHeight;
        } else  {
            console.log(`Height must be a positive number.`);
        }
    }
    get width(){
        return `${this._width.toFixed(1)}cm`
            ;}
    get height(){
        return `${this._height.toFixed(1)}cm`
            ;}

    get area(){return `${(this._height * this._width).toFixed(1)}cm`};

}
const rectangle = new Rectangle(5, 10);
rectangle.height = 100;
rectangle.width = 100;

//console.log(rectangle.height);
//console.log(rectangle.width);
//console.log(rectangle.area);


class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName){
        if(typeof newFirstName === "string" && newFirstName.length > 0){
            this._firstName = newFirstName;
        } else {
            console.error("First name must be a non-empty string");
        }
    }

    set lastName(newLastName){
        if(typeof newLastName === "string" && newLastName.length > 0){
            this._lastName = newLastName;
        } else {
            console.error("Last name must be a non-empty string");
        }
    }

    set age(newAge){
        if(typeof newAge === "number" && newAge >= 0){
            this._age = newAge;
        } else {
            console.error("age must be a non-negative number");
        }
    }

    get firstName(){return this._firstName};
    get lastName(){return this._lastName};

    get fullName(){return `${this._firstName} ${this._lastName}`};

    get age(){return this._age};
}

const person = new Person("Alexander","Draai",23);

//console.log(person.firstName);
//console.log(person.lastName);
//console.log(person.fullName);
//console.log(person.age);


// Destructuring -> extract values from arrays and objects, then assign them to variables in a convenient way !
/*
    [] = to perform array destructing
    {} - to perform object destructing
 */


