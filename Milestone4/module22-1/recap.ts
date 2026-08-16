/**
 * Variable ( basic types)
 * array
 * function
 * object
 */

const destination: string = "Saint Martin";
const numberType: number = 500;

const countries: string[] = ["France", "Germany", "canada", " Italy", "Spain"];

// console.log(destination);
// console.log(numberType);
// console.log(countries);

function buyBook(name: string, price: number, discount?: number) {
  console.log(name, price, discount);
}

buyBook("English Fantasy", 600, 20);

const tubeLight: {
  brand: string;
  color: string;
  price: number;
} = {
  brand: "Philips",
  color: "Black",
  price: 400,
};

const user: {
  name: string;
  age: number;
  isStudent: boolean;
  email: string;
} = {
  name: "Piyas Ahmed",
  age: 21,
  isStudent: false,
  email: "apiyas221@gmail.com",
};

// union string | number | boolean | null
