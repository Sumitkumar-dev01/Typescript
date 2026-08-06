function wrapInArray<T>(item:T):T[]{
    return [item]
}
//if you pass integer, then you will get array of string.
// if you pass integer , then you will get array of an integer. 

wrapInArray("masala")
wrapInArray(22)
wrapInArray({flavor:"Ginger"})

function pair<A,B>(a:A,b:B){
    return [a,b]
}

pair("masala","test")
pair("masala",{flavour:"ginger"})




interface Box<T>{
    content:T
}

interface ApiPromise<T>{
    status:number,
    data:T
}

const res:ApiPromise<{flavour:string}>={
    status:200,
    data:{flavour:"masala"}
}