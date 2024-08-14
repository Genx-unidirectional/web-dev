"use strict";
//Classes
//Description:
// 1-With classes we define the structure of the object and methods that object has
//2-We can also define static methods that can be used using the class name
//3-We also attach the getter and setter in classes
function Myobj(name, age) {
    this.name = name;
    this.age = age;
}
Myobj.prototype.greet = function () {
    console.log(this.name);
};
const p1 = new Myobj("gex", 22); //bad code
function Employee(name, age, ethics) {
    Myobj.call(this, name, age);
    this.age = age;
    this.ethics = ethics;
    this.name = name;
}
Employee.prototype = Object.create(Myobj.prototype);
//Manually setting the constructor because constructor of employee points towards Myobj's constructor
Employee.prototype.constructor = Employee;
Employee.prototype.work = function () {
    console.log("do some work");
};
//Let's make object using classes
const MyClass = class MyClassLongerName {
};
// new MyclassLongerName(); won't work
new MyClass();
class Color {
    #value;
    constructor(r, g, b, a = 1) {
        this.#value = [r, g, b];
    }
    checkDifference(another) {
        if (!(#value in another)) {
            throw TypeError("color instance expected");
        }
        return this.#value[0] - another.#value[0];
    }
    get values() {
        return this.#value;
    }
    toString() {
        return `${this.#value.join(",")}`;
    }
}
// create function to set the color in array of RGB values also make alpha in that array which is private
class ColorWithAlpha extends Color {
    #alpha;
    constructor(r, g, b, a) {
        super(r, g, b);
        this.#alpha = a;
    }
    setAlpha(customAlpha) {
        if (customAlpha < 0 || customAlpha > 1) {
            throw RangeError("Invalid alpha value");
        }
        this.#alpha = customAlpha;
    }
    toString() {
        return `${super.toString()},${this.#alpha}`;
    }
}
const myColors = new ColorWithAlpha(222, 2, 34, 1);
const myColors2 = new ColorWithAlpha(39, 25, 222, 0.2);
// console.log(myColors.setAlpha(2));
// console.log(myColors.checkDifference(myColors2));
// console.log(new ColorWithAlpha(255, 222, 33, 0.4).toString());
//using typescript with classes
class MakeReadonly {
    name;
    age; // we can keep the uninitialized fields using !
    constructor(name) {
        this.name = name;
    }
    changeName(newName) {
        // this.name = newName; //can't be done
    }
}
class Base {
    k = 12;
}
class Derived extends Base {
    constructor() {
        super();
        console.log(this.k);
    }
    static {
        //we can write the code here which going to be executed as this class is declared
        // console.log("hello");
    }
}
const testDerived = new Derived();
class Street {
    width;
    name;
    constructor(width, name) {
        this.width = width;
        this.name = name;
    }
    damaged() {
        if (this.name === 69) {
            return "damaged";
        }
        else {
            return "good";
        }
    }
}
const newStreet = new Street(12, 69);
// console.log(newStreet.damaged());
//Legal way to to derived the base class
class Base2 {
    greet() {
        console.log("hello");
    }
}
class Derived2 extends Base2 {
    greet(name) {
        if (name) {
            console.log(`welcome ${name}`);
        }
        else {
            super.greet();
        }
    }
}
class AnimalHouse {
    resident;
    constructor(animal) {
        this.resident = animal;
    }
}
class Dog extends AnimalHouse {
    constructor(dog) {
        super(dog);
    }
}
//Access modifiers
class AccessTest {
    name;
    active;
    language;
    constructor(name, active, language) {
        this.name = name;
        this.active = active;
        this.language = language;
        this.name = name;
        this.active = active;
        this.language = language;
    }
    getActive() {
        return this.active;
    }
}
const accessOne = new AccessTest("tim", false, "russian");
// console.log(accessOne["language
class DerivedAccess extends AccessTest {
    constructor(name, active, language) {
        super(name, active, language);
    }
    getAnother() {
        return this["active"]; //typescript failed here so instead using the private modifier we use # to make the field private
    }
}
//handling this in classes
class TestHandler {
    name = "tim";
    getName() {
        return this.name;
    }
}
// class Derived3 extends TestHandler {
//   getName(name?: string) {
//     // super.getName();
//     if (name === undefined) {
//       return;
//     } else {
//       this.getName();
//     }
//   }
// }
const handlerInstance = new TestHandler();
const handlerObj = {
    name: "andrew",
    getName: handlerInstance.getName,
};
console.log(handlerObj.getName());
class TestHandler2 {
    name = "jake";
    getName = () => {
        return this.name;
    };
}
const handlerInstance2 = new TestHandler2();
const handlerObj2 = {
    name: "talisman",
    getName: handlerInstance2.getName,
};
console.log(handlerObj2.getName());
class Box {
    contents = "";
    set(value) {
        // (method) Box.set(value: string): this
        this.contents = value;
        return this;
    }
}
class ClearableBox extends Box {
    clearBox() {
        this.contents = "";
    }
}
const a = new ClearableBox();
const b = a.set("box1");
//let's see the visibility of this keyword
class Box2 {
    content = "";
    sameAs(other) {
        return this.content === other.content;
    }
}
class Derived4 extends Box2 {
    otherContents = "";
}
const box2Instance = new Box2();
const derived4Instance = new Derived4();
// console.log(derived4Instance.sameAs(box2Instance));
//Above throws type error because all the contents inside derived class should present in the base class
// this based type guards
class FilePath {
}
class Networked {
}
class FileSystemObject {
}
