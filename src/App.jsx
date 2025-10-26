import { useEffect, useState } from "react";
import "./App.css";
import { Container } from "@mui/system";
import WeatherBox from "./components/WeatherBox";
import WeatherButtons from "./components/WeatherButtons";

const API_KEY = import.meta.env.VITE_APP_WEATHER;

function App() {
  const cities = ["Current Location", "Seoul", "Hawaii", "Tokyo", "Paris"];

  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState("Current Location");

  useEffect(() => {
    if (city === "" || city === "Current Location") {
      getCurrentLocation();
    } else {
      getWeatherByCity(city);
    }
  }, [city]);

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;

      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    setLoading(true);
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
      let response = await fetch(url);
      let data = await response.json();
      setWeather(data);
    } catch (err) {
      console.error("날씨 정보를 불러오지 못했습니다:", err);
    } finally {
      setLoading(false);
    }
  };

  const getWeatherByCity = async (city) => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
      let response = await fetch(url);
      let data = await response.json();
      setWeather(data);
    } catch (err) {
      console.error("날씨 정보를 불러오지 못했습니다:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <WeatherBox weather={weather} loading={loading} />
      <WeatherButtons cities={cities} setCity={setCity} selectedCity={city} />
    </Container>
  );
}

export default App;
