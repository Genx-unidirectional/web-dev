"use strict";
class Base {
    greet() {
        console.log("hello people");
    }
}
class Derived extends Base {
    greet(name) {
        if (name === undefined) {
            super.greet();
        }
        else {
            console.log(`hello ${name}`);
        }
    }
}
class AnimalBase {
    constructor(animal) {
        this.resident = animal;
    }
}
class Dog {
    constructor(animal) {
        this.resident = animal;
    }
}
// Access modifier
class Base2 {
    constructor(name, age, active) {
        this.name = name;
        this.age = age;
        this.active = active;
        this.name = name;
        this.age = age;
        this.active = active;
    }
}
//Create the class which can tell how many times it invokes
class Incremental {
    getCount() {
        return Incremental.count;
    }
    constructor(purpose, time) {
        this.purpose = purpose;
        this.time = time;
        this.purpose = purpose;
        this.time = time;
        this.id = ++Incremental.count;
    }
}
Incremental.count = 0;
// const IncrementalTest1 = new Incremental("to test", 1);
// const IncrementalTest2 = new Incremental("to test", 1);
// const IncrementalTest3 = new Incremental("to test", 1);
// console.log(IncrementalTest3.id);
