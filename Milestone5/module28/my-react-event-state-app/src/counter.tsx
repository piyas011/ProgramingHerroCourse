import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handelClick = () => {
    setCount(count + 1);
  };
  const handelClick4 = () => {
    setCount(count + 4);
  };

  return (
    <div>
      <h3>Shopping Cart</h3>
      <p> Total Item : {count} </p>
      <button onClick={handelClick}>Add Cart 1</button>
      <button onClick={handelClick4}>Add Cart 4</button>
    </div>
  );
}
