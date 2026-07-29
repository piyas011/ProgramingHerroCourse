const persone = {
  name: "Piyas",
  age: 21,
  isSingel: true,
};

delete persone.isSingel;

const keys = Object.keys(persone);
console.log(keys);

const values = Object.values(persone);
console.log(values);
console.log(typeof keys);
