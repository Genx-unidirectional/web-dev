// We can create interface or type signature for object

interface Person {
  name: string;
  age: number;
}

const p1: Person = {
  name: "ganesh",
  age: 22,
};

function info(person: Person) {
  return person.name;
}

//Q-Create the interface which is schema for object having two property optional

interface Shaper {
  shape: string;
  xPos?: number;
  yPos?: number;
}

// we can make property in object readonly

interface Student {
  name: string;
  class: string;
  verified?: boolean;
}

const stud1: Student = {
  name: "Ganehs",
  class: "undergrad",
};

type Home = {
  readonly resident: {
    name: string;
    area: number;
  };
};

type People = {
  readonly name: string;
  readonly class: string;
};

type People2 = {
  readonly name: string;
  readonly class: string;
};

const p2: People2 = {
  name: "lex",
  class: "A",
};

const p3: People = p2;
// p3.class = "B" can't do this but
// p2.class = "B" which directly changes p3 because of shallow copy

//Index signatures

type Student2 = {
  [index: string]: any;
};

type ShapeInfo = {
  color?: string;
  width?: number;
};

//Excessive type checking

const area2 = (shape: ShapeInfo) => {
  return {
    color: shape.color || "white",
    area: shape.width ? shape.width ** 2 : 1,
  };
};

// let's say we have type signatures for object but we want to add more elements to it

interface ExtraElem {
  color?: string;
  width?: number;
  [paramName: string]: any;
}

//Extending types

interface ExtraElem2 extends ExtraElem {
  kind: string;
}

//Intersection types

type Test1 = {
  dimension: number;
};

type Test2 = {
  threshold: number;
};

type MatterInfo = Test1 & Test2;

// Q-Create the interface Box which is object interface which is of type string, number, boolean
//We are crating this because when function will take this object  of this interface type which has generic is in use

interface Box<T> {
  box: T;
}
const stringBox: Box<string> = {
  box: "tim",
};

const numberBox: Box<number> = {
  box: 12,
};

function addContent<Type>(boxer: Box<Type>, content: Type) {
  return (boxer.box = content);
}

type StringContent = {
  content: string;
};

const contentObj: Box<StringContent> = {
  box: {
    content: "good",
  },
};

const contentObj2: Box<string> = {
  box: "",
};

// console.log(addContent(contentObj2, "lol"));
