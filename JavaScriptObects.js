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
    eat       :  ()  => {console.log(`I am eating susji.`)} 
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




// THIS - reference to the obkect where THIS is used. 

const objSpongebog = {
    name : "Spongebog", 
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

//objSpongebog.eat();
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


// Classes - provide structured and cleanere way to work with objects. 

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


// Static - keyword that defines PROPERTIES or METHODS that belong to a class itself rathe rthan the objects created from that class. 

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

// Inheritance - allows classes to inherit properties and methods from an existing class (partent -> child)  

class P{}


class PD{}
