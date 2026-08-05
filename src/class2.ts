/**
 * Enums or  Enumeration 
 * const INITIALISED = "initialised"
 * Ticket ["initialized", "cancelled","resolved","pending"]; 
 * ti.status == "resolved"
 */



enum TicketStatus {
    INITIALISED = "initialised",
    CANCELLED = "cancelled",
    PENDING = "pending",
    CLOSED = "closed"
}
console.log(TicketStatus.INITIALISED); 
console.log(TicketStatus.CANCELLED); 
console.log(TicketStatus.PENDING); 
console.log(TicketStatus.CLOSED)

const Ticket = {
    id: 1, 
    title: "new ticket", 
    status: TicketStatus.INITIALISED
}
if(Ticket.status == TicketStatus.INITIALISED){
    console.log("done")
} 
 
enum StatusCodes {
    NotFound = 404, 
    Success =  200,
    Accepted = 202, 
    Created = 201, 
    BadRequest = 400 
}

const response = {
    url: "www.something.com",
    type: "get", 
    data: "something", 
    status: StatusCodes.Success
} 

console.log(response)










const result = {
    name: "sumit",
    marks: 98
}

// the type of the above raw object is inffered as {name: string,marks: number}
// something like the given object below.

// const result : {name : string, marks: number, address?:string} = {
//     name: "Sumit",
//     marks: 98
// }
console.log(result); 

// updating an old key value pair 
result.marks = 99; // do you think ts will allow this?
 
// adding a new key value pair  
// result.address = "xyz" // do you think ts will allow this?


/**
 * Now the above statement will throw a compiler error because in the type {name: string,marks: number}
 * we never mentioned anything about any address. 
 * that's why ts thinks we are violating the default type. 
 * to solve this we can add an additional optional address property while defining the object. 
 *  const result: {name: string, marks:number, address?: string} = {
 * name: "sumit",
 * marks: 45
 * }
 */
      









type Details = {name: string,marks: number, address?: string}; 
// Details is kind of like an alias or a nickname to {name: string,marks: number, address?: string}


const result1: Details = {
    name: "sumit",
    marks: 98
}

const result2 : Details = {
    name: 'Rahul',
    marks: 99
}

  









/**
 * assignment: 
 * we want to define a common type for authentication forms 
 * this common type will take multiple parameters
 * name of the form 
 * how to handle submission of the form 
 * how to handle reset of the form 
 * what should be the text of the submitting button 
 */


interface AuthForm{
    name: string,
    submitButtonText: string,
    onReset: (e:any) => void,
    onSubmit: (e:any) => void
}

const loginForm: AuthForm = {
    name: "Login form",
    submitButtonText: 'Login',
    onReset: (e)=>{
        //some implementation
    },
    onSubmit:(e)=>{
        // some implementation
    }
}

console.log(loginForm); 








// types vs interface 

type text = string;
 
type stringArray = string[]; 
// using an interface we will define an object which will be always having keys 
// of the types number and value to be of the type of the array 


interface numberArray {
    [index: number]: number
} 


// let's say we want to define a pair or a triplet or a custom tuple(set of x values)
type pair = [number,number]; 
type triplet = [number,number,number]; 

interface pairInterface {
    first: number,
    second: number
}

// can type and interfaces represent function?


   