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

carBMW.drive();
carAUDI.drive();
carVW.drive();
