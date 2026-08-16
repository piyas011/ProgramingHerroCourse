"use strict";
const hello = {
    name: "Student1",
    age: 21,
    roll: 201,
};
const team = [
    hello,
    {
        name: "student2",
        age: 21,
        roll: 455,
    },
];
function printStudent(student) {
    console.log(student.name);
    console.log(student.age);
    console.log(student.roll);
}
printStudent({ name: "Joban", age: 23, roll: 12 });
