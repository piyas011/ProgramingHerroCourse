/*
  name
  age
  email
  marks 
 */

class Student {
  name: string;
  age: number;
  email: string;
  mark: number;

  constructor(name: string, age: number, email: string, mark: number) {
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
