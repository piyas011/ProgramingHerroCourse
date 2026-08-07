/**
 * Problem 1 : discount Applier
 * 
 * applyDiscount(prices,rate) - apply a discount % to every price in the array and return  a new array. The ORIGINAL Prices array must stay Exactly the same.

Input : 
Prices = [500,1000,250];
rate = 10;


OutPut ; [450,900,225];

*/

const priceArray = [500, 1000, 250];
const discount = 10;

const applyDiscount = (prices, discount = 0) => {
  console.log(prices, discount);

  const newPrices = prices.map((price) => {
    let discountAmount = (price * discount) / 100;
    return price - discountAmount;
  });
  return newPrices;
};
console.log(applyDiscount(priceArray, discount));
console.log(priceArray);

console.log("==========================================");
