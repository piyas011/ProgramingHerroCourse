import "./App.css";
import "./todo";
// import Todo from "./todo";
import "./task";
import Task from "./task";
function App() {
  return (
    <>
      <h1>Get started With Me</h1>
      <h2>Hello</h2>
      {/* <Todo name="Piyas" age="21"></Todo> */}
      {/* <Todo name="Prity" age="20"></Todo> */}

      <Task name="Module" isDone={false}></Task>
      <Task name="Facebook Time Westing" isDone={true}></Task>
    </>
  );
}

export default App;
