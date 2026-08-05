"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai = {
    name: "masala chai",
    price: 20,
    isHot: true
};
const adrakchai = {
    name: "adrak chai",
    price: 25,
    ingredients: ["sugar", "milk", "Ginger"]
};
let smallCup = { size: "200ml" };
let bigCup = { size: "500ml", material: "steel" };
smallCup = bigCup;
const coffee = { brewTime: 5, beans: 'arabica' };
const chaiBrew = coffee;
const u = {
    username: "sumitkum",
    password: "123"
};
const updateChai = (updates) => {
    console.log("updating chai with", updates);
};
updateChai({ price: 25 });
updateChai({ isHot: false });
updateChai({});
const placeOrder = (order) => {
    console.log(order);
};
placeOrder({
    name: "Masala chai",
    quantity: 2
});
const chaiInfo = {
    name: "lemon tea",
    price: 30
};
