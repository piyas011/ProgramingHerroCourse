console.log("===================================");
{
  // Problem 1

  const number = 42;
  function evenOddChack(num) {
    if (num % 2 === 0) {
      return "Even Number";
    } else {
      return "Odd Number";
    }
  }
  const isNumber = evenOddChack(number);
  console.log(` ${number} is ${isNumber}`);
}
console.log("===================================");
{
  // Problem 2
  function sumRange(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
      sum += i;
    }
    return sum;
  }

  console.log(`Total sum = ${sumRange(10)}`);
}
console.log("===================================");
{
  // Problem 3 | Factorial of a number
  const number = 5;
  function getFactorialNumber(number) {
    let result = 1;
    for (let i = 1; i <= number; i++) {
      result *= i;
    }
    return result;
  }
  const factorialNumber = getFactorialNumber(number);
  console.log(` The Factorial Number Of ${number} = ${factorialNumber}`);
}

console.log("===================================");
{
  /**
   * Problem 4 | FizzBuzz (1 to n)
   * Loop through Number from 1 to n . If a number is divisible by 3, Print "Fizz", if divisible by 5, Print "Buzz"; if divisible by both. Print "FizzBuzz"; otherwise print the number itself.
   */

  let nNumber = 100; //use prompt();
  function divisibleCheck(n) {
    let result;
    for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        result = "FizzBuzz";
      } else if (i % 3 === 0) {
        result = "Fizz";
      } else if (i % 5 === 0) {
        result = "Buzz";
      } else {
        result = i;
      }
      console.log(result);
    }
  }
  divisibleCheck(nNumber);
}
console.log("===================================");
{
  /**
   *  Problem 5 | Reverse a String
   */

  const isString = "Hello this is a String Type";
  function reverseString(str) {
    return str.split("").reverse().join("");
  }
  const result = reverseString(isString);
  console.log(`Main String => ${isString}`);
  console.log(`Reverse String => ${result}`);
}
console.log("===================================");
