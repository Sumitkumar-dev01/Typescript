var sym = Symbol();
var sym2 = Symbol();

var sym3 = Symbol('abc');
var sym4 = Symbol('def');
var sym5 = Symbol('abc');

console.log(sym == sym2);
console.log(sym);
console.log(sym2);


console.log(sym3 == sym4);
console.log(sym3 == sym4);



// this is a special properties of symbol in typescript even if we have same key
// for symbol but it gives output as a false. 



const dID = Symbol('id');
const mID = Symbol('id');

const obj = {
    [dID]:1000,
    name:"sumit kumar"
}

console.log(obj[dID]);