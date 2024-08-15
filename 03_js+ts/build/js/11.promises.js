"use strict";
//callback hell
function color(name, delay, callback) {
    setTimeout(() => {
        console.log(name);
        if (callback)
            callback();
    }, delay);
}
// color("gex", 2000, () => {
//   color("tim", 2000, () => {
//     color("jake", 2000, () => {});
//   });
// });
// creating promises to avoid the callback hell
function doSomething(num) {
    const internetSpeed = Math.ceil(Math.random() * 10);
    return new Promise((resolve, reject) => {
        if (internetSpeed > 5) {
            resolve(`process ${num} done`);
        }
        else {
            reject("slow speed");
        }
    });
}
// doSomething(1)
//   .then((result) => {
//     console.log(result);
//     return doSomething(2);
//   })
//   .then((r) => {
//     console.log(r);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
//Using All
// Promise.all([
//   new Promise((resolve) => resolve(33)),
//   new Promise((resolve) =>
//     setTimeout(() => {
//       resolve(22);
//     }, 0)
//   ),
//   Promise.resolve(12),
// ]).then((values) => console.log(values));
// Using allSettled
// Promise.allSettled([
//   Promise.resolve(33),
//   Promise.reject(new Error("an error")),
//   new Promise((resolve) => setTimeout(() => resolve(66), 0)),
//   99,
// ]).then((values) => console.log(values));
// Promise.allSettled([]).then((results) => console.log(results));
//Using any
// Promise.any([
//   Promise.reject(12),
//   new Promise((resolve) => setTimeout(() => resolve(2), 0)),
//   new Promise((resolve, reject) => setTimeout(() => reject(12), 1)),
// ]).then((result) => console.log(result));
Promise.race([
    Promise.reject(12),
    new Promise((resolve) => setTimeout(() => resolve(2), 0)),
    new Promise((resolve, reject) => setTimeout(() => reject(12), 1)),
]).then((result) => console.log(result));
