
// nested Objects = Objects inside of other Objects
/*
    Allows you to represent more complex data structures
    Chiild Object is enclosed by a Parent Object.
 */

const personObject ={
    fullName: "John Moore",
    age: 32,
    isStudent: true,
    hobbies: ["Gym", "Gaming", "Cooking"],
    address: {
        street: "6 Basset Road",
        city: "Cape Town",
        country: "South Africa"
    }
}

//console.log(personObject.fullName);
//console.log(personObject.age);
//console.log(personObject.isStudent);
//console.log(personObject.hobbies);
//console.log(personObject.address.city);
//console.log(personObject.address.country);

//for (const property in personObject.address){
//    console.log(personObject.address[property]);
//}

class Address{
    constructor(street, city, country) {
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

class PersonNest{
    constructor(name, age, ...address) {
        this.name = name;
        this.age = age;
        this.address = new Address(...address)
    }
}

const personTia = new PersonNest("Tia", 23, "124 PopStreet",
    "Kiki",
    "Cape Town");
const personAlex = new PersonNest("Alexander", 23, "6 Basset Road",
    "Claremont",
    "Cape Town");
const personKevin = new PersonNest("Kevin", 33, "7 Cleave Road",
    "Cotswold",
    "Cape Town");

console.log(personKevin.address);