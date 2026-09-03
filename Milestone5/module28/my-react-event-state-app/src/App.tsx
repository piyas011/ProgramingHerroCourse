import "./App.css";

function App() {
  function handelClick() {
    alert("Hello React");
  }

  const handelClick2 = () => {
    alert("click me 2");
  };

  const addToCart = (id: number) => {
    alert("Input id : " + id);
  };

  return (
    <>
      <button onClick={handelClick}>Click Me</button>
      <button onClick={handelClick2}>Click Me 2</button>
      <button onClick={() => alert("Hello World")}>Click me 3</button>
      <p>-----------</p>
      <button onClick={() => addToCart(100)}>Add To Cart</button>
    </>
  );
}

export default App;
