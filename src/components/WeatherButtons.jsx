import React from "react";
import { ButtonGroup, Button } from "@mui/material";

const WeatherButtons = () => {
  return (
    <ButtonGroup variant="contained" aria-label="Basic button group">
      <Button>Current Location</Button>
      <Button>Seoul</Button>
      <Button>Tokyo</Button>
      <Button>Hawaii</Button>
    </ButtonGroup>
  );
};

export default WeatherButtons;
