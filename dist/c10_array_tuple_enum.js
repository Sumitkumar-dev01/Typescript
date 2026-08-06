"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chaiFlavours = ["masala", "adrak"];
const chaiPrice = [10, 20];
const rating = [4.5, 5.0];
const menu = [
    { name: "Masala", price: 15 },
    { name: "Adrak", price: 25 }
];
const cities = ["delhi", "patna"];
const table = [
    [1, 2, 3],
    [4, 5, 6]
];
let chaiTuple;
chaiTuple = ["masala", 20];
let userInfo;
userInfo = ["sumit", 100, true];
const location = [28.66, 32.22];
const chaiItems = ["masala", 25];
var CupSize;
(function (CupSize) {
    CupSize[CupSize["SMALL"] = 0] = "SMALL";
    CupSize[CupSize["MEDIUM"] = 1] = "MEDIUM";
    CupSize[CupSize["LARGE"] = 2] = "LARGE";
})(CupSize || (CupSize = {}));
const size = CupSize.MEDIUM;
var Status;
(function (Status) {
    Status[Status["PENDING"] = 100] = "PENDING";
    Status[Status["SERVED"] = 101] = "SERVED";
    Status[Status["CANCELLED"] = 102] = "CANCELLED"; // 102
})(Status || (Status = {}));
var ChaiType;
(function (ChaiType) {
    ChaiType["MASALA"] = "masala";
    ChaiType["GINGER"] = "ginger";
})(ChaiType || (ChaiType = {}));
function makeChai(type) {
    console.log(`making: ${type}`);
}
makeChai(ChaiType.GINGER);
var RandomEnum;
(function (RandomEnum) {
    RandomEnum[RandomEnum["ID"] = 1] = "ID";
    RandomEnum["NAME"] = "CHAI";
})(RandomEnum || (RandomEnum = {}));
var Sugars;
(function (Sugars) {
    Sugars[Sugars["LOW"] = 1] = "LOW";
    Sugars[Sugars["MEDIUM"] = 2] = "MEDIUM";
    Sugars[Sugars["HIGH"] = 3] = "HIGH";
})(Sugars || (Sugars = {}));
let t = ["chai", 10];
t.push("extra");
