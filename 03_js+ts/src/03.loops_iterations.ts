let i1 = 0;
do {
  if (i1 <= 5) {
    i1++;
    continue;
  }
  console.log(i1);
  i1++;
} while (i1 <= 10);
let x1 = 0;
let z = 0;
labelCancelLoops: while (true) {
  console.log("Outer loops:", x1);
  x1 += 1;
  z = 1;
  while (true) {
    console.log("Inner loops:", z);
    z += 1;
    if (z === 10 && x1 === 10) {
      break labelCancelLoops;
    } else if (z === 10) {
      break;
    }
  }
}

//we can use continue with labels also
let i2 = 0;
let j = 10;
checkiandj: while (i2 < 12) {
  i2 += 1;
  checkj: while (j > 4) {
    j -= 1;
    if (j % 2 === 0) {
      continue checkj;
    }
    console.log(`j is odd here value is ${j}`);
  }
}

const obj1 = {
  name: "ganesh",
  age: 12,
  skill: "loading",
};

for (let i in obj1) {
  console.log(`${obj1[i as keyof typeof obj1]} , property name  is ${i}`);
}

//for of loop

const arr = [3, 5, 7];
//@ts-ignore
arr.foo = "hello";

for (const i in arr) {
  console.log(i);
}
// "0" "1" "2" "foo"

for (const i of arr) {
  console.log(i);
}
// Logs: 3 5 7

for (let [prop, value] of Object.entries(obj1)) {
  console.log(prop, value);
}
//Key point : for ...in loop iterate over user define properties but for ...of didn't
