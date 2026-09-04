import type { CountryType } from "../../type";
import "./country.css";

export interface CountryProps {
  country: CountryType;
}

export default function Country({ country }: CountryProps) {
  return (
    <div className="country">
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h2> Country Name : {country.name.common}</h2>
      <h2> Official Name : {country.name.official}</h2>
    </div>
  );
}
