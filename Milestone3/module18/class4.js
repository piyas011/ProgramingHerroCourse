/**
  Problem 1 : Nested response Extractor
  Extract specific fields from a nested API-  Link response object using destructuring,  with renaming + default value.
  Example : {user: {name:"Piyas",age : 21}} -> extract name as userName, default age 18 if missing
  */

const user = {
  student: {
    name: "Piyas Ahmed",
    age: 32,
  },
};

const responseExtractor = (userObj) => {
  const {
    student: { name: userName, age = 18 },
  } = userObj;

  return { userName, age };
};

console.log(responseExtractor(user));

console.log("=====================================");

/*
 Problem 2 : swop and rest extractor
 swop two variable and extract first/rest element from an array using destructuring,no temp variable.
*/

let a = 10;
let b = 20;

[b, a] = [a, b];
console.log(a, b);

const array = [10, 20, 30, 40, 50, 60];
let [first, ...rest] = array;

console.log(first, rest);
console.log(...array);
