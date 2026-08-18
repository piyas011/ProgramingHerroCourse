const piyasAhmed = {
  name: "Piyas Ahmed",
  age: 21,
  email: "apiyas221@gmail.com",
};

const createStudent = (name: string, age: number, email: string) => {
  const obj = { name, age, email };
  return obj;
};

const piyas = createStudent("Piyas", 21, "apiyas221@gmail.com");

console.log(piyas);
