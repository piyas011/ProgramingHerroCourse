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

{
  /**
   * Problem 4 | FizzBuzz (1 to n)
   * Loop through Number from 1 to n . If a number is divisible by 3, Print "Fizz", if divisible by 5, Print "Buzz"; if divisible by both. Print "FizzBuzz"; otherwise print the number itself.
   */

  let nNumber = 23; //use prompt();
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
  divisibleChack(nNumber);
}
