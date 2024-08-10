//Arithmetic operators

console.log(2 + 3);
console.log(2 - 3);
console.log(2 / 3);
console.log(2 * 3);
console.log(2 ** 3);
console.log(+2);
console.log(-2);
// console.log("12" - 2);
// console.log("12" * 2);

//Assignment operator

// console.log(2 === 2);
let i3 = 4;
i3 += 2;
i3 -= 2;
i3 *= 2;
i3 /= 2;
// console.log(i3);

//Comparison operator
// console.log(2 > 12);
// console.log(2 < 12);
// console.log(2 >= 12);
// console.log(2 <= 12);
//Bitwise operator

//Logical operator
const func1 = (a: number, b: number) => {
  if (a === 1 && b === 1) {
    //do something
  }
};
const func2 = (a: number, b: number) => {
  if (a === 1 || b === 1) {
    //do something
  }
};

console.log(true && true); // local and return true when both are true

console.log("cat" && "dog"); // if first is true then second value is return between logical operation

console.log(false || false);
console.log(false || "tim");
console.log("tim" || false);
console.log("tim" || "jake");

const n1 = null ?? 1; // 1
const n2 = undefined ?? 2; // 2
const n3 = false ?? 3; // false
const n4 = 0 ?? 4; // 0
const n5 = "" ?? 12;

//conditional ternary operator

const n6 = false || "ganesh" ? "ganesh" : "other";
// console.log(n6);

//unary operators
interface P1 {
  name: string;
  age?: number;
}
const n7: P1 = {
  name: "Ganesh",
  age: 22,
};

delete n7.age;

const myFun = new Function("5 + 2");
const shape = "round";
const size = 1;
const fooNew = ["Apple", "Mango", "Orange"];
const today = new Date();

typeof myFun; // returns "function"
typeof shape; // returns "string"
typeof size; // returns "number"
typeof fooNew; // returns "object"
typeof today; // returns "object"
// typeof doesntExist; // returns "undefined"

//Relational operators

class Test1 {
  constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
  }
}

const A14 = new Test1("ganesh", 12);

console.log(A14 instanceof Test1);

console.log("name" in A14);
