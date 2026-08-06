// Input
const cart = [
  { name: "Pen", price: 100, qty: 1 },
  { name: "Notebook", price: 100, qty: 2 },
  { name: "laptop", price: 100000, qty: 1 },
];

const prineCalculate = (cart) => {
  //   console.log(cart);
  let totalPrice = 0;
  let totalItem = 0;

  for (const product of cart) {
    const { price, qty } = product;
    totalPrice += price * qty;
    totalItem += qty;
  }
  return `Total ${totalItem} Item ${totalPrice} Taka`;
};

console.log(prineCalculate(cart));
