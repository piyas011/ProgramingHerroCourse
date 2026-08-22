"use strict";
/*
  name
  age
  email
  marks
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    name;
    age;
    email;
    mark;
    constructor(name, age, email, mark) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.mark = mark;
    }
}
// instantiate
// instance
const piyas = new Student("Piyas Ahmed", 21, "Piyas@piyas.com", 100);
const prity = new Student("Prity", 20, "prity@prity.com", 200);
console.log(piyas);
console.log(prity);
//# sourceMappingURL=class.js.map