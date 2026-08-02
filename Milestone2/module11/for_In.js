const numbers = [12, 23, 34, 45, 56, 67, 68];
for (const num of numbers) {
  console.log(num);
}

const student = {
  name: "Piyas",
  id: 227825,
  age: 21,
  favSubjects: ["physice", "math", "chemistry"],
};

for (const key in student) {
  //   console.log(student[key]);
  const value = student[key];
  console.log(key, " =", value);
}
