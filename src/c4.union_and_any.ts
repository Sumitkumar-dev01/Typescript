let subs : number | string = "1M"

let apiRequest: "pending"|"suceess"|"error" = "pending"; 
apiRequest = "suceess"

let airlineSeat: "aisle"|"window"|"middle" = "aisle"; 

airlineSeat = "aisle"

const orders = ['12','20','42','98']

let currentOrder ; 

for(let order of orders){
    if(order === '28'){
        currentOrder = order
        break
    }
}

console.log(currentOrder)