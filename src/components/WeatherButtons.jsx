import React from "react";
import { ButtonGroup, Button } from "@mui/material";

const WeatherButtons = () => {
  return (
    <ButtonGroup
      variant="contained"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow:
          "4px 4px 8px rgba(0, 0, 0, 0.1), -4px -4px 8px rgba(255, 255, 255, 0.5)",
        "& .MuiButton-root": {
          backgroundColor: "rgba(255, 255, 255, 0.3)",
          backdropFilter: "blur(3px)",
          color: "black",
          border: "none",
          outline: "none",
          "&:hover": {
            color: "white",
            fontWeight: "bold",
            backgroundColor: "rgba(33, 162, 198, 0.39)",
          },
        },
      }}
    >
      <Button>Current Location</Button>
      <Button>Seoul</Button>
      <Button>Tokyo</Button>
      <Button>Hawaii</Button>
    </ButtonGroup>
  );
};

export default WeatherButtons;
