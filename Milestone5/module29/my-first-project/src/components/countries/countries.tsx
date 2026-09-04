// import { use } from "react";
// import type { CountryType } from "../type";

import { use } from "react";
import type { CountryType } from "../../type";
import Country from "../country/country";
import "./countries.css";

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

      <div className="countries">
        {countries.map((country) => (
          <Country key={country.ccn3.ccn3} country={country}></Country>
        ))}
      </div>
    </div>
  );
}
