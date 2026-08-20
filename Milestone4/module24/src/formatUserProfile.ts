// type User = {
//   name: string;
//   age: number;
//   city: string;
// };

// interface User {
//   name: string;
//   age: number;
//   city: string;
// }

// const formatUserProfile = (user: User): string => {
//   return ` ${user.name} is ${user.age} years old and lives in ${user.city}`;
// };

// console.log(formatUserProfile({ name: "Piyas", age: 21, city: "Dhaka" }));

type User = {
  name: string;
  age: number;
  city: string;
};

const formatUserProfile = (user: User) => {
  return `${user.name}  is ${user.age} years old and lives in ${user.city}`;
};

console.log(formatUserProfile({ name: "Piyas Ahmed", age: 21, city: "Dhaka" }));
