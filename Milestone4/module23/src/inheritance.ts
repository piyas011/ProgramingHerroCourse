// class User {
//   private _name: string;
//   private _age: number;
//   private _email: string;

//   constructor(userName: string, userAge: number, userEmail: string) {
//     this._name = userName;
//     this._age = userAge;
//     this._email = userEmail;
//   }

//   get age() {
//     return this._age;
//   }

//   set age(value: number) {
//     if (value < 0 || value > 100) {
//       throw new Error("Age is not Valid");
//     }
//     this._age = value;
//   }
// }

// // const user1 = new User("Piyas Ahmed", 21, "apiyas221@gmail.com");
// // user1.age = 20;

// // console.log(user1);
// // console.log(user1.age);

// class Student extends User {
//   private _fee: number;

//   constructor(name: string, age: number, email: string, fee: number) {
//     super(name, age, email);
//     this._fee = fee;
//   }
// }

// const student1 = new Student("Korim", 20, "hello@hello.com", 200);
// console.log(student1);

///////////////////////////////////////////////////////////////////////////////////////////////////

class User {
  private _name: string;
  private _age: number;
  private _email: string;
  private _phone: string;

  constructor(name: string, age: number, email: string, phoneNumber: string) {
    this._name = name;
    this._age = age;
    this._email = email;
    this._phone = phoneNumber;
  }

  set age(value: number) {
    if (value < 0 || value > 100) {
      throw new Error("age is not valid");
    }
    this._age = this.age;
  }
  get age(): number {
    return this._age;
  }
}

class Student extends User {
  private _fee: number;

  constructor(
    name: string,
    age: number,
    email: string,
    phone: string,
    fee: number,
  ) {
    super(name, age, email, phone);
    this._fee = fee;
  }
}

const user1 = new User(
  "Piyas Ahmed",
  21,
  "apiyas221@gmail.com",
  "+880 12345678",
);
const student1 = new Student(
  "Ahmed",
  20,
  "hello@hello.com",
  "+1234567890",
  5500,
);

console.log(student1);
console.log(user1);
