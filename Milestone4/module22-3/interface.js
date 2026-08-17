"use strict";
const user1 = {
    name: "User1",
    email: "user123@gmail.com",
    phoneNumber: 3532244949,
};
const user2 = {
    name: "User 2",
    email: "user321@gmail.com",
    phoneNumber: 4343434343434,
};
const team = [
    user1,
    user2,
    { name: "User3", email: "user231@gmail.com", phoneNumber: 43564645454 },
];
console.log(team);
function newUser(user) {
    console.log(user.name);
    console.log(user.email);
    console.log(user.phoneNumber);
}
newUser({ name: "user4", email: "user132@gmail.com", phoneNumber: 434345454 });
console.log("=========================");
function addUser({ name, email, phoneNumber }) {
    console.log(name);
    console.log(email);
    console.log(phoneNumber);
}
addUser(user2);
