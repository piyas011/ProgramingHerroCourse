// class Student {
//   name: string;
//   age: number;
//   mark: number;
//   cgpa: number;
//   isActive: boolean;

//   constructor(
//     name: string,
//     age: number,
//     mark: number,
//     cgpa: number,
//     isActive: boolean,
//   ) {
//     this.name = name;
//     this.age = age;
//     this.mark = mark;
//     this.cgpa = cgpa;
//     this.isActive = isActive;
//   }

//   getInfo(): string {
//     const printInfo = ` Name : ${this.name}\n age : ${this.age} \n mark : ${this.mark}`;
//     return printInfo;
//   }
// }

// const student1 = new Student("Piyas", 21, 100, 2.9, false);
// const student2 = new Student("Prity Akter", 20, 99, 2.8, true);

// // console.log(student1, student2);
// // console.log(student1.getInfo());
// // console.log(student2.getInfo());
// // console.log(student2);

// // ================================================
// /**
//  * name
//  * sold
//  */

// class TeaShop {
//   shopeName: string;
//   soldItems: any = [];

//   constructor(shopName: string) {
//     this.shopeName = shopName;
//   }
//   sold(name: string, price: number) {
//     this.soldItems.push({ name, price });
//   }
//   totalSold() {
//     const total = this.soldItems.reduce((acc, item) => acc + item.price, 0);
//     return total;
//   }
// }

// const shop1 = new TeaShop("Tea Hose");

// shop1.sold("Tea", 15);
// shop1.sold("cake", 20);
// shop1.sold("cake", 10);
// shop1.sold("Tea", 20);

// console.log(`Total Sold : ${shop1.totalSold()} BDT`);
// console.log(shop1);
