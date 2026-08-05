const chai = {
    name:"masala chai",
    price:20,
    isHot:true
}

// {
//     name:string;
//     price:number;
//     isHot:boolean
// }


// let tea = {
//     name:string,
//     price:number,
//     isHot:boolean
// }

// tea = {
//     name:"Ginger tea",
//     price:250,
//     isHot: true
// }

type Tea = {
    name:string,
    price:number,
    ingredients:string[]
}

const adrakchai : Tea = {
    name:"adrak chai",
    price:25,
    ingredients:["sugar","milk","Ginger"]
}



type Cup = {size:string}; 
let smallCup:Cup = {size:"200ml"}

let bigCup = {size:"500ml",material:"steel"}
smallCup = bigCup 


type Brew = {brewTime:number}
const coffee = {brewTime:5,beans:'arabica'}
const chaiBrew:Brew = coffee

type user = {
    username:string,
    password:string
}

const u:user = {
    username:"sumitkum",
    password:"123"
}

type Item = {name:string,quantity:number}
type Address = {street:string,pin:number}

type Order = {
    id:string;
    itmes:Item[]; 
    address:Address
}


type Chai = {
    name:string;
    price:number;
    isHot:boolean
}

const updateChai = (updates:Partial<Chai>)=>{
    console.log("updating chai with",updates); 
}

updateChai({price:25})

updateChai({isHot:false})
updateChai({})


type ChaiOrder = {
    name?:string;
    quantity?:number
}
const placeOrder = (order:Required<ChaiOrder>)=>{
    console.log(order)
}

placeOrder({
    name:"Masala chai",
    quantity:2
})


type Chai2 = {
    name:string,
    price:number; 
    isHot:boolean; 
    ingredients:string[]
}

type BasicChaiInfo = Pick<Chai2, "name"|"price">;
const chaiInfo: BasicChaiInfo = {
    name:"lemon tea",
    price:30
}

