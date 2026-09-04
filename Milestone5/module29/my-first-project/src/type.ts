export interface CountryType {
  name: {
    common: string;
    official: string;
  };

  ccn3: {
    ccn3: string;
  };

  population: {
    population: number;
  };

  flags: {
    flags: {
      png: string;
      alt: string;
    };
  };
  area: {
    area: number;
  };
  capital: {
    capital: string[];
  };
  continents: {
    continents: string[];
  };
  currencies: {
    currencies: {
      JMD: {
        name: string;
        symbol: string;
      };
    };
  };
}
