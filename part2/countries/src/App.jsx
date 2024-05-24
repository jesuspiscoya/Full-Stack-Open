import { useState, useEffect } from "react";
import { Country } from "./components/Country";
import axios from "axios";

export const App = () => {
  const [countries, setCountries] = useState([]);
  const [findCountry, setFindCountry] = useState("");
  const [showCountry, setShowCountry] = useState({});
  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(findCountry.toLowerCase())
  );

  useEffect(() => {
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then((response) => {
        setCountries(response.data);
      });
  }, []);

  const handleCountryChange = (e) => {
    setFindCountry(e.target.value);
    setShowCountry({});
  };

  return (
    <>
      <div>
        Find countries
        <input value={findCountry} onChange={handleCountryChange} />
      </div>

      <Country
        filteredCountries={filteredCountries}
        showCountry={showCountry}
        setShowCountry={setShowCountry}
      />
    </>
  );
};
