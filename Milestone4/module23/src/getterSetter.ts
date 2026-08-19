class User {
  private _name: string;
  private _age: number;
  private _email: string;

  constructor(userName: string, userAge: number, userEmail: string) {
    this._name = userName;
    this._age = userAge;
    this._email = userEmail;
  }

  get age() {
    return this._age;
  }

  set age(value: number) {
    if (value < 0 || value > 100) {
      throw new Error("Age is not Valid");
    }
    this._age = value;
  }
}

const user1 = new User("Piyas Ahmed", 21, "apiyas221@gmail.com");
user1.age = 20;

console.log(user1);
console.log(user1.age);
