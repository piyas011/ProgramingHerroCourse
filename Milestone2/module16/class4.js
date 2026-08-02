// Spread and rest Operaton

let numbers = [34, 45, 56, 67, 200];
// console.log(numbers);
// console.log(...numbers);

let maxNumber = Math.max(...numbers);
let minNumber = Math.min(...numbers);

// console.log(maxNumber);
// console.log(minNumber);

let numbers2 = [...numbers, 34, 45, 56, 67, 78];
numbers.push(2300);

// console.log(numbers);
// console.log(numbers2);

let students1 = {
  name: "Piyas Ahmed",
  age: 21,
};

let students2 = { ...students1, gpa: "5.0" };
students1.roll = 5443;

// console.log(students2);

// Rest Operator

function sum(a, b, c, ...restNumbers) {
  let sum = 0;
  for (const num of restNumbers) {
    sum += num;
  }
  console.log(restNumbers);
  return a + b + c + sum;
}
console.log(sum(3, 4, 5, 45, 56, 76, 78, 65, 8, 60));
