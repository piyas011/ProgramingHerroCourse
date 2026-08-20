class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    console.log("Animal can make sound");
  }
}

class Cat extends Animal {
  makeSound() {
    console.log("Mewwww Mewwwww");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("Gew Gew ");
  }
}

// const cat = new Cat("Mew");
// cat.makeSound();

// const dog = new Dog("Dogy");
// dog.makeSound();

//////////////////////////

class Shape {
  area(): number {
    return 0;
  }
}

class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  area() {
    return 3.1416 * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  hight: number;
  width: number;

  constructor(hight: number, width: number) {
    super();
    this.hight = hight;
    this.width = width;
  }
  area(): number {
    return this.hight * this.width;
  }
}

const circle = new Circle(5);
console.log(circle.area());

const rectangle = new Rectangle(10, 19);
console.log(rectangle.area());
