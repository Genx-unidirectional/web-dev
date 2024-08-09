// we can declare function as anonymous see l=below

const factorial = function (n: number): any {
  return n < 2 ? 1 : n * factorial(n - 1);
};

console.log(factorial(3));

//making a map function
function mapIt<input, output>(
  callback: (item: input) => output,
  arr: input[]
): output[] {
  const mapedArr: output[] = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    mapedArr[i] = callback(arr[i]);
  }
  return mapedArr;
}

const arr1 = mapIt((item: number) => item * 2, [1, 2, 3, 4]);

// we can use functions before they being made in the code because funtions are hoited
console.log(square(12));
function square(x: number) {
  return x * x;
}

//Making the function which ca iterate over the dom tree recursively

function walkTree(node: HTMLElement) {
  if (node === null) {
    return;
  }
  for (let i = 0; i < node.childNodes.length; i++) {
    walkTree(node.childNodes[i] as HTMLElement);
  }
}

//basically the recursive function used stack also but doing this manually requires complex code

function foo(i: number) {
  if (i < 0) {
    return;
  }
  console.log(`here i is ${i}`);

  foo(i - 1);
  console.log(`here i is  ${i}`);
}

foo(3);

//closures

function outside(x: number) {
  function inside(y: number) {
    return x + y;
  }
  return inside;
}

const fninside = outside(3);

console.log(fninside(4));
console.log(outside(4)(10));

// we can nest multiple functions inside each other and they can still have access to the outer function even though it too outside means outermost function in 4 functions chained together

function A(x: number) {
  function B(y: number) {
    function C(z: number) {
      console.log(x + y + z);
    }
    C(3);
  }
  B(2);
}

A(1);

//when there is name conflicts the function prefers it's own variable name rather than outer most function

function outer2(x: number) {
  function inner(x: number) {
    return x * 2;
  }

  return inner;
}

console.log(outer2(10)(12));

const createPet = function (name: string) {
  let sex: string;
  const pet = {
    setName(newName: string) {
      name: newName;
    },
    getName() {
      return name;
    },
    getSex() {
      return sex;
    },

    changeSex(newSex: string) {
      if (
        newSex.toLocaleLowerCase() === "male" ||
        newSex.toLocaleLowerCase() === "female"
      ) {
        sex = newSex;
      }
    },
  };
  return pet;
};

const pet1 = createPet("vivie");
console.log(pet1.getName());
pet1.changeSex("female");
console.log(pet1.getSex());

//using argument object

function concatStr(separator: string) {
  let result = "";

  for (let i = 1; i < arguments.length; i++) {
    result += arguments[i] + separator;
  }
  return result.slice(0, -separator.length);
}
//@ts-ignore
console.log(concatStr(",", "hello", "done", "silly"));

// we also have arrow function

const sum1 = (a: number) => a * 12;
//@ts-ignore
const sum = (a) => a * 12;
