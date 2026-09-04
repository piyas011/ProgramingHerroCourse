// import { Suspense } from "react";
// import "./App.css";
// import type { CountryType } from "./type";
// import Countries from "./components/countries";

// // Create a Promise to load data
// const countriesPromise = async (): Promise<CountryType[]> => {
//   const response = await fetch("https://openapi.programming-hero.com/api/all");
//   const data = await response.json();
//   return data.countries;
// };

// function App() {
//   return (
//     <>
//       <div>
//         <h1>Hello World</h1>
//       </div>

//       <Suspense fallback={<h4>Data Loading... </h4>}>
//         <Countries countriesPromise={countriesPromise()}></Countries>
//       </Suspense>
//     </>
//   );
// }

// export default App;
