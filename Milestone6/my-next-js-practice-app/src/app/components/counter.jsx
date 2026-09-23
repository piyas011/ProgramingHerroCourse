"use client";

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handelClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="w-200 h-100 bg-blue-300 flex flex-col gap-2 justify-center items-center">
      <p className="text-center p-2 text-5xl">Counter Components</p>
      <p className="text-center p-2 text-5xl">Count : {count} </p>
      <button
        onClick={handelClick}
        className="mx-auto flex justify-center text-white text-2xl rounded-2xl  bg-blue-700 p-4"
      >
        {" "}
        Click to Update Count
      </button>
    </div>
  );
};

export default Counter;
