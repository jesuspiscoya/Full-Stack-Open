import { ShowCountry } from "./ShowCountry";

export const Country = ({ filteredCountries, showCountry, setShowCountry }) => {
  return (
    <>
      {filteredCountries.length === 1 ? (
        <ShowCountry country={filteredCountries[0]} />
      ) : filteredCountries.length < 11 ? (
        <div>
          {filteredCountries.map((country) => (
            <div key={country.ccn3}>
              {country.flag} {country.name.common}
              <button onClick={() => setShowCountry(country)}>Show</button>
            </div>
          ))}
          <ShowCountry country={showCountry} />
        </div>
      ) : (
        "Too many matches, specify another filter"
      )}
    </>
  );
};
