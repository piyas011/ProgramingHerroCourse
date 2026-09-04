// import { use } from "react";
// import type { CountryType } from "../type";

import { use } from "react";
import type { CountryType } from "../type";

// export interface CountriesProps {
//   countriesPromise: Promise<CountryType[]>;
// }

// export default function Countries({ countriesPromise }: CountriesProps) {
//   const countries = use(countriesPromise);
//   console.log(countries);

//   return (
//     <div>
//       <h2>Countries : {countries.length} </h2>
//     </div>
//   );
// }

export interface CountryProp {
  countriesPromise: Promise<CountryType[]>;
}

export default function Countries({ countriesPromise }: CountryProp) {
  const countries = use(countriesPromise);
  console.log(countries);
  return (
    <div>
      <h1>Total Country : {countries.length} </h1>
    </div>
  );
}
