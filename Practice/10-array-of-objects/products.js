let products = [
  { name: "Laptop", price: 1000, stock: 5 },
  { name: "Smartphone", price: 800, stock: 10 },
  { name: "Tablet", price: 600, stock: 8 },
];

// print name and price of each product
products.forEach(product => {
  console.log(`Product: ${product.name}, Price: $${product.price}`);
});

// Filter products above 100
let expensive = products.filter(product => product.price > 100);
console.log("Expensive Products:", expensive);

// Find total value of Inventory in Werehouse/Store
let inventoryValue = products.reduce((total, product) => total + (product.price * product.stock), 0);
console.log("Total Inventory Value: $", inventoryValue);