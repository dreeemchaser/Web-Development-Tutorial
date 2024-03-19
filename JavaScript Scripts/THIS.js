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

objSpongeBob.eat();
objPatrick.eat();
