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

product1.displayProduct();
product2.displayProduct();
product3.displayProduct();

const totalProductOne = product1.calcTotal(salesTax);
console.log(`Total Price (with tax): $${totalProductOne.toFixed(2)}`);

const totalProductTwo = product2.calcTotal(salesTax);
console.log(`Total Price (with tax): $${totalProductTwo.toFixed(2)}`);

const totalProductThree = product3.calcTotal(salesTax);
console.log(`Total Price (with tax): $${totalProductThree.toFixed(2)}`);

