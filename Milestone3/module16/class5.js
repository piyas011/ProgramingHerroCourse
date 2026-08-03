// arrow function

// function sayGreet(name = "User") {

// }
// console.log(sayGreet());

const sayGreet = (name = "user") => `Hello ${name}, Good Morning !`;
// console.log(sayGreet("Piyas Ahmed"));

const sumFristThenMultiplyByTree = (a, b) => {
  const sum = a + b;
  const multiply = sum * 3;
  return multiply;
};

// console.log(sumFristThenMultiplyByTree(34, 34));

const sayHi = () => `Hi`;
// console.log(sayHi());

// console.log(this);

const student = {
  name: "Piyas",
  age: 21,
  showName: function () {
    console.log(this);
    return `Hello ${this.name} goodMorning`;
  },
  showAge: () => {
    return `Age : ${student.age} name : ${student.name}`;
  },
};
console.log(student.showName());
console.log(student.showAge());
