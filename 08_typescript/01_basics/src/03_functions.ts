//Let's create the function which tales the function

function greet(fn: (input: string) => void) {
  return fn("hello");
}

function tell(input: string) {
  console.log(input);
}

// greet(tell);

//call signatures

type DescribableFunction = {
  (input: string): void;
  description: string;
};
interface DescribableFunction2 {
  (input: string): void;
}

const DF1: DescribableFunction = (arg: string) => {};
DF1.description = "does the job";

//Construct signature

type SomeConstructor = {
  new (input: string): Date;
};

//Generics in typescript

function firstElement<T>(input: T[]) {
  for (let item of input) {
    console.log(item);
  }
}

//inference

function mapItem<Input, Output>(
  arr: Input[],
  callback: (item: Input) => Output
) {
  return arr.map(callback);
}

//Constraints

function FirstElem<Type extends { length: number }>(arr1: Type, arr2: Type) {
  if (arr1.length > arr2.length) {
    return arr1;
  } else {
    return arr2;
  }
}

//Create the generic which accept the type when we want't to be explicit

function combine<Type>(arr1: Type[], arr2: Type[]) {
  return arr1.concat(arr2);
}

// console.log(combine<number | string>([1, 2, 4], ["tim"]));

//Q-create generic function for filter function of array

function filterArr<Type>(arr: Type[], callback: (input: Type) => boolean) {
  return filterArr(arr, callback);
}

//Q-make the function which takes  overload first number second three number and return the data

function makeDate(timeStamps: string): Date;

function makeDate(m: string, d: string, y: string): Date;
function makeDate(timeStampsOrm: string, d?: string, y?: string): Date {
  if (d === undefined && y === undefined) {
    return new Date(timeStampsOrm);
  } else {
    return new Date(`${timeStampsOrm}:${d}${y}`);
  }
}

// Calling this in function

const user = {
  name: "Ganesh",
  admin: false,
  becomeAdmin: function () {
    this.admin = true;
  },
};

// let's say we have having array of user object and we want to filter it out based on they are admin or not

function getDb(): (typeof user)[] {
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

type User = typeof user;

const adminArr = (
  dbGetter: () => User[],
  filterCallback: (input: User) => boolean
) => {
  return dbGetter().filter(filterCallback);
};

const filterCallback = (input: User) => {
  return input.admin;
};

//below function execution return the array with the  user which are admin
// console.log(adminArr(getDb, filterCallback));

function makeError(): never {
  throw new Error("this is sample error");
}

// using rest parameter in function

function takeNumbers<T>(...input: T[]) {}

//destructuring in the function parameter

function testDest({
  a = 1,
  b = 1,
  c = 1,
}: {
  a?: number;
  b?: number;
  c?: number;
}) {}

function testDest2(
  { a, b, c }: { a: number; b: number; c: number } = { a: 0, b: 0, c: 0 }
) {}

//void in typescript

type TestVoid = () => void;

const testVoid1: TestVoid = () => {
  return 1;
};
