"use strict";
const arr2 = new Array(2);
const arr3 = Array(2);
const arr4 = [2, 3, 4];
//how typescript works with arrays
const arr5 = [1, 2, 4, 5];
let arr6 = [12, true, "ganesh"];
let arr7 = [12, true, "ganesh"];
// arr7 = arr6 this can be done
// arr6 = arr7 this can't be done
// arr5.forEach((item) => console.log(item));
const arr8 = [1, 2];
arr8.length = 5;
delete arr8[0];
// console.log(arr8);
//array instance methods
const arr9 = [1, 2, 3, 4];
//mutating methods
// console.log(arr9.fill(10, 1, 2));
// console.log(arr9.copyWithin(1, 0, -1));
// console.log(arr9.shift());
// console.log(arr9.unshift(2));
// console.log(arr9.push(2));
// console.log(arr9.pop());
// console.log(arr9.reverse());
// console.log(arr9.splice(2, 1, 10));
// console.log(arr9);
const arr10 = [34, 44, 2222, 43, 22];
// console.log(arr10.sort((a, b) => a - b));
// every, map,filter,some,forEach
// console.log([[1, 2, 3], 2].flat());
// Q1: Make array in such way that adjacent of it will be twice of it
// console.log([1, 2, 3].flatMap((item) => [item, item * item]));
// console.log([1, 2, 3].find((item) => item === 2));
// console.log([1, 2, 3].findIndex((item) => item === 2));
// console.log([1, 2, 3, 2].findLast((item) => item === 2));
// console.log([1, 2, 3, 2].findLastIndex((item) => item === 2));
// console.log([1, 2, 3].join(""));
// console.log([1, 2, 3].reduce((acc, curr) => acc + curr, 12));
// console.log([1, 2, 3].reduceRight((acc, curr) => acc + curr, 12));
// console.log([1, 2, 3].slice(0, 2));
//Q2: create sequence generator
function range(start, stop, step) {
    return Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + step * i);
}
// console.log(range(3, 6, 2));
//Difference between making array using Array.of
const arr11 = Array.of(1);
// console.log(arr11);
const arr12 = Array(1);
// console.log(arr12);
//Q3: find largest number in array with only positive numbers
function findLargest(arr) {
    let largestNum = 0;
    for (let i of arr) {
        if (i > largestNum) {
            largestNum = i;
        }
    }
    return largestNum;
}
// console.log(findLargest([22, 3, 221, 322, 2333]));
// Q4: write function which returns longest string in array
function findLargestStr(arr) {
    let largestStr = "";
    for (let i of arr) {
        if (i.length > largestStr.length) {
            largestStr = i;
        }
    }
    return largestStr;
}
// console.log(findLargestStr(["ganesh", "tim", "billythetim"]));
// Q5: write function to count number of vowels in string argument
function countVowels(str) {
    let vowels = ["a", "e", "i", "o", "u"];
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
// console.log(
//   countVowels(
//     "jim tried to go the school but he failed because he drop his school bag in gutter!"
//   )
// );
// Q6: create a new array whose elements are the uppercase versions of the words present in the original array
function createUppercase(arr) {
    return arr.map((item) => item[0].toUpperCase() + item.slice(1));
}
// console.log(createUppercase(["jake", "logan"]));
// Q- write a function called doubleAndReturnArgs that accepts an array and a variable number of arguments, and returns a new array with the original array values and all of the additional arguments doubled
function doubleAndReturnArgs(arr1, ...arr2) {
    return arr1.concat(arr2.map((item) => item + item));
}
// console.log(doubleAndReturnArgs([1, 2, 3, 4], 5, 6, 7));
// Q-make array of chunks of given size eg, ([1,2,3,4,5,6,7,8,9,10],2) =>([[1,2],[3,4]],[5,6],[7,8],[9,10]])
function makeArrayChunk(arr, size) {
    let newArr = [];
    let i = 0;
    while (i < arr.length) {
        // newArr.push([arr[i], arr[i + 1]]);
        newArr.push(arr.slice(i, i + size));
        i += size;
    }
    return newArr;
}
// console.log(makeArrayChunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]
function spiralMatrix(n) {
    let arr = [];
    console.log("hello");
    for (let i = 0; i < n; i++) {
        arr.push(Array(n));
    }
    let RS = 0;
    let CS = 0;
    let RE = n - 1;
    let CE = n - 1;
    let count = 1;
    while (CS < CE && RS < RE) {
        for (let i = CS; i <= RE; i++) {
            arr[RS][i] = count++;
        }
        RS++;
        for (let i = RS; i <= RE; i++) {
            arr[i][CE] = count++;
        }
        CE--;
        for (let i = CE; i >= CS; i--) {
            arr[RE][i] = count++;
        }
        RE--;
        for (let i = RE; i >= RS; i--) {
            arr[i][CS] = count++;
        }
        CS++;
    }
    return arr;
}
console.log(spiralMatrix(4));
