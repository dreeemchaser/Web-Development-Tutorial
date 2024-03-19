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


objAlex.sayHello(objAlex.firstName);
objAlex.eat();
objTia.eat();


