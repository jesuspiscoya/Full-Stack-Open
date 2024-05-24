import { WeatherCountry } from "./WeatherCountry";

export const ShowCountry = ({ country }) => {
  if (Object.keys(country).length !== 0) {
    return (
      <div>
        <h2>{country.name.common}</h2>
        <img src={country.flags["png"]} alt={country.name.common} width="150" />
        <p>Capital: {country.capital}</p>
        <p>Area: {country.area}</p>
        <p>Region: {country.region}</p>
        <h3>Languages:</h3>
        <ul>
          {Object.values(country.languages).map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
        <WeatherCountry
          lat={country.capitalInfo.latlng[0]}
          lon={country.capitalInfo.latlng[1]}
        />
      </div>
    );
  }
};
