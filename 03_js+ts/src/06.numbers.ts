//Exponential notation of numbers

console.log(1e2);
console.log(174e-1);

console.log(Number("12"));
console.log(typeof Number("12"));

console.log(Number.MAX_VALUE);

console.log(Number(123n));
// console.log(+123n); can't be done

console.log(Number.isFinite(1 / 0));
console.log(Number.isInteger(0.23));
console.log(Number.parseFloat("0.23snsn"));
console.log(Number.parseInt("s23"));
console.log(Number.isSafeInteger(2 ** 52));
console.log(Number.MAX_SAFE_INTEGER);

let num1 = 2;
console.log(num1.toExponential(2));
console.log(num1.toFixed(5));
// console.log(num1.toPrecision(100));

//Math

console.log(Math.floor(22.3));
console.log(Math.ceil(22.3));
console.log(Math.sqrt(4));
console.log(Math.round(22.5));
console.log(Math.abs(-2));
console.log(Math.min(11, 2, 3, 11, 33, 222, 1));
console.log(Math.max(11, 2, 3, 11, 33, 222, 1));

// Q-Generate random number between 1 to 6

function rollDice() {
  return Math.floor(Math.random() * 6);
}

console.log(rollDice());
6;

//Date in js

const newDate = new Date();

console.log(Date.now());

// normal representation of date is yyyy-mm-dd hh:mm:ss

const newDate2 = new Date(2024 - 12 - 12);
console.log(newDate2);
