"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var executer = new Promise(function (resolve, reject) {
    //   console.log(1);
    resolve("2");
});
// console.log(3);
var promiseArr = [executer, executer, executer];
// Promise.all(promiseArr).then((res) => console.log(res));
Promise.allSettled(__spreadArray(__spreadArray([], promiseArr, true), [Promise.reject("failed")], false)).then(function (res) {
    //   console.log(res);
});
var pErr = new Promise(function (resolve, reject) {
    reject("Always fails");
});
var pSlow = new Promise(function (resolve, reject) {
    setTimeout(resolve, 500, "Done eventually");
});
var pFast = new Promise(function (resolve, reject) {
    setTimeout(resolve, 100, "Done Quick");
});
Promise.any([pErr, pSlow, pFast]).then(function (res) {
    console.log(res);
});
Promise.race([pErr, pSlow, pFast])
    .then(function (res) {
    console.log(res);
})
    .catch(function (err) { return console.log(err); });
Promise.resolve().then(function () { return console.log(1); });
setTimeout(function () {
    console.log(2);
}, 100);
queueMicrotask(function () {
    console.log(3);
    queueMicrotask(function () { return console.log(4); });
});
console.log(5);
