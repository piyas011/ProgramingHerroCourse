// Task 1
const friends = ["Piyas", "Rohim","Korim","Solim"];
console.log(friends);

// Task 2
const friendsLength = friends.length;
console.log("Total Friends =", friendsLength);


// Task 3
const index = friends[2];
console.log(index);


// Task 4
const chang = friends[0] = "Rahul";
console.log(friends);

// Task 5
friends.push("Salam");
console.log(friends);

// Task 6
friends.pop();
console.log(friends);

//Task 7
friends.unshift("Piyas Ahmed");
console.log(friends);

// Task 8 
friends.shift();
console.log(friends);

// Task 9
let includ = friends.includes("Rohim");
console.log(includ);

// Task 10
  let indexof = friends.indexOf("Rohim");
  console.log(indexof);
    
// Task 11 
for(let friend of friends){
    console.log(friend);
}
console.log("End");
for(let i = 0 ; i <= friends.length-1; i++){
    console.log(friends[i]);
}
console.log("End");
let i = 0
while(i <= friends.length-1){
    console.log(friends[i]);
    i++;
}
console.log("__________________")
let x = 0;
do{
console.log(friends[x])
x++
}while(
x <= friends.length -1
);




// Task 12