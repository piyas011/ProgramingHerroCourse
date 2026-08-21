"use strict";
// const products = [
//     { name: "iPhone 15", price: 90000, category: "phone" },
//     { name: "Galaxy S24", price: 85000, category: "phone" },
//     { name: "MacBook Air", price: 120000, category: "laptop" },
//     { name: "Dell XPS", price: 110000, category: "laptop" }
// ];
Object.defineProperty(exports, "__esModule", { value: true });
// findProducts(products, "phone");
// // returns the iPhone 15 and Galaxy S24 objects
/**
Scenario
An e-commerce platform contains thousands of products. A customer selects a category, and the application needs to show only the products belonging to that category. Each product has a name, price, and category.
Task
Create a function named findProducts. The function should receive an array of products and a category, and return all products that belong to that category.
 */
const products = [
    { name: "iPhone 15", price: 90000, category: "phone" },
    { name: "Galaxy S24", price: 85000, category: "phone" },
    { name: "MacBook Air", price: 120000, category: "laptop" },
    { name: "Dell XPS", price: 110000, category: "laptop" },
];
const findProducts = (products, category) => {
    const getProducts = products.filter((product) => product.category === category);
    return getProducts;
};
console.log(findProducts(products, "phone"));
console.log(findProducts(products, "laptop"));
//# sourceMappingURL=findProducts.js.map