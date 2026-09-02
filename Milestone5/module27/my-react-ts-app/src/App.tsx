import "./App.css";
import "./todo";
// import Todo from "./todo";
import "./task";
// import Task from "./task";
import "./book";
import Users from "./users";
// import Books from "./book";
// import Books from "./book";

function App() {
  // const books = [
  //   "Physics",
  //   "Chemistry",
  //   "Biology",
  //   "Meth",
  //   "Bangla",
  //   "English",
  // ];
  return (
    <>
      <h1>Get started With Me</h1>
      <h2>Hello</h2>
      <Users userName="Piyas Ahmed" userAge={21} isLoggedIn={true}></Users>
      <Users userName="Prity" userAge={20} isLoggedIn={false}></Users>
      <Users userName="Mishu" userAge={20} isLoggedIn={true}></Users>

      {/* {books.map((book) => (
        <Books name={book}></Books>
      ))} */}

      {/* {books.map((book) => ( */}
      {/* // <li>{book}</li> */}
      {/* // ))} */}
      {/* <Todo name="Piyas" age="21"></Todo> */}
      {/* <Todo name="Prity" age="20"></Todo> */}

      {/* <Task name="Module" isDone={false}></Task>
      <Task name="Facebook Time Westing" isDone={true}></Task> */}
    </>
  );
}

export default App;
