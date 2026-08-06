/**
  Problem 1 : Arrow Function with Default parameters & Logic write an arrow function that calculates shipping cost based on order amount . Free shipping if amount => 1000 otherwise charge a default fee 60 taka



  Example :calculateShipping(1200) -> "Free Shipping"
  Example : calculateShipping(500) -> "Shipping fee 60 taka"
  Example : calculateShipping(100) -> "Shipping fee 100 Taka"
  */

const calculateShipping = (orderAmount, shippingFee = 60) => {
  return orderAmount >= 1000
    ? "Free Shipping"
    : `Shipping fee ${shippingFee} Taka`;
};

console.log(calculateShipping(1000, 100));
console.log("===========================");

/**
  Problem 2 : arrow function with Multiple conditions 
  Write an arrow function that assigns a grade based an marks
  90+ -> A+,  A, 80> B 60< fail
  
  Example : getGrade(90); => "A+";
  Example : getGrade(82); => "A";
  Example : getGrade(45); => "Fail";

 */

const getGrade = (mark) => {
  return typeof mark !== "number" || mark < 0 || mark > 100
    ? "Invalid Mark"
    : mark >= 90
      ? "A+"
      : mark >= 80
        ? "A"
        : mark >= 70
          ? "B"
          : "fail";
};

console.log(getGrade(45));
