function makeChai(type:string,cups:number){
    console.log(`making ${cups} of ${type}`)
}

makeChai("masala chai",5)


function getChaiPrice():number{
    return 25
}

function makeOrder(order:string){
    if(!order) return null;
    return order;
}


function logChai():void{
    console.log("chai is ready")
}

function orderChai(type:string = "masala"){
    
}

function createChai(order:{
    type:string;
    sugare:number;
    size:"small" | "large"
}):number{
    return 4
}