/**
 *  Problem 1 : Add Grade to each student (without chang Original)
 * you have an array of student objects, each with name and marks, Create a new array where every student also has a "grade" field, based of their marks, the original array must stay exactly the same
 *
 *
 * Grading rule :
 * marks >= 90 --> "A+"
 * marks >= 80 --> "A"
 * marks >= 60 --> "B"
 * below 60    --> "Fail"
 *
 *
 * Input :
 * [
 * {name : "Piyas Ahmed, mark : 99"},
 * {name : "Habib Ahmed, mark : 45}
 * ]
 *
 * Output :
 * [
 * {name : "Piyas Ahmed,mark : 99,grade : "A+"},
 * {name : "Habib Ahmed , mark : 45, grade: "Fail},
 * ]
 *
 */
const studentResult = [
  { name: "Piyas Ahmed ", mark: 99 },
  { name: "Habib Ahmed ", mark: 45 },
  { name: "Rohim Ahmed ", mark: 85 },
];

const addGrade = (students) => {
  // Convert Student marks to grade
  const getGrade = (mark) => {
    if (mark >= 90) {
      return "A+";
    } else if (mark >= 80) {
      return "A";
    } else if (mark >= 60) {
      return "B";
    } else {
      return "Fail";
    }
  };

  const modifiedStudentArray = students.map((student) => {
    // console.log(student);
    const { name, mark } = student;
    // console.log(name, mark);
    const newArray = { name, mark, grade: getGrade(mark) };
    return newArray;
  });
  return modifiedStudentArray;
};

console.log(addGrade(studentResult));
console.log("Main array", studentResult);

console.log("+++++++++++++++++++++++++++++++++++++++++++++++");

/**
 * Cart total calculator
 *
 * you have an array of cart items, each with a name , price,and qty calculator
 * 1. total number of items in the cart (sum of all qty)
 * 2. total cost (sum of price x qty for each item)
 *
 * Them print final message using a template string:
 * "Total : x Item , Y taka"
 *
 * INPUT :
 * [
 * {name:"Pen",price:100,qty:1}
 * {name:"Notebook",price:100,qty:2}
 * ]
 *
 * OUTPUT : Total : 3 items, 300 taka
 *
 * Bonus : if the cart is missing (null undefined), don't crash -
 * Print "total :0 items, 0 taka"
 */

const cart = [
  { name: "Pen", price: 100, qty: 1 },
  { name: "Notebook", price: 100, qty: 2 },
];

const calculateTotalPrice = (cart) => {
  let totalPrice = 0;
  let totalQty = 0;

  if (!cart) {
    return `Total ${totalQty} items ${totalPrice} Taka`;
  }

  // console.log(cart);
  for (const product of cart) {
    const { price, qty } = product;
    totalQty += qty;
    totalPrice += price * qty;
  }
  return `Total ${totalQty} Item ${totalPrice} Taka, `;
};

console.log(calculateTotalPrice(cart));
console.log(calculateTotalPrice([]));
