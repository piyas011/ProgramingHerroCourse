/**
 *   Problem 1 : fix the Scope Bug
 *   ReWrite wuing let to fix the output.
 *

var status = "Order Placed";

for (var i = 1; i <= 3; i++) {
  var status = "Processing Item" + i;
  console.log(status);
}
console.log("Final Status :", status);

*/

let status = "Order Placed";
for (let i = 1; i <= 3; i++) {
  let status = `Processing Item ${i}`;
  console.log(status);
}

console.log(`Final Status : ${status}`);

console.log("-----------------------------------");

/**
 *  Problem 2 : receipt Ganerator (Template Strings)
 * Build a receipt generator using template strings -take item name, price, qty as input,output formatted multiline receipt.
 *
 * example : Input ("Pen",20,3) -> Output "Pen x3 = 60 taka"
 */

const receiptGanerator = (name, price, qty) => {
  return `${name} x${qty} = ${price * qty} Taka `;
};
console.log(receiptGanerator("Pen", 20, 3));
