let name = "Piyas";
let age = 21;

function myFun(myName, myAge) {
  myName = "Ahmed";
  myAge = 34;
  //   console.log(myName, myAge);
}
myFun(name, age);

// console.log(name, age);

const studetn = {
  name: "Ahmed",
  age: 45,
};

function fun2(obj) {
  obj.name = "Piyas";
  obj.age = 21;
  console.log(obj);
}

fun2(studetn);

console.log(studetn);
