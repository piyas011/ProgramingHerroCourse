// how to declare function
function firstFunction() {}

function divide(num1, num2) {
  const result = num1 / num2;
  console.log(`divide result : ${result}`);
}

// how to call a function
firstFunction();
// how to deal with parameter
divide(454, 34);

// how to deal with return.
function doMath(a, b) {
  const sum = a + b;
  return sum;
}
const resultSum = doMath(30, 5);
console.log(resultSum);

console.log("=============================");

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

let resultEven = isEven(40);
console.log(`is Even "${resultEven}"`);

console.log("=============================");

function isOdd(number) {
  if (number % 2 !== 0) {
    return false;
  } else {
    return true;
  }
}
const isOddResult = isOdd(45);
console.log(`Is Odd Number : "${isOddResult}"`);
