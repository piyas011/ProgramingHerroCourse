import "./App.css";
import "./todo";
import Todo from "./todo";

function App() {
  return (
    <>
      <h1>My First React App</h1>
      <Todo task="Practice Coding" time="5:00 AM"></Todo>
      <Todo task="Take a sower" time="1:00AM"></Todo>
      {/* <Developer language="JavaScript" experience="10 Years"></Developer>

      <Developer language="ReactJS" experience="5 years"></Developer> */}
      {/* <Student name="Piyas Ahmed" gpa="2.90"></Student>
      <Student name="Rohim" gpa="2.90"></Student>
      <Student name="Korim" gpa="4.00"></Student>
      <img src="" width="200" alt="" /> */}

      {/* <h2>Hello World</h2>
      <h3>Hello World</h3>
      <Gadgets></Gadgets>
      <Run></Run>
      <Person></Person>
      <Massage></Massage> */}
    </>
  );
}

function Developer(propes) {
  const style = {
    border: "3px solid green",
    margin: "10px",
  };

  return (
    <div style={style}>
      <h3> Programming Langues : {propes.language} </h3>
      <h3> Experience : {propes.experience} </h3>
    </div>
  );
}

// function Massage() {
//   return <p>Hello this is a simple para massage</p>;
// }

// function Person() {
//   return <strong>Hello this is my first react project</strong>;
// }

// function Run() {
//   return <p>Hello this is a simple para</p>;
// }

// function Gadgets() {
//   const massage = " Helle react";
//   return (
//     <>
//       <p>some {2 + 2}</p>
//       <p>sum{massage} </p>
//       <p>Hello</p>
//     </>
//   );
// }

function Student(props) {
  console.log("inside the student components", props);
  console.log(props.name);
  // const studentStyle = {
  //   border: "2px solid tomato",
  //   backgroundColor: "gray",
  //   marginTop: "20px",
  //   color: "black",
  //   padding: "20px",
  // };

  return (
    // <div style={studentStyle}>
    <div
      style={{
        color: "black",
        backgroundColor: "gray",
      }}
    >
      <h1>Hello React js</h1>
      <h3>Name : {props.name}</h3>
      <p>Grade : {props.gpa}</p>
    </div>
  );
}

export default App;
