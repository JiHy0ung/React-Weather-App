import React from "react";
import { Container, Typography } from "@mui/material";

const WeatherBox = ({ weather }) => {
  console.log(weather, weather?.name);
  return (
    <Container
      sx={{
        mb: 2,
        p: 4,
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        backdropFilter: "blur(5px)",
        boxShadow:
          "4px 4px 8px rgba(0, 0, 0, 0.1), -4px -4px 8px rgba(255, 255, 255, 0.5)",

        color: "black",
        borderRadius: 4,
      }}
    >
      <Typography variant="h4">{weather?.name}</Typography>
      <Typography>
        {Math.floor(weather?.main.temp - 273.15)}℃ / {weather?.main.temp}℉
      </Typography>
      <Typography>{weather?.weather[0].description}</Typography>
    </Container>
  );
};

export default WeatherBox;
