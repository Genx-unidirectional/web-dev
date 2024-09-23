//Q-1: Find sum all natural numbers from 1 to n

function sum(n: number) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// console.log(sum(3));

//Q-2:Sum of digits of numbers

function sumOfDigits(n: number) {
  let sum = 0;
  let carry = n;
  for (let i = 0; i < n.toString().length; i++) {
    sum += carry % 10;
    carry = Math.floor(carry / 10);
  }
  return sum;
}

// console.log(sumOfDigits(53));

//Q-3:Count the number of digits of the number

function countDigits(num: number) {
  num = Math.abs(num);
  let count = 0;
  do {
    count++;
    num = Math.floor(num / 10);
  } while (num > 0);
  return count;
}

// console.log(countDigits(12345));

//Q-4:Check if number is palindrome

function checkPalindrome(num: number) {
  let copyNum = num,
    reversedNum = 0;
  do {
    const lastDigit = copyNum % 10;
    reversedNum = reversedNum * 10 + lastDigit;
    copyNum = Math.floor(copyNum / 10);
  } while (copyNum > 0);
  return reversedNum === num;
}

// console.log(checkPalindrome(12121));

//Q-4:Find fibonacci of n number
/*
What is fibonacci number?
fibonacci of 0 =0,1=1 ,2 = 1, 3 = 2,4=3 ,5=5,6=8
the general formula we get from this is fib(n) = fib(n-1)+fib(n-2)
*/

// function fib(n: number): any {
//   if (n == 0) {
//     return 0;
//   }
//   if (n == 1) {
//     return 1;
//   }
//   return fib(n - 1) + fib(n - 2);
// }

// console.log(fib(6));
// console.log(fib(5));

//using loops to solve this

function fib(n: number) {
  if (n < 2) {
    return n;
  }
  let prev = 0,
    curr = 1,
    next: number;
  for (let i = 0; i < n; i++) {
    next = prev + curr;
    prev = curr;
    curr = next;
  }
  //@ts-ignore
  return next;
}

// console.log(fib(5));

//  Q-6: Missing Number in an Array
// Given an array nums containing n distinct numbers in the range [0, n],
// return the only number in the range that is missing from the array.

function findMissingNum(arr: number[]) {
  // if sum all numbers in array  in specified range - actual sum of numbers in array is answer
  let sum = 0;
  let actualSum = 0;
  for (let item of arr) {
    sum += item;
  }
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    actualSum += i;
  }
  return actualSum - sum;
}

console.log(findMissingNum([1, 2, 3, 4, 6, 7, 8, 9]));
