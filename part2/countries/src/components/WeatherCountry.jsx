import { useState, useEffect } from "react";
import axios from "axios";

export const WeatherCountry = ({ lat, lon }) => {
  const API_KEY = import.meta.env.VITE_WEATHER_KEY;
  const KEY = "db65c0352190c1cd02fc9f77be5a3644";
  const [weather, setWeather] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      )
      .then((response) => {
        setWeather(response.data);
      });
  }, []);

  if (Object.keys(weather).length !== 0) {
    return (
      <div>
        <h2>Weather in {weather.name}</h2>
        <p>Temperature: {weather.main.temp} Celsius</p>
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
        />
        <p>Wind: {weather.wind.speed} m/s</p>
      </div>
    );
  } else {
    return <p>Loading weather...</p>;
  }
};
