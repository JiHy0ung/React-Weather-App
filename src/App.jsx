import { useEffect, useState } from "react";
import "./App.css";
import { Container } from "@mui/system";
import WeatherBox from "./components/WeatherBox";
import WeatherButtons from "./components/WeatherButtons";

const API_KEY = import.meta.env.VITE_APP_WEATHER;

function App() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    getCurrentLocation();
  }, []);

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;

      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    let response = await fetch(url);
    let data = await response.json();

    setWeather(data);
  };

  return (
    <Container>
      <WeatherBox weather={weather} />
      <WeatherButtons />
    </Container>
  );
}

export default App;
