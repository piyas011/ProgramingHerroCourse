// Scope -> Globalscope, block scope , function scope

if (true) {
  let variable1 = "Hello let ";
  const variable2 = "Hello const";
  var variable3 = "Hello var";
}

// console.log(variable1);  Error
// console.log(variable2); Error
console.log(variable3);

variable1 = "helo";
variable2 = "hi";
variable3 = "This is chang";

console.log(variable3);
// console.log(variable2); Error
// console.log(variable1);  Error

var name1;
let name2;
// const name3; Error

name1 = "Piyas";
name2 = "HEllo";
// name3 = "hello3";  Error

console.log(`
    ${name1} ${name2} ${name3}`);
