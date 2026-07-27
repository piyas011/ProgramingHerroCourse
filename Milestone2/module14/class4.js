{
  /**
   * Problem 1 | getLastTwo(arr)
   * purpose : should return the Last 2 elements of the array as a new array
   *
   */

  const array = [
    34, 45, 56, 67, 78, 89, 90, 98, 87, 76, 65, 54, 43, 32, 34343, 4545454,
  ];

  function getLastTwo(arr) {
    return arr.slice(arr.length - 2, arr.length);
  }
  console.log(getLastTwo(array));
}
console.log("=================================");
{
  /**
   * Problem 2 : findIndexOfValue(arr,target)
   * Purpose ; should return the index of target inside arr, of -1 if nor found
   * Expected : findIndexOfValue([23,34,45,56],23) =>> 0
   */
  function findIndexOfValue(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i;
      }
    }
    return -1;
  }

  const result = findIndexOfValue([23, 34, 45, 56], 56);
  console.log(result);
}
console.log("=================================");
{
  /**
   * Problem 2 : averageOfPositives(arr);
   * Purpose : should return the average of only the positive Number in array;
   */

  function averageOfPositives(arr) {
    let sumOfPositiveNumber = 0;
    let positiveCount = 0;
    let averageNumber;
    for (const num of arr) {
      if (num > 0) {
        positiveCount++;
        sumOfPositiveNumber += num;
      }
    }

    averageNumber = sumOfPositiveNumber / positiveCount;
    return averageNumber.toFixed(2);
  }
  console.log(averageOfPositives([10, 20, 30, 40]));
}
