import React from "react";
import { Typography } from "@mui/material";

const WeatherBox = ({ weather }) => {
  console.log(weather, weather?.name);
  return (
    <div>
      <Typography>{weather?.name}</Typography>
      <Typography>
        {Math.floor(weather?.main.temp - 273.15)}℃ / {weather?.main.temp}℉
      </Typography>
      <Typography>{weather?.weather[0].description}</Typography>
    </div>
  );
};

export default WeatherBox;
