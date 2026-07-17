//////////////////////////////////////
// task 1

let price1 = 400;
let price2 = 564;

if (price1 == price2) {
  console.log(price1, "=", price2, "equal");
} else {
  console.log("Price1 and Price2 do not same");
}

if (price1 === price2) {
  console.log("The price of the two is the same.");
} else {
  console.log("price do not same");
}

if (price1 != price2) {
  console.log(`Right`);
} else {
  console.log("rong");
}

//////////////////////////////////////////////////////
// Task 2
if ("5" == 5) {
  console.log(true);
} else {
  console.log(false);
}

if ("5" === 5) {
  console.log(true);
} else {
  console.log(false);
}

// Task 3/////////////////
let isRaining = false;
if (isRaining) {
  console.log("Take an umbrella");
} else {
  console.log("Not Raining");
}

// Task 4//////////////
let stock = 100;
if (stock <= 0) {
  console.log(`Out of stock`);
} else {
  console.log(`Stock = ${stock} Pcs`);
}

// Task 5 //////////
let number = 20;
if (number >= 0) {
  console.log(`${number} = Positive`);
} else {
  console.log(`${number} = Negtive`);
}
// Task 6 /////////////
let year = 2026;
if (year % 4 === 0) {
  console.log(`${year} leap year`);
} else {
  console.log(`${year} Not leap year`);
}

// Task 7 ////////////////////////////
let speedLimit = 80;
let speed = 100;

if (speed > speedLimit) {
  console.log(`${speed} Overspeeding`);
} else {
  console.log(`${speed} Normal speed.`);
}

// Task 8 //////////////////
let age = 21;
let hasTicket = true;

if (age >= 18 && hasTicket) {
  console.log("Entry allowed");
} else {
  console.log(`No Entry`);
}

// Task 9 ////////////////
const isWeekend = true;
const isHolidey = false;
if (isHolidey || isWeekend) {
  console.log(`No work today`);
} else {
  console.log(`Work day`);
}

// Task 10 ////////////////
let userName = "piyas221";
let password = "hello";

if (userName === "piyas221" && password === "hello") {
  console.log(`Login Successfull`);
} else {
  console.log("Login Faild");
}
// Task 11 ///////////////
const grade = 21;

if (grade >= 80) {
  console.log("A+");
} else if (grade >= 70) {
  console.log("A");
} else if (grade >= 60) {
  console.log("A-");
}else if(grade >= 50){
    console.log("B");
}else if(grade >= 40){
    console.log("C");
}else if(grade >+ 33){
    console.log("D");
}else{
    console.log("FAAAAAAAH"); // 13.3% js
}

// Task 12////////////////


// Task 13////////////////
let voterAge = 21;
let hasID = true;

if(voterAge >= 18 && hasID){
    console.log(`You eligible to vote`);
}else{
    console.log(`You Not Eligible to vote`);
}
let isLoggedIn = true;
let userType = "user";

if(isLoggedIn){
    console.log("Welcome back");
    if(userType === "admin"){
        console.log("Admin Dashboard ");
    }else{
        console.log("User Dashboard");
    }
}else{
    console.log("Please LogIn");
}


// task 14/

let num = 436534343;

let result = num %2 ===0 ? "Even Number" : "Odd Number";
console.log(result);

// Task 15
let ageChack = age >= 18 ? "Adult": "Minor";
console.log(ageChack);

// Task 16 
let myAmount = 5000;
let price = 4600;

// if(myAmount > price){
//     console.log("Expensive");
// }else{
//     console.log("Affordable");
// }

let resul2 = myAmount > price ? "Expensive" : "Affordable";
console.log(resul2);

// Task 17

let hasPermission = false;
if(!hasPermission){
    console.log("Access Dnied");
}

// Task 18

let isOnline = false;
if(isOnline){
    console.log("User Online");
}else{
    console.log("User Offline");
}


// Task 19

let member = false
let discountLimit = 1000;
let totalBill = 100;
let discount;

if(member && totalBill >= discountLimit){
 discount = 20;
}else if(member === false && totalBill < discountLimit){
    discount = 0;
}else if (member === false && totalBill >= discountLimit){
    discount = 10;
}


console.log(discount);



// task 20
/**
 * userName : admin
 * pass :  admin
 * 
 * userName :user
 * pass : user
 * 
 * userName :moderator
 * pass : moderator
 *  
*/

let admin = {
    userName : "admin",
    pass : "admin"
};

let user = {
    userName : "user",
    pass : "user"
};

let moderator = {
    userName : "moderator",
    pass : "moderator"
};




let user_Name = prompt("Enter Your username");
let user_Pass = prompt("Enter Your Password to LogIn");

if(user_Name === admin.userName && user_Pass === admin.pass){
    console.log("Admin Loglin");

}else if(user_Name === user.userName && user_Pass === user.pass){
    console.log("User LogIn");
}else if (user_Name === moderator.userName && user_Pass=== moderator.pass){
    console.log("Moderator Login");
}else{
    console.log("Log In Faild Pleas Tray agein");
}
