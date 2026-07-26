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
