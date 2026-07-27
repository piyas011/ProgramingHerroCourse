{
  /**
   * using the vs code debugger
   */
  function findAverage(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
    let average = total / numbers.length;
    return average;
  }
  //   console.log(findAverage([10, 20, 30]));
}

{
  //   function findAverage(numbers) {
  //     let total = 0;
  //     for (const num of numbers) {
  //       total += num;
  //     }
  //     let average = total / numbers.length;
  //     return average;
  //   }
  //   console.log(findAverage([10, 20, 30]));
}
{
  //   function sumEvenNumber(numbers) {
  //     let total = 0;
  //     for (let i = 0; i < numbers.length; i++) {
  //       if (numbers[i] % 2 === 0) {
  //         total += numbers[i];
  //       }
  //     }
  //     return total;
  //   }
  //   console.log(sumEvenNumber([20, 61, 15, 80]));
}

let total = 0;

for (let i = 1; i <= 5; i++) {
  total += i;
}

console.log(total);
