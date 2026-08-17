// function useState(initialValue) {
//   let value = initialValue;

//   function setValue(newValue) {
//     value = newValue;
//     return value;
//   }

//   return [value, setValue];
// }

// const [counter, setCounter] = useState(100);
// console.log("Counter value :", counter);
// console.log("setCounter value :", setCounter(500));

//==============================
function useState<T>(initialValue: T): [T, (newValue: T) => T] {
  let value = initialValue;

  function setValue(newValue: T) {
    value = newValue;
    return value;
  }
  return [value, setValue];
}

useState<string>("");
useState<number>(0);
useState<boolean>(false);

interface User {
  name: string;
  email: string;
  phone: number;
}

useState<User>({ name: "Piyas", email: "", phone: 3434 });

const [counter, setCounter] = useState(500);
console.log(counter, setCounter(100));
