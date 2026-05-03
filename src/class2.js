/**
 * Enums or  Enumeration
 * const INITIALISED = "initialised"
 * Ticket ["initialized", "cancelled","resolved","pending"];
 * ti.status == "resolved"
 */
var TicketStatus;
(function (TicketStatus) {
    TicketStatus["INITIALISED"] = "initialised";
    TicketStatus["CANCELLED"] = "cancelled";
    TicketStatus["PENDING"] = "pending";
    TicketStatus["CLOSED"] = "closed";
})(TicketStatus || (TicketStatus = {}));
console.log(TicketStatus.INITIALISED);
console.log(TicketStatus.CANCELLED);
console.log(TicketStatus.PENDING);
console.log(TicketStatus.CLOSED); 
var Ticket = {
    id: 1,
    title: "new ticket",
    status: TicketStatus.INITIALISED
};
if (Ticket.status == TicketStatus.INITIALISED) {
    console.log("done");
}
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["Created"] = 201] = "Created";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
var response = {
    url: "www.something.com",
    type: "get",
    data: "something",
    status: StatusCodes.Success
};
console.log(response);
var result = {
    name: "sumit",
    marks: 98
};
// the type of the above raw object is inffered as {name: string,marks: number}
// something like the given object below.
// const result : {name : string, marks: number, address?:string} = {
//     name: "Sumit",
//     marks: 98
// }
console.log(result);
// updating an old key value pair 
result.marks = 99; // do you think ts will allow this?
// Details is kind of like an alias or a nickname to {name: string,marks: number, address?: string}
var result1 = {
    name: "sumit",
    marks: 98
};
var result2 = {
    name: 'Rahul',
    marks: 99
};
var loginForm = {
    name: "Login form",
    submitButtonText: 'Login',
    onReset: function (e) {
        //some implementation
    },
    onSubmit: function (e) {
        // some implementation
    }
};
console.log(loginForm);
