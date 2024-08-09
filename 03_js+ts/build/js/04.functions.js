"use strict";
// we can declare function as anonymous see l=below
const factorial = function (n) {
    return n < 2 ? 1 : n * factorial(n - 1);
};
console.log(factorial(3));
//making a map function
function mapIt(callback, arr) {
    const mapedArr = new Array(arr.length);
    for (let i = 0; i < arr.length; i++) {
        mapedArr[i] = callback(arr[i]);
    }
    return mapedArr;
}
const arr1 = mapIt((item) => item * 2, [1, 2, 3, 4]);
// we can use functions before they being made in the code because funtions are hoited
console.log(square(12));
function square(x) {
    return x * x;
}
//Making the function which ca iterate over the dom tree recursively
function walkTree(node) {
    if (node === null) {
        return;
    }
    for (let i = 0; i < node.childNodes.length; i++) {
        walkTree(node.childNodes[i]);
    }
}
//basically the recursive function used stack also but doing this manually requires complex code
function foo(i) {
    if (i < 0) {
        return;
    }
    console.log(`here i is ${i}`);
    foo(i - 1);
    console.log(`here i is  ${i}`);
}
foo(3);
//closures
function outside(x) {
    function inside(y) {
        return x + y;
    }
    return inside;
}
const fninside = outside(3);
console.log(fninside(4));
console.log(outside(4)(10));
// we can nest multiple functions inside each other and they can still have access to the outer function even though it too outside means outermost function in 4 functions chained together
function A(x) {
    function B(y) {
        function C(z) {
            console.log(x + y + z);
        }
        C(3);
    }
    B(2);
}
A(1);
//when there is name conflicts the function prefers it's own variable name rather than outer most function
function outer2(x) {
    function inner(x) {
        return x * 2;
    }
    return inner;
}
console.log(outer2(10)(12));
const createPet = function (name) {
    let sex;
    const pet = {
        setName(newName) {
            name: newName;
        },
        getName() {
            return name;
        },
        getSex() {
            return sex;
        },
        changeSex(newSex) {
            if (newSex.toLocaleLowerCase() === "male" ||
                newSex.toLocaleLowerCase() === "female") {
                sex = newSex;
            }
        },
    };
    return pet;
};
const pet1 = createPet("vivie");
console.log(pet1.getName());
pet1.changeSex("female");
console.log(pet1.getSex());
//using argument object
function concatStr(separator) {
    let result = "";
    for (let i = 1; i < arguments.length; i++) {
        result += arguments[i] + separator;
    }
    return result.slice(0, -separator.length);
}
//@ts-ignore
console.log(concatStr(",", "hello", "done", "silly"));
// we also have arrow function
const sum1 = (a) => a * 12;
//@ts-ignore
const sum = (a) => a * 12;
