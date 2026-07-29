const student = {
  name: "Piyas Ahmed",
  batch: "Web Dev batch 14 PH",
  roll: "Ph-2321",
  acrive: true,
};

const car = {
  nodel: "BMW",
  color: "Black",
  price: 2500000,
};
console.log(car);
console.log(car.nodel);

const person = {
  name: "Rohim Mia",
  profession: "student",
  age: 21,
  isSigle: true,
};

console.log(person["name"]);
console.log(person.age);

console.log("=========================================");
{
  const person = {
    name: "Piyas ",
    age: 21,
    isStudent: true,
    isSingel: true,
    "home Address": "Netrokona",
  };
  console.log(person.name);
  person.name = "Piyas Ahmed";
  console.log(person.name);
  console.log(person.age);
  person.age = 20;
  console.log(person.age);
  console.log(person.isStudent);
  person.isStudent = false;
  console.log(person.isStudent);
  console.log(person.isSingel);

  console.log(person["name"]);
  console.log(person["age"]);
  console.log(person["isSingel"]);
  console.log(person["isStudent"]);
  console.log(person["home Address"]);
}
