// js default parameters

// function greet(name) {
//   return `Hello, ${name}`;
// }

// console.log(greet("Piyas"));

function greet(name = "user") {
  return `Hello, ${name}`;
}

console.log(greet());
console.log(greet("Piyas"));

function makecoffee(suger = 1) {
  return `Coffe is prepared with ${suger} spoon suger`;
}

console.log(makecoffee(5));
