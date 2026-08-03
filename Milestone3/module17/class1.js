// Primitive data type
// string number, boolean , undefined , null symgol bigint ;

let name = "Piyas ";
let age = 32;
let isMerried = false;
let salaty = undefined;
let result = null;
// console.log(
//   typeof name,
//   typeof age,
//   typeof isMerried,
//   typeof salaty,
//   typeof result,
// );

// non prinitive data type
// array , object , function

let student = {
  name: "Piyas",
};
let student2 = student;
let arr = [43, 46, 67, 78];
function add(a, b) {
  return a + b;
}

// console.log(typeof student, typeof arr, typeof add);

// let name = "Piyas Ahmed";
let name2 = name;
// console.log(name2);
name2 = "Ahmed";
// console.log(name2);
// console.log(name);

// console.log(student2);
student2.name = "Ahemd";

// console.log(student.name);

const obj = {
  fullName: "Piyas Ahmed",
  age: 21,
  isMerried: false,
};
const obj2 = { obj };
console.log(obj2);

// console.log(obj2);
// obj2.isStudent = true;
// console.log(obj2);
// console.log(obj);

// console.log(arr);
// let arr2 = arr;
// arr2.push(2000);
// console.log(arr);
// console.log(arr2);

// let arr3 = [...arr];
// console.log(arr3);
// arr2.push(1000);
// console.log(arr3);

// console.log(arr);
let arr2 = [...arr];
arr.push(1000);
console.log(arr);
// console.log(arr2);
console.log(arr2);
