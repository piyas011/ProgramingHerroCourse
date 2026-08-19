/**
 * name
 * age
 * email
 * marks
 * roll
 */

// class Student {
//   name: string = "Piyas Ahmed";
//   age: number = 21;
//   email: string = "apiyas221@gmail.com";
//   marks: number = 100;
//   roll: number = 227825;
// }

// instantiate
// instance
// const piyas = new Student();
// const she = new Student();
// console.log(piyas, she);

// class Student {
//   name: string;
//   age: number;
//   email: string;
//   marks: number;

//   // constructor --> special method
//   constructor(name: string, age: number, email: string, mark: number) {
//     this.name = name;
//     this.age = age;
//     this.email = email;
//     this.marks = mark;
//   }
// }

// const piyas = new Student("Piyas", 21, "apiyas221@gmail.com", 100);
// const she = new Student("Prity", 20, "prity@gmail.com", 200);
// const mushu = new Student("Mishu", 18, "mishu@gmail.com", 100);
// console.log(piyas, she, mushu);

class Student {
  name: string;
  age: number;
  mark: number;
  cgpa: number;
  isActive: boolean;

  constructor(
    name: string,
    age: number,
    mark: number,
    cgpa: number,
    isActive: boolean,
  ) {
    this.name = name;
    this.age = age;
    this.mark = mark;
    this.cgpa = cgpa;
    this.isActive = isActive;
  }
}

const student1 = new Student("Piyas", 21, 100, 2.9, false);
const student2 = new Student("Prity Akter", 20, 99, 2.8, true);

console.log(student1, student2);
