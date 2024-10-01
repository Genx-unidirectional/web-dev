"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Base = /** @class */ (function () {
    function Base() {
    }
    Base.prototype.greet = function () {
        console.log("hello people");
    };
    return Base;
}());
var Derived = /** @class */ (function (_super) {
    __extends(Derived, _super);
    function Derived() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Derived.prototype.greet = function (name) {
        if (name === undefined) {
            _super.prototype.greet.call(this);
        }
        else {
            console.log("hello ".concat(name));
        }
    };
    return Derived;
}(Base));
var AnimalBase = /** @class */ (function () {
    function AnimalBase(animal) {
        this.resident = animal;
    }
    return AnimalBase;
}());
var Dog = /** @class */ (function () {
    function Dog(animal) {
        this.resident = animal;
    }
    return Dog;
}());
// Access modifier
var Base2 = /** @class */ (function () {
    function Base2(name, age, active) {
        this.name = name;
        this.age = age;
        this.active = active;
        this.name = name;
        this.age = age;
        this.active = active;
    }
    return Base2;
}());
//Create the class which can tell how many times it invokes
var Incremental = /** @class */ (function () {
    function Incremental(purpose, time) {
        this.purpose = purpose;
        this.time = time;
        this.purpose = purpose;
        this.time = time;
        this.id = ++Incremental.count;
    }
    Incremental.prototype.getCount = function () {
        return Incremental.count;
    };
    Incremental.count = 0;
    return Incremental;
}());
// const IncrementalTest1 = new Incremental("to test", 1);
// const IncrementalTest2 = new Incremental("to test", 1);
// const IncrementalTest3 = new Incremental("to test", 1);
// console.log(IncrementalTest3.id);
//Super keyword
var Base3 = /** @class */ (function () {
    function Base3() {
        this.k = 12;
    }
    return Base3;
}());
var Derived3 = /** @class */ (function (_super) {
    __extends(Derived3, _super);
    function Derived3() {
        var _this = _super.call(this) || this;
        _this.k = 12;
        return _this;
    }
    return Derived3;
}(Base3));
var Base4 = /** @class */ (function () {
    function Base4(name, age, customer) {
        this.name = name;
        this.age = age;
        this.customer = customer;
        this.age = age;
        this.name = name;
        this.customer = customer;
    }
    return Base4;
}());
var Derived4 = /** @class */ (function (_super) {
    __extends(Derived4, _super);
    function Derived4(name, age, customer) {
        return _super.call(this, name, age, customer) || this;
    }
    return Derived4;
}(Base4));
