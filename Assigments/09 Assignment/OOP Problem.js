class Product{
    name;
    price;
    quantity;

    constructor(n, p ,qty) {
        this.name = n
        this.price = p
        this.quantity = qty
    }

    calculateTotalValue() {
        return this.price * this.quantity
    }

    applyDiscount(discountPercentage) {
        let discountedPrice = this.price * discountPercentage / 100
        this.price -= discountedPrice
    }

    restock(newQuantity) {
        this.quantity += newQuantity
    }

    isOutOfStock() {
        return this.quantity == 0 ? true : false
    }

    displayProductDetails() {
        console.log("************Product Details************");
        console.log(`Name: ${this.name}`);
        console.log(`Price: ${this.price}`);
        console.log(`Quantity: ${this.quantity}`);
        console.log("************************************");
    }

}


const product1 = new Product("Laptop", 900, 5);
const product2 = new Product("Smartphone", 700, 8);
const product3 = new Product("Shoes", 120, 15);


console.log(product1.calculateTotalValue()); 
product2.applyDiscount(10);
console.log(product2.price);
product3.restock(10);
console.log(product3.quantity);
console.log(product1.isOutOfStock());
product2.displayProductDetails()
