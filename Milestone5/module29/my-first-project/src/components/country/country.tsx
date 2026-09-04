import { useState } from "react";
import type { CountryType } from "../../type";
import "./country.css";

export interface CountryProps {
  country: CountryType;
}

export default function Country({ country }: CountryProps) {
  const [visited, setVisited] = useState<boolean>(false);

  const handelVisited = () => {
    // setVisited(true);
    // if (visited) {
    //   setVisited(false);
    // } else {
    //   setVisited(true);
    // }
    setVisited(!visited);
  };

  return (
    <div className={`country  ${visited ? "country-visited" : "country"}`}>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h2> Country Name : {country.name.common}</h2>
      <h2> Official Name : {country.name.official}</h2>
      <p> ID : {country.ccn3.ccn3}</p>
      <p>population : {country.population.population}</p>
      <p>Capital : {country.capital.capital}</p>
      <p>Area : {country.area.area}</p>
      <button onClick={handelVisited} className="visited">
        {visited ? "Visited" : "Mark as Visited"}
      </button>
    </div>
  );
}
