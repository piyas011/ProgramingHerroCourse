interface Student {
  name: string;
  age: number;
  roll: number;
}

const hello: Student = {
  name: "Student1",
  age: 21,
  roll: 201,
};

const team: Student[] = [
  hello,
  {
    name: "student2",
    age: 21,
    roll: 455,
  },
];

function printStudent(students: Student): void {
  console.log(students.name);
  console.log(students.age);
  console.log(students.roll);
}

printStudent({ name: "Joban", age: 23, roll: 12 });

function displayStudents({ name, age, roll }: Student) {}
