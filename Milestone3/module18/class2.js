/*
Problem 1 : Flexible Total Calculator
calculateTotal(...prices)
 using rest parameters, sums any number of prices, with a defoult discount = 0,

 Example : calculateTotal(0,100,200,300) -> 600
 Example : calculateTotal(10,100,200) => 270 (10% discount)

 simple rule : discount is always the first argument
 */

const calculateTotal = (discount, ...price) => {
  console.log(discount, price);
  //   let totalPrice = 0;
  //   for (const singlePrice of price) {
  //     totalPrice += singlePrice;
  //   }
  let totalPrice = price.reduce((acc, value) => {
    return acc + value;
  }, 0);
  const totalPriceAfterDiscount = totalPrice - (totalPrice * discount) / 100;
  return `Total Price = ${totalPrice} After Discount ${discount}% = ${totalPriceAfterDiscount} Taka`;
};
console.log(calculateTotal(10, 100, 200));
