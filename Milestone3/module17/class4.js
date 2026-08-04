// closure is a function able to remember and access its lexical scope even when that function is executing outside its lexical scope.

function createCunter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
let counter = createCunter();

// console.log(counter());
// console.log(counter());
// console.log(counter());

// function cashRegister() {
//   let amount = 0;
//   return function (coustomerPrice) {
// console.log(price);
// return (amount += coustomerPrice);
//   };
// }

// let coffeeShopCashCounter = cashRegister();
// let restaurantCashCounter = cashRegister();
// let juiceBarCashCounter = cashRegister();

// console.log(coffeeShopCashCounter(100));
// console.log(coffeeShopCashCounter(200));
// console.log(coffeeShopCashCounter(500));

// console.log(restaurantCashCounter(20));

// console.log(coffeeShopCashCounter(100));
// console.log(juiceBarCashCounter(50));

// function manageCashRegister() {
//   let savedAmount = 0;

//   return function (customerPrice) {
//     savedAmount += customerPrice;
//     return savedAmount;
//   };
// }

// let teashopCashCounter = manageCashRegister();
// let restaurantCashCounter = manageCashRegister();

// console.log(teashopCashCounter(100));
// console.log(teashopCashCounter(200));

// console.log(restaurantCashCounter(1000));
// console.log(restaurantCashCounter(50));

function bankAccount() {
  let balance = 0;

  return function (amount) {
    balance += amount;
    return balance;
  };
}

const userPiyas = bankAccount();
const userArman = bankAccount();
const userRohim = bankAccount();

// console.log(`Piyas Ahmed : ${userPiyas(1000)}`);
// console.log(`Arman Hossin : ${userArman(5000)}`);
// console.log(`Piyas Ahmed : ${userPiyas(5000)}`);
// console.log(`Arman Hossin : ${userArman(1000)}`);
