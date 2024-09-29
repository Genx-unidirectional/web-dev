"use strict";
// We can create interface or type signature for object
const p1 = {
    name: "ganesh",
    age: 22,
};
function info(person) {
    return person.name;
}
const stud1 = {
    name: "Ganehs",
    class: "undergrad",
};
const p2 = {
    name: "lex",
    class: "A",
};
const p3 = p2;
//Excessive type checking
const area2 = (shape) => {
    return {
        color: shape.color || "white",
        area: shape.width ? shape.width ** 2 : 1,
    };
};
const stringBox = {
    box: "tim",
};
const numberBox = {
    box: 12,
};
function addContent(boxer, content) {
    return (boxer.box = content);
}
const contentObj = {
    box: {
        content: "good",
    },
};
const contentObj2 = {
    box: "",
};
// console.log(addContent(contentObj2, "lol"));
