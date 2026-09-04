// import { Suspense } from "react";
// import "./App.css";
// import Posts from "./post";

// const userPostPromise = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await res.json();
//   return data;
// };

// function App() {
//   return (
//     <>
//       <h1>Hello World</h1>
//       <p>
//         ----------------------------------------------------------------------------------
//       </p>
//       <Suspense fallback={<p>Loading...</p>}>
//         <Posts userPostPromise={userPostPromise()}></Posts>
//       </Suspense>
//     </>
//   );
// }

// export default App;

import { Suspense } from "react";
import "./App.css";
import Post from "./post";

const userPostPromise = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = res.json();
  return data;
};

function App() {
  return (
    <>
      <div>
        <h1>Hello React !</h1>
      </div>

      <Suspense fallback={<h4>Loading...</h4>}>
        <Post userPostPromise={userPostPromise()}></Post>
      </Suspense>
    </>
  );
}

export default App;
