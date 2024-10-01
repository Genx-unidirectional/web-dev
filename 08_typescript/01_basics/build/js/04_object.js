"use strict";
// We can create interface or type signature for object
var p1 = {
    name: "ganesh",
    age: 22,
};
function info(person) {
    return person.name;
}
var stud1 = {
    name: "Ganehs",
    class: "undergrad",
};
var p2 = {
    name: "lex",
    class: "A",
};
var p3 = p2;
//Excessive type checking
var area2 = function (shape) {
    return {
        color: shape.color || "white",
        area: shape.width ? Math.pow(shape.width, 2) : 1,
    };
};
var stringBox = {
    box: "tim",
};
var numberBox = {
    box: 12,
};
function addContent(boxer, content) {
    return (boxer.box = content);
}
var contentObj = {
    box: {
        content: "good",
    },
};
var contentObj2 = {
    box: "",
};
// console.log(addContent(contentObj2, "lol"));
