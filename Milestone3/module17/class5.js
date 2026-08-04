// callBack Function

function registerStrudnt(cb) {
  console.log("User Is Registering. Need more date.");

  return cb();
  //   console.log(cb);
}

function userBasicInfo() {
  let student = {
    name: "Piyas Ahmed",
    age: 21,
    roll: 12,
  };
  return student;
  //   console.log(student);
}

// console.log(registerStrudnt(userBasicInfo));

// console.log("============================");

// function calculator(a, b, cb) {
//   let sum = a + b;
//   cb(sum);
// }

// function displyResult(result) {
//   console.log(result);
// }

// calculator(1, 1, displyResult);

function add(a, b, cb) {
  let result = a + b;
  return cb(result);
}

add(2, 2, showResult);

function showResult(result) {
  console.log(result);
}
