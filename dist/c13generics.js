"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function wrapInArray(item) {
    return [item];
}
//if you pass integer, then you will get array of string.
// if you pass integer , then you will get array of an integer. 
wrapInArray("masala");
wrapInArray(22);
wrapInArray({ flavor: "Ginger" });
function pair(a, b) {
    return [a, b];
}
pair("masala", "test");
pair("masala", { flavour: "ginger" });
const res = {
    status: 200,
    data: { flavour: "masala" }
};
