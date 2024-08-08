"use strict";
// console.log(x); //cannot do this because variable is has to be declared even though it's a var it get's hoisted  but not get declared
var x = 10;
const y = 10;
// y = 12; cannot redeclare  because it's a constant
//PRIMITIVE DATA TYPES
let a1 = true;
let a2 = 12;
let a3 = "gex";
let a4 = undefined;
let a5 = null;
let a6 = Symbol("description");
let a7 = 1234n;
// function foo() {
//   var v1 = 34;
// }
// console.log(v1);
// above shit does not work
// let t = 12;
// {
//   console.log(t); // here we get reference error because the block scope variable t is not initialized and it is used before ot's declaration
//   let t = 33;
// }
//Data Conversion
// console.log(23 * "3"); //here javascript does not convert number into string but at some places it does
// we can use parseInt to convert string into number
console.log(parseInt("101", 2)); // here 101 is binary number is with radix of 2 so binary conversion of 101 is 5
//we can use urinary operator to convert string into number
console.log(+"102");
console.log(+102);
//Array literals
console.log(["fish", , "goat"]);
const fish = ["fish", , "goat"];
console.log(fish[1]);
console.log(fish.length);
const obj = {
    jump() {
        return "jump";
    },
};
obj.jump();
