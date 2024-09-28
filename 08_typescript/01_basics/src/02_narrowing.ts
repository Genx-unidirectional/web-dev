//Example for narrowing the unions

function padLeft(input: string, padding: number | string) {
  if (typeof padding === "number") {
    return " ".repeat(padding) + input;
  } else {
    return padding + input;
  }
}

// console.log(null == undefined); //true
// console.log(null === undefined); //false

// console.log(Boolean("gift"));
// console.log(!!"");
// console.log("" ? "yes" : "no");

function printAll(input: string | string[] | null) {
  if (input && typeof input === "object") {
    for (let i of input) {
      console.log(i);
    }
  } else {
    console.log(input);
  }
}

//Negate the variable in checking

function mapIt(input: number[] | undefined, factor: number) {
  if (!input) {
    return input;
  }
  return input.map((item) => item * factor);
}

// Using In operator in narrowing

//Q-1:Make the two types bird and fish then use the using in operator in a function as a type guard to narrow down the type,also use them to filter the array based on bird

type Bird = {
  fly: () => void;
};
type Fish = {
  swim: () => void;
};

function doAction(livingBeing: Bird | Fish) {
  if ("swim" in livingBeing) {
    livingBeing.swim();
  } else {
    livingBeing.fly();
  }
}

//Using instanceOf operator

function giveDate(date: string | Date) {
  if (date instanceof Date) {
    return date.getTime().toString();
  }
  return date;
}

//Control flow analysis

//after the adding clauses to check the type of the variable which is union of any two type for example the string | number the availability of the second type is removed because typescript does analysis because of the clause we added to check the type if it check it's a number type then at next the type of that variable is string and there is no reachability of that variable as a number

function ops(x: number | string | boolean) {
  x = false;
  if (Math.random() < 0.5) {
    x = "tim";
  } else {
    x = 12;
  }
  return x;
}

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

const petArr = [
  {
    swim: () => {},
  },
  {
    swim: () => {},
  },
  {
    swim: () => {},
  },
  {
    fly: () => {},
  },
  {
    swim: () => {},
  },
  {
    fly: () => {},
  },
];

const fishArr = petArr.filter((item) => {
  if (isFish(item)) {
    return item;
  }
});
console.log(fishArr);

//Q-2:Use discriminated unions
type Circle = {
  kind: "circle";
  radius: number;
};

type Square = {
  kind: "square";
  length: number;
};

function area(shape: Circle | Square) {
  switch (shape.kind) {
    case "circle": {
      return Math.PI * shape.radius ** 2;
    }
    case "square": {
      return shape.length ** 4;
    }
    default: {
      const exhaustiveType = shape;
      return exhaustiveType;
    }
  }
}
