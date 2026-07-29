const college = {
  name: "vnc",
  address: "baily road",
  students: 800,
  events: ["21 feb", "Independence day", "VIctory Day"],
  people: {
    conunt: 200,
    principal: {
      name: "Mr Hello World",
      yearsOfExperince: 25,
      degree: "English",
    },
  },
};

console.log(college.people.principal.degree);
console.log(college["people"]["principal"]["degree"]);
college.events[2] = "Eid Ul Adha";
console.log(college.events[2]);

const keys = Object.keys(college);
const values = Object.values(college);

console.log(keys);
console.log(values);
console.log(Object.entries(college));
