interface User {
  name: string;
  email: string;
  phoneNumber: number;
}

const user1: User = {
  name: "User1",
  email: "user123@gmail.com",
  phoneNumber: 3532244949,
};

const user2: User = {
  name: "User 2",
  email: "user321@gmail.com",
  phoneNumber: 4343434343434,
};

const team: User[] = [
  user1,
  user2,
  { name: "User3", email: "user231@gmail.com", phoneNumber: 43564645454 },
];
console.log(team);

function newUser(user: User): void {
  console.log(user.name);
  console.log(user.email);
  console.log(user.phoneNumber);
}

newUser({ name: "user4", email: "user132@gmail.com", phoneNumber: 434345454 });

console.log("=========================");

function addUser({ name, email, phoneNumber }: User): void {
  console.log(name);
  console.log(email);
  console.log(phoneNumber);
}

addUser(user2);
