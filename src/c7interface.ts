type ChaiOrder = {
    type:string;
    sugar:number;
    strong:boolean
}

function makechai(order:ChaiOrder){
    console.log(order)
}

function serveChai(order:ChaiOrder){
    console.log(order)
}

type TeaRecipe = {
    water:number;
    milk:number;
}

class MasalaChai implements TeaRecipe{
    water = 100; 
    milk = 50; 
}

interface CupSize {
    size:"small" | "large"
}

class Chai implements CupSize{
    size: "small" | "large" = "large"
}


// class ke andar jab implement karna hain 
// toh hum prefer karte hain ki interface bana ke 
// hi karo. 


type Response = {ok:true} | {ok:false}

// it gives error 
// class myRes implements Response{
//     ok:boolean = true;
// }

// literal type. 
type TeaType = "masala" | "ginger" | "lemon"

// function orderChai{t:TeaType}{
//     console.log(t); 
// }


// intersection 

type BaseChai = {teaLeaves:number}
type Extra = {masala:number}


type MasalaChai1 = BaseChai & Extra
const cup : MasalaChai1 = {
    teaLeaves:2,
    masala:1
}

type User = {
    username:string;
    bio?:string
}

const u1 : User = {username:'sumit'}
const u2: User = {username:"sumit",bio:"sumitportfolio.me"}

type config = {
    readonly appName: string
    version:number
}

const cfg: config = {
    appName: "abhi tak nahi banaya hain",
    version:2
}


// read only -> ek bar jo value set kar di 
// uske bad chnage nahi kar sakte ho. 


