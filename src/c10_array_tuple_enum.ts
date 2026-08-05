const chaiFlavours: string[] = ["masala","adrak"]; 
const chaiPrice : number[] = [10,20]

const rating:Array<number> = [4.5,5.0]

type Chai = {
    name:string;
    price:number
}

const menu : Chai[] = [
    {name:"Masala",price:15},
    {name:"Adrak",price:25}
]

const cities : readonly string[] = ["delhi","patna"]

const table: number[][] = [
    [1,2,3],
    [4,5,6]
]


let chaiTuple:[string,number]; 
chaiTuple = ["masala",20]

let userInfo: [string,number,boolean?]
userInfo = ["sumit",100,true]


const location: readonly[number,number] = [28.66,32.22]
const chaiItems: [name:string,price:number] = ["masala",25]

enum CupSize {
    SMALL,
    MEDIUM,
    LARGE
}

const size = CupSize.MEDIUM

enum Status{
    PENDING = 100,
    SERVED, // 101
    CANCELLED // 102
}

enum ChaiType  {
  MASALA = 'masala',
  GINGER = 'ginger'
}

function makeChai(type:ChaiType){
    console.log(`making: ${type}`); 
}

makeChai(ChaiType.GINGER)


enum RandomEnum {
    ID = 1,
    NAME = "CHAI"
}

const enum Sugars {
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
}

let t: [string,number] = ["chai",10]
t.push("extra")