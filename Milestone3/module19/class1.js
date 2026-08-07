/**
 * Problem 1 : discount Applier
 * 
 * applyDiscount(prices,rate) - apply a discount % to every price in the array and return  a new array. The ORIGINAL Prices array must stay Exactly the same.

Input : 
Prices = [500,1000,250];
rate = 10;


OutPut ; [450,900,225];

*/

const priceArray = [500, 1000, 250];
const discount = 10;

const applyDiscount = (prices, discount = 0) => {
  console.log(prices, discount);

  const newPrices = prices.map((price) => {
    let discountAmount = (price * discount) / 100;
    return price - discountAmount;
  });
  return newPrices;
};
console.log(applyDiscount(priceArray, discount));
console.log(priceArray);

console.log("==========================================");

/**
 * Problem 2 : passing students Filter
 * getPassingStudents(students,threshold) - return only the students whose marks are grater than of equal to the given threshold.
 *
 * Input : student = [
 *  {name : "Piyas Ahmed",marks : 90},
 *  {name : "Rohim Ahmed",marks : 60},
 *  {name : "Rakib Ahmed",marks : 40},
 * ]
 */

const threshold = 60;
const students = [
  { name: "Piyas Ahmed", marks: 90 },
  { name: "Rohim Ahmed", marks: 60 },
  { name: "Rakib Ahmed", marks: 40 },
];

const getPassingStudents = (students, threshold) => {
  //   console.log(students, threshold);
  const passStudents = students.filter((student) => {
    if (student.marks >= 60) {
      return true;
    } else {
      return false;
    }
  });
  return passStudents;
};

console.log(getPassingStudents(students, threshold));
