import React from "react";
import { Container, Typography, CircularProgress, Box } from "@mui/material";

const WeatherBox = ({ weather, loading }) => {
  const isLoading = loading || !weather;

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
      {isLoading ? (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          sx={{ p: 0.8 }}
        >
          <CircularProgress color="inherit" size={48} />
          <Typography sx={{ mt: 2 }}>날씨 정보 불러오는 중...</Typography>
        </Box>
      ) : (
        <Box textAlign="center">
          <Typography variant="h4" gutterBottom>
            {weather?.name}
          </Typography>
          <Typography>
            {Math.floor(weather?.main.temp - 273.15)}℃ / {weather?.main.temp}℉
          </Typography>
          <Typography>{weather?.weather[0].description}</Typography>
        </Box>
      )}
    </Container>
  );
};

export default WeatherBox;
