// class Chai{
//     flavour:string; 
//     price:number

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




class Chai{
    public flavour:string = "masala"
    private secretIngredients  = "cardamom"; 

    reveal(){
        return this.secretIngredients; 
    }

    
}


const c = new Chai(); 
c.reveal()



class shop{
    protected shopName = "chai corner"
}
class Branch extends shop{
    getName(){
        return this.shopName // ok
    }
}

new Branch().getName(); 

class wallet{
    #balance = 100

    getBalance(){
        return this.#balance
    }
}

const w = new wallet()


class Cup {
    readonly capacity: number = 250
    constructor(capacity:number){
        this.capacity = capacity
    }
}

class ModernChai{
    private _suagar = 2

    get sugar(){
        return this._suagar
    }
    set sugar(value:number){
        if(value>5) throw new Error("too sweet ")
            this._suagar = value
    }
}

const D = new ModernChai()
D.sugar = 3


class EkChai{
    static shopName = "chaicode caffe"
    constructor(public flavour:string){


    }
}
console.log(EkChai.shopName)

abstract class Drink{
    abstract make() : void
}

class MyChai extends Drink{
    make(){
        console.log("brewing chai")
    }
}


class Heater{
    heat(){}
}

class ChaiMaker{
    constructor(private heater:Heater){}
    make(){
        this.heater.heat
    }
}