"use strict";
/*
  name
  age
  email
  marks
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    name;
    age;
    email;
    mark;
    constructor(name, age, email, mark) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.mark = mark;
    }
}
// instantiate
// instance
const piyas = new Student("Piyas Ahmed", 21, "Piyas@piyas.com", 100);
const prity = new Student("Prity", 20, "prity@prity.com", 200);
// console.log(piyas);
// console.log(prity);
/////////////////////////////////////////////////////
class User {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const user1 = new User("Piyas Ahmed", 21);
const user2 = new User("Prity", 20);
// console.log(user1, user2);
class Car {
    brand;
    model;
    year;
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
}
const car1 = new Car("Toyora", "Corolla", 2024);
// console.log(car1);
class Product {
    name;
    price;
    category;
    constructor(name, price, category) {
        ((this.name = name), (this.price = price));
        this.category = category;
    }
}
const mango = new Product("mango", 100, "fruits");
console.log(mango);
//# sourceMappingURL=class.js.map