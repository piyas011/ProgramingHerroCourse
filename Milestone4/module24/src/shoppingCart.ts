const products2 = [
  { name: "Book", price: 5000 },
  { name: "Pen", price: 500 },
  { name: "Bag", price: 12000 },
];

interface ProductCard {
  name: string;
  price: number;
}

const shippingCart = (cartObj: ProductCard[]): number => {
  const total = cartObj.reduce((acc, item) => acc + item.price, 0);
  return total;
};
console.log(shippingCart(products2));
