/*
    ? Inheritance - allows classes to inherit properties and methods from an existing class (parent -> child)
    ? SUPER - keyword - used in all classes to call constructor OR access the properties & methods of a parent class.
    ? this = object
    ? super = parent
*/
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

console.log(rectangle.height);
console.log(rectangle.width);
console.log(rectangle.area);


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

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
console.log(person.age);

