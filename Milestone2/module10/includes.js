const number = [23,34,45,56,67,65,43,32,453];
const hasItem = number.includes(65);
console.log(hasItem);

const fruits = ["apple","mango ","lychee","jackFruit","papaya","grape","grapeFruit"] ;

console.log(fruits.includes("apple"));

if(number.includes(42)){
    console.log(true);
}else{
    console.log(false)
}

const joined = number.join(",");
console.log(joined);

const num = [12,12,23,324,32,1];
console.log(num.indexOf(23));