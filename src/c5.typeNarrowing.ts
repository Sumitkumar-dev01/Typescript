function getCoffee(kind:string|number){
    if(typeof kind === "string"){
        return `making ${kind} coffee...`
    }
    return  `coffee order: ${kind}`
}

/**
 * jaise hi aap type ko narrow down 
 * kar lete ho toh apko pata hain ki kaun 
 * se suggestions milne wale hain 
 */


function serveChai(msg?:string){
    if(msg){
        return `serving ${msg}`
    }
    return `serving default coffee`
}


function orderChai(size:"medium"|"small"|"large"|number){
    if(size === "medium"){
        return `medium coffee`
    }
    if(size === "small" || size === "large"){
        return `make extra coffee`
    }
    return `coffee order #${size}`
}



class kulhadChai{
    serve(){
        return  `serving kulhad chai`
    }
}

class Cutting{
    serve(){
        return `serving cutting chai`
    }
}

function serve(chai:kulhadChai | Cutting){
    if(chai instanceof kulhadChai){
        return chai.serve(); 
    }
}


type chaiOrder = {
    type:string,
    sugar:number
}

function isChaiOrder(obj:any):obj is chaiOrder{
    return(
        typeof obj === "object" &&
        obj! == null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}

// function serveOrder(item:chaiOrder|string){
//     if(isChaiOrder(item)){
//         return `serving ${item.type}
// }

function serveOrder(item:chaiOrder|string){
    if(isChaiOrder(item)){
        return `serving ${item.type} chai with ${item.sugar} sugar`
    }
    return `serving custom chai: ${item}`
}


type MasalaChai = {type:"masala";spicelevel:number};
type GingerChai = {type:"ginger"; spicelevel:number}


type chai = MasalaChai | GingerChai;


function Makechai(order:chai){
    switch(order.type){
        case "ginger":
            return `ginger chai`
        case "masala":
            return `ginger`
    }

}


function brew(order:MasalaChai | GingerChai){
    if("spicelevel" in order){
        //
    }
}


// function isStringArray(arr:unknown):arr is string[]{

// }