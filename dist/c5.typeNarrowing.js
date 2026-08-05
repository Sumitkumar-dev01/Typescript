"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getCoffee(kind) {
    if (typeof kind === "string") {
        return `making ${kind} coffee...`;
    }
    return `coffee order: ${kind}`;
}
/**
 * jaise hi aap type ko narrow down
 * kar lete ho toh apko pata hain ki kaun
 * se suggestions milne wale hain
 */
function serveChai(msg) {
    if (msg) {
        return `serving ${msg}`;
    }
    return `serving default coffee`;
}
function orderChai(size) {
    if (size === "medium") {
        return `medium coffee`;
    }
    if (size === "small" || size === "large") {
        return `make extra coffee`;
    }
    return `coffee order #${size}`;
}
class kulhadChai {
    serve() {
        return `serving kulhad chai`;
    }
}
class Cutting {
    serve() {
        return `serving cutting chai`;
    }
}
function serve(chai) {
    if (chai instanceof kulhadChai) {
        return chai.serve();
    }
}
function isChaiOrder(obj) {
    return (typeof obj === "object" &&
        obj == null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number");
}
// function serveOrder(item:chaiOrder|string){
//     if(isChaiOrder(item)){
//         return `serving ${item.type}
// }
function serveOrder(item) {
    if (isChaiOrder(item)) {
        return `serving ${item.type} chai with ${item.sugar} sugar`;
    }
    return `serving custom chai: ${item}`;
}
function Makechai(order) {
    switch (order.type) {
        case "ginger":
            return `ginger chai`;
        case "masala":
            return `ginger`;
    }
}
function brew(order) {
    if ("spicelevel" in order) {
        //
    }
}
// function isStringArray(arr:unknown):arr is string[]{
// }
