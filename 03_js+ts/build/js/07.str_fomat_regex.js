"use strict";
const str1 = new String("hello");
// console.log(str1.valueOf());
// console.log("2 + 2");
const str2 = "2 + 2";
// console.log(`${str1.valueOf()} ganesh`);
//string instance methods
const str3 = "hello ganesh";
// console.log(str3.charAt(0));
// console.log(str3.slice(0, -1));
// console.log(str3.lastIndexOf("g"));
// console.log(str3.indexOf("a"));
//Q-make the function which gives the amount of count the character appear in the string
function countChar(str, char) {
    let count = 0;
    let currentIdx = str.indexOf(char);
    while (currentIdx !== -1) {
        ++count;
        currentIdx = str.indexOf(char, currentIdx + 1);
    }
    return count;
}
// console.log(countChar(str3, "e"));
// console.log(str3.endsWith("h"));
// console.log(str3.startsWith("h"));
// console.log(str3.padEnd(str3.length + 3, "h"));
// console.log(str3.repeat(2));
// console.log(str3.substring(0, 4));
// console.log(str3.includes("h"));
// console.log(str3.split(""));
// console.log(str3.toUpperCase());
// console.log(str3.toLowerCase());
// console.log(str3.concat("tim"));
//Q2: Create function t0 check palindrome
function checkPalindrome(str) {
    return str.toLowerCase() === str.toLowerCase().split("").reverse().join("");
}
// console.log(checkPalindrome("pip"));
//Q#: Reverse the string
function reverseStr(str) {
    let newStr = "";
    for (let char of str) {
        newStr = char + newStr;
    }
    return newStr;
}
// console.log(reverseStr("demon"));
//Q4: check character at given index lowercase or not
function checkCase(str) {
    if (str.toLowerCase() === str) {
        return true;
    }
    else {
        return false;
    }
}
// console.log(checkCase("Demon"));
//Q- write javascript function to extract unique string characters from string eg,aabbrrff ans:abrf
function uniqueChar(str) {
    let newStr = "";
    for (let char of str) {
        if (newStr.includes(char)) {
            continue;
        }
        else {
            newStr += char;
        }
    }
    return newStr;
}
// console.log(uniqueChar("aabbcccdddkkkggg"));
//Internationalization using strings
//Date and timing format
const july122023 = new Date("2023-07-12");
const options = {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
};
//@ts-ignore
const americanDateTime = new Intl.DateTimeFormat("en-US", options);
// console.log(americanDateTime.format(july122023));
//
//Number formatting
const gasPrice = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 3,
});
// console.log(gasPrice.format(2343));
//Regular expressions
let str4 = "ganesh then what the time ganesh you ganesh";
//Character classes
const regex1 = /gan[a-zA-Z0-9]sh/g;
const regex2 = /gan\wsh/;
const regex3 = /gan\Wsh/;
const regex4 = /gan\dsh/;
const regex5 = /gan\Dsh/;
const regex6 = /gan[^abs]sh/;
const regex7 = /\s/;
// console.log(regex7.exec("foo boo"));
// console.log(str4.search(regex1));
// console.log(regex1.test(str4));
// const matchedStr = str4.matchAll(regex1);
// console.log(matchedStr.next().value);
// console.log(matchedStr.next().value);
// console.log(matchedStr.next().value);
// console.log(regex7.exec("foo boo"));
// console.log(regex7.exec("foo boo"));
const regex8 = /\S/;
// console.log(regex8.exec("foo boo"));
// console.log("hey\tyou");
// console.log("hey\vyou");
// console.log("hey\nyou");
// console.log("hey\fyou");
//Assertions
const regex9 = /^ganesh$/;
const regex10 = /ga{}esh/;
const regex11 = /oon\b/;
// console.log(regex11.test("moon"));
const regex12 = /oon\B/;
// console.log(regex12.test("moonas"));
const regex13 = /a(?=n)/;
// console.log(regex13.test("ganesh"));
const regex14 = /a(?!n)/;
const regex15 = /(?<=n)a/;
const regex16 = /(?<!n)a/;
//Quantifiers
const regex17 = /ga+nesh/;
// console.log(regex17.test("gaaaanesh"));
const regex18 = /ga*nesh/;
// console.log(regex18.test("gnesh"));
const regex19 = /gan?esh/;
console.log(regex19.test("ganesh"));
const regex20 = /ga{1,}nesh/;
