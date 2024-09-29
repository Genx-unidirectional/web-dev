"use strict";
//Let's create the function which tales the function
function greet(fn) {
    return fn("hello");
}
function tell(input) {
    console.log(input);
}
const DF1 = (arg) => { };
DF1.description = "does the job";
//Generics in typescript
function firstElement(input) {
    for (let item of input) {
        console.log(item);
    }
}
//inference
function mapItem(arr, callback) {
    return arr.map(callback);
}
//Constraints
function FirstElem(arr1, arr2) {
    if (arr1.length > arr2.length) {
        return arr1;
    }
    else {
        return arr2;
    }
}
//Create the generic which accept the type when we want't to be explicit
function combine(arr1, arr2) {
    return arr1.concat(arr2);
}
// console.log(combine<number | string>([1, 2, 4], ["tim"]));
//Q-create generic function for filter function of array
function filterArr(arr, callback) {
    return filterArr(arr, callback);
}
function makeDate(timeStampsOrm, d, y) {
    if (d === undefined && y === undefined) {
        return new Date(timeStampsOrm);
    }
    else {
        return new Date(`${timeStampsOrm}:${d}${y}`);
    }
}
// Calling this in function
const user = {
    name: "Ganesh",
    admin: false,
    becomeAdmin: function () {
        this.admin = true;
    },
};
// let's say we have having array of user object and we want to filter it out based on they are admin or not
function getDb() {
    return [
        {
            name: "Ganesh",
            admin: false,
            becomeAdmin: function () {
                this.admin = true;
            },
        },
        {
            name: "gex",
            admin: true,
            becomeAdmin: function () {
                this.admin = true;
            },
        },
        {
            name: "Ganesh",
            admin: false,
            becomeAdmin: function () {
                this.admin = true;
            },
        },
        {
            name: "rex",
            admin: true,
            becomeAdmin: function () {
                this.admin = true;
            },
        },
    ];
}
const adminArr = (dbGetter, filterCallback) => {
    return dbGetter().filter(filterCallback);
};
const filterCallback = (input) => {
    return input.admin;
};
//below function execution return the array with the  user which are admin
// console.log(adminArr(getDb, filterCallback));
function makeError() {
    throw new Error("this is sample error");
}
// using rest parameter in function
function takeNumbers(...input) { }
//destructuring in the function parameter
function testDest({ a = 1, b = 1, c = 1, }) { }
function testDest2({ a, b, c } = { a: 0, b: 0, c: 0 }) { }
const testVoid1 = () => {
    return 1;
};
