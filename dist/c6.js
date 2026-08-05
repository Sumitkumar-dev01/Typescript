"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let response = "42";
let numericLength = response.length;
let bookString = '{"name":"who moved my cheese"}';
let bookObject = JSON.parse(bookString);
console.log(bookObject.name);
const inputElements = document.getElementById("username");
let value;
value = "chai";
value = [1, 2, 3];
value = 2.5;
value.toUppercase();
let newValue;
newValue = [1, 2, 3];
newValue = 2.5;
if (typeof newValue === "string") {
    newValue.toUpperCase();
}
try {
}
catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
    console.log('Error', error);
}
const data = "chai aur code";
const strData = data;
// function redirectBasedOnRole(role:Role):void{
//     if(role === "Admin"){
//         console.log("redirecting to admin dashboard"); 
//     }
// }
function neverReturn() {
    while (true) { }
}
