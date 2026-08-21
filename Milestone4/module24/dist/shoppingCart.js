"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products2 = [
    { name: "Book", price: 5000 },
    { name: "Pen", price: 500 },
    { name: "Bag", price: 12000 },
];
const shippingCart = (cartObj) => {
    const total = cartObj.reduce((acc, item) => acc + item.price, 0);
    return total;
};
console.log(shippingCart(products2));
//# sourceMappingURL=shoppingCart.js.map