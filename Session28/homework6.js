let cart = [
    { name: "Mèn mén", price: 30000, quantity: 2 },
    { name: "Mì tôm", price: 5000, quantity: 1 },
    { name: "Bánh bao", price: 15000, quantity: 3 }
];

let sum = 0;
for (let i = 0; i < cart.length; i++) {
    sum += (cart[i].quantity * cart[i].price);
}
console.log(sum);
