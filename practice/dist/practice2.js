"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createStudent = (name, age, email, marks) => {
    const obj = {
        name,
        age,
        email,
        forgetPass() {
            // code
        },
        marks,
    };
    return obj;
};
const piyas = createStudent("Piyas Ahmed", 21, "apiyas221@gmail.com", 100);
const prity = createStudent("Prity Akter", 20, "prity221@gmail.com", 200);
piyas.marks = 0;
prity.age = 10;
console.log(piyas);
console.log(prity);
//# sourceMappingURL=practice2.js.map