// Array Methods => ES6

// // for loop

// let array = [2, 3, 4, 5, 6, 7];
// let dbl = [];
// for (let i = 0; i < array.length; i++) {
//   dbl.push(array[i] * 2);
// }

// console.log(array);
// console.log(dbl);

// //  while loop
// let array = [2, 3, 4, 5, 6, 7];
// let dbl = [];
// let i = 0;
// while (i < array.length) {
//   dbl.push(array[i] * 2);
//   i++;
// }

// console.log(array);
// console.log(dbl);

// // do while loop
// let array = [2, 3, 4, 5, 6, 7];
// let dbl = [];
// let i = 0;
// do {
//   dbl.push(array[i] * 2);
//   i++;
// } while (i < array.length);
// console.log(array);
// console.log(dbl);

// // for of loop
// let array = [2, 3, 4, 5, 6, 7];
// let dbl = [];
// for (const num of array) {
//   dbl.push(num * 2);
//   //   console.log(num);
// }

// console.log(array);
// console.log(dbl);

////// Map method

// let array = [2, 3, 4, 5, 6, 7];

// const dbl = array.map((ele) => ele * 2);

// console.log(array);
// console.log(dbl);

//////forEach method

// const rolls = [23, 34, 45, 56, 67, 8];

// rolls.forEach((ele, i, a) => {
//   console.log(ele, i, a);
// });

// /////filter method

// let numbers = [45, 56, 78, 89, 85, 365, 68, 89, 675, 45];

// let bigNumber = numbers.filter((e) => e >= 100);
// console.log(bigNumber);

// /////find method

// let numbers = [45, 56, 78, 89, 85, 365, 68, 89, 675, 45];

// let bigNumber = numbers.find((e) => e >= 100);
// console.log(bigNumber);

// let phones = [
//   {
//     mobule: "iphone 15",
//     price: 10000,
//   },
//   {
//     mobule: "iphone 16",
//     price: 130000,
//   },
//   {
//     mobule: "iphone 17",
//     price: 140000,
//   },
//   {
//     mobule: "iphone 18",
//     price: 150000,
//   },
//   {
//     mobule: "iphone 19",
//     price: 16000,
//   },
// ];

// // console.log(products);

// let expensivePhones = phones.filter((phone) => phone.price >= 50000);
// console.log(expensivePhones);

// let students = [
//   {
//     name: "Piyas",
//     roll: 34,
//   },
//   {
//     name: "Piyas",
//     roll: 30,
//   },
//   {
//     name: "Piyas",
//     roll: 36,
//   },
//   {
//     name: "Piyas",
//     roll: 38,
//   },
//   {
//     name: "Piyas Ahmed",
//     roll: 31,
//   },
//   {
//     name: "Piyas",
//     roll: 33,
//   },
// ];

// let me = students.find((me) => me.roll === 31);
// console.log(me);
