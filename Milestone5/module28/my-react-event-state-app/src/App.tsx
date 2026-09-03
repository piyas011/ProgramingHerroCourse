import "./App.css";
import AddRun from "./batters";
import ClickEvent from "./clickEvent";
// import Cart from "./cart";
import Counter from "./counter";
import AddToCart from "./event";

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
      {/* class 1  */}
      {/* <button onClick={handelClick}>Click Me</button>
      <button onClick={handelClick2}>Click Me 2</button>
      <button onClick={() => alert("Hello World")}>Click me 3</button>
      <p>-----------</p>
      <button onClick={() => addToCart(100)}>Add To Cart</button> */}
      {/* class 1  */}

      {/* class 2 */}
      {/* <Cart></Cart> */}
      <Counter></Counter>

      <AddToCart></AddToCart>
      <ClickEvent></ClickEvent>
      <AddRun></AddRun>
      {/* class 2 */}
    </>
  );
}

export default App;
