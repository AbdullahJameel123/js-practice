let products = [

    {
        name: "Keyboard",
        price: 5,
        quantity: 15
    },

    {
        name: "Screen",
        price: 20,
        quantity: 4
    },

    {
        name: "Mouse",
        price: 20,
        quantity: 15
    },
]

let min = products.filter(product => product.quantity < 5)

let increasedPrice = products.map(product => product.price * 10/100 + product.price)

products.forEach(product => {
    console.log(product.price * product.quantity);
    
});