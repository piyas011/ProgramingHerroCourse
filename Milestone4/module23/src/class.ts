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

class Student {
  name: string;
  age: number;
  email: string;
  marks: number;

  // constructor --> special method
  constructor(name: string, age: number, email: string, mark: number) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.marks = mark;
  }
}

const piyas = new Student("Piyas", 21, "apiyas221@gmail.com", 100);
const she = new Student("Prity", 20, "prity@gmail.com", 200);
console.log(piyas, she);
