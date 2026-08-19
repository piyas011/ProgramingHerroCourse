const piyasAhmed = {
  name: "Piyas Ahmed",
  age: 21,
  email: "apiyas221@gmail.com",
};

const createStudent = (
  name: string,
  age: number,
  email: string,
  marks: number,
) => {
  const obj = {
    name,
    age,
    email,
    marks,
    forgarePass() {
      // somthing
    },
  };
  return obj;
};

const piyas = createStudent("Piyas", 21, "apiyas221@gmail.com", 100);
piyas.marks = 0;
const rohim = createStudent("Rohim", 20, "rohim@gmail.com", 200);

console.log(piyas, rohim);

const myName: string = "Piyas Ahmed";

function createStudent2(name: string, age: number, gpa: number, email: string) {
  const student = { name, age, gpa, email };
  return student;
}

let piyasA = createStudent2("Piyas Ahmed", 21, 4.5, "@gmail.com");
let ahmed = createStudent2("ahmed", 20, 4.9, "Hello@gmail.com");

console.log(piyasA);
console.log(ahmed);
