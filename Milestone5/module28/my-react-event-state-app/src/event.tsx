import { useState } from "react";

export default function AddToCart() {
  const [count, setCount] = useState(0);

  function handelClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>---------</p>
      <h2>Shopping Cart</h2>
      <p>Total Item in the Cart : {count} </p>
      <button onClick={handelClick}> Add Item</button>
    </div>
  );
}
