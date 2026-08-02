// Destructuring for array

const numbers = [10, 20, 30, 40, 50];

console.log(numbers[1]);

const [ten, twenty, , , fifty] = numbers;

console.log(ten, twenty, fifty);

// Objecr Destructuring for object

const student = {
  name: "Piyas",
  age: 21,
  roll: 34,
  marks: {
    physics: 90,
    philosophy: 98,
    math: 56,
  },
};
// const name = student.name;
// const age = student.age;
const {
  age,
  name: fullNmae,
  roll,
  marks: { math, physics },
} = student;
console.log(fullNmae, age, roll, math, physics);
