"use strict";
//Let's create the function which tales the function
function greet(fn) {
    return fn("hello");
}
function tell(input) {
    console.log(input);
}
var DF1 = function (arg) { };
DF1.description = "does the job";
//Generics in typescript
function firstElement(input) {
    for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
        var item = input_1[_i];
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
        return new Date("".concat(timeStampsOrm, ":").concat(d).concat(y));
    }
}
// Calling this in function
var user = {
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
var adminArr = function (dbGetter, filterCallback) {
    return dbGetter().filter(filterCallback);
};
var filterCallback = function (input) {
    return input.admin;
};
//below function execution return the array with the  user which are admin
// console.log(adminArr(getDb, filterCallback));
function makeError() {
    throw new Error("this is sample error");
}
// using rest parameter in function
function takeNumbers() {
    var input = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        input[_i] = arguments[_i];
    }
}
//destructuring in the function parameter
function testDest(_a) {
    var _b = _a.a, a = _b === void 0 ? 1 : _b, _c = _a.b, b = _c === void 0 ? 1 : _c, _d = _a.c, c = _d === void 0 ? 1 : _d;
}
function testDest2(_a) {
    var _b = _a === void 0 ? { a: 0, b: 0, c: 0 } : _a, a = _b.a, b = _b.b, c = _b.c;
}
var testVoid1 = function () {
    return 1;
};
