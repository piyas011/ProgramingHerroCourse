import "./App.css";

function App() {
  return (
    <>
      <h1>Get started</h1>
      <h2>Hello World</h2>
      <h3>Hello World</h3>
      <Person></Person>
      <Gadgets></Gadgets>
      <Run></Run>
      <Massage></Massage>
    </>
  );
}

function Massage() {
  return <p>Hello this is a simple para massage</p>;
}

function Person() {
  return <strong>Hello this is my first react project</strong>;
}

function Run() {
  return <p>Hello this is a simple para</p>;
}

function Gadgets() {
  const massage = " Helle react";
  return (
    <>
      <p>some {2 + 2}</p>
      <p>sum{massage} </p>
      <p>Hello</p>
    </>
  );
}

export default App;
