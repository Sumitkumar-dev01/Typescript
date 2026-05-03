/**
 * below are all primitive types in js
 * string -> store text
 * number -> integers, real
 * boolean,
 * undefined
 * null
 * bigint
 * symbol
 */
var id = 5;
var firstName = "sumit"; // ts undersands firstName will store strings; 
// firstName = 12 ; typescript throw error 
var lastName = "sumit";
// lastName = 13; typescript throw error. 
console.log(id, firstName);
// client aur server wala example bataya sir ne. 
// union of types  
var userId = "26";
userId = 10;
console.log(userId);
var x = 10;
x = "sumit";
x = false;
console.log(x);
/**
 *
 * arrays
 * let<variable_name: type[] = [val1,val2,........]
 */
var ids = [1, 2, 3, 4, 5];
console.log(ids);
var hetro = [1, 2, 3, "false", null];
var data = [1, "sumit", true];
console.log(ids, hetro, data);
// arrays in from of typed tuples
var data1 = [1, "sumit", true];
console.log(data1);
/**
 * how to define types for objects
 * classes -> data members, member function
 * interfaces -> it's a contract
 *
 */
var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
    }
    Car.prototype.display = function () {
        console.log(this.name);
    };
    return Car;
}());
;
var p1 = {
    name: "Iphone",
    price: 1000000,
    brand: "apple",
    display: function () {
        console.log("display");
    }
};
// let c1 : Car= {
//     name: "apple",
//     price: 100000000,
//     brand: "hyundai"
// }
console.log(p1);
var c1 = new Car("santro");
function sum(a, b) {
    return a + b;
}
console.log(sum(10, 10));
// here b is optional parameter 
function sum1(a, b) {
    return a + (b || 0);
}
console.log(sum1(10));
// date object in typescript 
var dob = new Date(1998, 3, 11);
console.log(dob);
console.log(dob.getDate());
/**
 * any type -> your free ticket to get rid of typescript type checking
 * if you want to define a variable with type any then either mention ":any" while declaring the variables
 * to don't assign a value while decelaring a variable
 *
 */
var y; // this variable x is of type any 
y = '10';
y = 10;
function fun() {
}
console.log(fun());
