var x = 12;
{
  var x = 33;
}
// console.log(x) prints 33

// In above code var x is re-declared because they both lie in same scope which is global scope

//falsy values

let a8 = false;
let a9 = 0;
let a10 = undefined;
let a11 = null;
let a12 = "";
let a13 = NaN;

//using switch statements

switch (x) {
  case 12:
    console.log("its 12");
    break;
  case 13:
    console.log("it's 13");
    break;
  default:
    console.log("nothing matchs");
}

//always use console.error() for error messages
try {
  //   throw new Error("some error occurred");
} catch (err) {
  console.error(err);
}

// we can use finally block while handling the error because this block always executed before return statement in the catch block

function textError() {
  try {
    console.log(1);
    throw "bogus";
  } catch (err) {
    console.log(2);
    //below return statement is suspended until finally block is executed
    return false;
  } finally {
    console.log(3);
    return false;
  }
}

console.log(textError());
