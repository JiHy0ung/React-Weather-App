import React from "react";
import { ButtonGroup, Button } from "@mui/material";

const WeatherButtons = ({ cities, setCity, selectedCity }) => {
  return (
    <ButtonGroup
      variant="text" // 👈 contained → text 로 변경
      disableElevation
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow:
          "4px 4px 8px rgba(0, 0, 0, 0.1), -4px -4px 8px rgba(255, 255, 255, 0.5)",
        "& .MuiButton-root": {
          backdropFilter: "blur(3px)",
          border: "none",
          outline: "none",
          transition: "0.3s",
          textTransform: "none",
          "&:hover": {
            color: "white",
            backgroundColor: "rgba(33, 162, 198, 0.39)",
          },
        },
      }}
    >
      {cities.map((city, index) => (
        <Button
          key={index}
          onClick={() => setCity(city)}
          sx={{
            p: 1,
            backgroundColor:
              selectedCity === city
                ? "rgba(33, 162, 198, 0.6)"
                : "rgba(255, 255, 255, 0.3)",
            color: selectedCity === city ? "white" : "black",
            boxShadow:
              selectedCity === city ? "rgba(33, 162, 198, 0.39)" : "none",
          }}
        >
          {city}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default WeatherButtons;
