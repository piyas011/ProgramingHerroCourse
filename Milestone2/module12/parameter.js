function sayHello() {
  console.log("Hello this is a function");
}
sayHello();

function name(name) {
  console.log("Hello Mr.", name);
}
name("Piyas");
name("Rohim");

console.log("+==========================================+");

function number(num1, num2) {
  console.log(`You Have Provide Number1 :${num1} and Number2 :${num2} `);
}
number(12, 23);

console.log("+======================================+");

function add(number1, number2) {
  let sum = number1 + number2;
  return sum;
}

console.log(add(2, 3));

console.log("+=======================================+");

function sub(number1, number2) {
  let sub = number1 - number2;
  return sub;
}

console.log(sub(40, 20));

console.log("+=======================================+");

function mul(number1, number2) {
  let mul = number1 * number2;
  return mul;
}
console.log(mul(5, 5));
console.log("+=======================================+");

function sumAll(a, b, c, d) {
  let sum = a + b + c + d;
  return sum;
}
console.log(sumAll(2, 3, 4, 5));

console.log("+=======================================+");
