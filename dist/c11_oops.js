"use strict";
// class Chai{
//     flavour:string; 
//     price:number
Object.defineProperty(exports, "__esModule", { value: true });
//     // constructor(flavour:string,price:number){
//     //     this.flavour = flavour
//     //     this.price = price
//     // }
//     constructor(flavour:string,price:number){
//         this.flavour = flavour
//         console.log(this)
//     }
// }
// const masalaChai = new Chai("ginger",20)
class Chai {
    flavour = "masala";
    secretIngredients = "cardamom";
    reveal() {
        return this.secretIngredients;
    }
}
const c = new Chai();
c.reveal();
class shop {
    shopName = "chai corner";
}
class Branch extends shop {
    getName() {
        return this.shopName; // ok
    }
}
new Branch().getName();
class wallet {
    #balance = 100;
    getBalance() {
        return this.#balance;
    }
}
const w = new wallet();
class Cup {
    capacity = 250;
    constructor(capacity) {
        this.capacity = capacity;
    }
}
class ModernChai {
    _suagar = 2;
    get sugar() {
        return this._suagar;
    }
    set sugar(value) {
        if (value > 5)
            throw new Error("too sweet ");
        this._suagar = value;
    }
}
const D = new ModernChai();
D.sugar = 3;
class EkChai {
    flavour;
    static shopName = "chaicode caffe";
    constructor(flavour) {
        this.flavour = flavour;
    }
}
console.log(EkChai.shopName);
class Drink {
}
class MyChai extends Drink {
    make() {
        console.log("brewing chai");
    }
}
class Heater {
    heat() { }
}
class ChaiMaker {
    heater;
    constructor(heater) {
        this.heater = heater;
    }
    make() {
        this.heater.heat;
    }
}
