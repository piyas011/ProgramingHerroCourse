const fruits = ["apple", "banana", "orange"];

const numbers = [23, 34, 56, 67, 78, 89, 89];

let sum = numbers.reduce((accumuletor, element, index, array) => {
  return accumuletor + element;
}, 0);

console.log(sum);

let multi = numbers.reduce((acc, element) => {
  return acc * element;
}, 1);
console.log(multi);
