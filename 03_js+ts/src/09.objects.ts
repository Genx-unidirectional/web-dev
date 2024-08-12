const obj2 = {
  name: "ganesh",
  age: 22,
};
const obj3 = obj2;
for (let [item, value] of Object.entries(obj2)) {
  //   console.log(item, value);
}

// console.log(Object.is(obj2, obj3));
// console.log(Object.hasOwn(obj2, "age"));
// console.log(Object.freeze(obj2));
// console.log(Object.isFrozen(obj2));
Object.preventExtensions(obj2);

const obj4 = {
  case: "first",
  active: false,
};

const obj5 = Object.assign(obj4, { a: "A", b: "B" });

// console.log(Object.is(obj5, obj4));

// console.log(Object.fromEntries([["name", "tim"]]));

interface Grief {
  lock: boolean;
  stage: string;
  walk: () => void;
}
const obj6: Grief = {
  lock: false,
  stage: "third",
  walk() {
    console.log(`walk please`);
  },
};

const obj7: Grief = Object.create(obj6);
// console.log(Object.keys(obj6));
// console.log(Object.keys(obj7));
// console.log(obj7.stage);

// console.log(Object.is(obj6, obj7));

//Q1: find maximum character appear in the string

function maxChar(str: string) {
  const charRecord: { [index: string]: number } = {};
  let maxChar = "";
  let count = 0;
  for (let char of str) {
    charRecord[char] = charRecord[char] ? ++charRecord[char] : 1;
  }
  for (let [item, value] of Object.entries(charRecord)) {
    if (count < value) {
      count = value;
      maxChar = item;
    }
  }
  return maxChar;
}

console.log(maxChar("artbbcccceeenooonnnnn"));

//Q2: Check given pair of string are anagram of each other
//example ["safety! rail!","fairy tales"] ==>true
//example ["coding money", money coding] ==>true
//only consider capital letters| exclude punctuation and spaces
//basically anagram means number of count of all distinct

function clearStr(str: string) {
  return str.replaceAll(/[\W]/g, "").split("").sort().join("");
}

function checkAnagram(str1: string, str2: string) {
  return clearStr(str1) === clearStr(str2);
}

console.log(checkAnagram("safety! rail!", "fairy tales"));
s;
