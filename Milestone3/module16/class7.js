const user = {
  name: "Piyas Ahmed",
  age: 21,
  "my address": "Mirpur",
  somthing: [34, 56, 67, 7889, 34],
  company: {
    name: "Progtaming hero",
    address: {
      location: "mirpur dohs",
    },
  },
};

const user2 = {
  name: "Piyas Ahmed",
  age: 21,
  "my address": "Mirpur",
  somthing: [34, 56, 67, 7889, 34],
};

// console.log(user.company.address.location);
// console.log(user2.company);
// console.log(user2?.company?.address?.location);

// const key = "company";
// console.log(user[key]);
// console.log(user["my address"]);

// Object

// for (const key in user) {
//   console.log(key, user[key]);
// }

const keys = Object.keys(user);
const values = Object.values(user);
const entries = Object.entries(user);

// console.log(keys);
// console.log(values);
// console.log(entries);

// for (const key of keys) {
//   console.log(key);
// }

for (const element of entries) {
  const [key, values] = entries;
  console.log(key, values);
}
