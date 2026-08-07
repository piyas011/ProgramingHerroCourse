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
