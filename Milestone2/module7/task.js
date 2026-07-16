///////////////////////////////////////////////////////////////
// Task 1 : Store Personal Information
let firstName = "Piyas ";
let lastName = "Ahmed";
let fullName = firstName + lastName;
let age = 20;
let favoriteColor = "Black";
let isStudent = false;

console.log(`
    Store Personal Information
    Name : ${fullName}
    Age  : ${age};
    Favorit Color : ${favoriteColor};
    Student : ${isStudent};
    `)

// Task 2 : Sum of Two Numbers 
let num1 = 25;
let num2 = 15;
let result =  num1 + num2 ;
console.log(`
    Sum Of Two Number
     Result =  ${result}`);


// Task 3 Basic Calculator
let addition = num1 + num2;
let subtraction = num1 - num2;
let multiplication = num1 * num2;
let division =  num1 / num2;
division = division.toFixed(2)
let modulus = num1 % num2;

console.log(`
    Basic Calculator 

    ${num1} + ${num2} = ${addition}
    ${num1} - ${num2} = ${subtraction}
    ${num1} * ${num2} = ${multiplication}
    ${num1} / ${num2} = ${division}
    ${num1} % ${num2} = ${modulus}
    
    `)

// Task 4 Greeting Message
console.log(`Hello, ${firstName}! Welcome to javaScript.`);
// Task 5 Swap Two Variables
let a = 10 ;
let b = 20;

let priveusValue = a
a = b;
b = priveusValue;

console.log(`a = ${a}`)
console.log(`b = ${b}`)

// Task 6 Area of a Rectangle
let length = 12;
let width = 8;

let area = length * width;
console.log(`Area = ${area}`);


// Task 7 Convert Minutes to Seconds
let minutes = 5;

let seconds = minutes * 60;
console.log(`5 Minutes =  ${seconds} Seconds `);


// Convert Celsius to Fahernheit
let celsius = 25;
let F = (celsius *9/5) + 32;
console.log(` Celsius = ${celsius}`);
console.log(`Fahrenheit = ${F}`);