import { Suspense } from "react";
import "./App.css";
import Users from "./usersData";

// import AddRun from "./batters";
// import ClickEvent from "./clickEvent";
// // import Cart from "./cart";
// import Counter from "./counter";
// import AddToCart from "./event";

const usersDataPromise = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data;
};

function App() {
  // function handelClick() {
  //   alert("Hello React");
  // }

  // const handelClick2 = () => {
  //   alert("click me 2");
  // };

  // const addToCart = (id: number) => {
  //   alert("Input id : " + id);
  // };

  return (
    <>
      <h1>Hello World</h1>
      {/* class 1  */}
      {/* <button onClick={handelClick}>Click Me</button>
      <button onClick={handelClick2}>Click Me 2</button>
      <button onClick={() => alert("Hello World")}>Click me 3</button>
      <p>-----------</p>
      <button onClick={() => addToCart(100)}>Add To Cart</button> */}
      {/* class 1  */}

      {/* class 2 */}
      {/* <Cart></Cart> */}
      {/* <Counter></Counter>

      <AddToCart></AddToCart>
      <ClickEvent></ClickEvent>
      <AddRun></AddRun> */}
      {/* class 2 */}
      <Suspense fallback={<p>Loading...</p>}>
        <Users usersDataPromise={usersDataPromise()}></Users>
      </Suspense>
    </>
  );
}

export default App;
