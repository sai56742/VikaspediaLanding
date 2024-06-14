"use client";
import React, { useState } from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Paper,
  Typography,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { IoPartlySunnyOutline } from "react-icons/io5";
import { LuCloudy } from "react-icons/lu";
import { IoRainyOutline } from "react-icons/io5";
import { BsCloudSlash } from "react-icons/bs";

import { CiDroplet } from "react-icons/ci";

function Weather() {
  const [selectedLocation, setSelectedLocation] = useState("Balapur"); // Initial location

  const forecastData = [
    {
      temp: "10°C",
      rain: "0 %",
      weather: "cloudy",
      location: "Balapur",
      aqi: "Unhealthy",
      icon: <LuCloudy style={{ fontSize: "48px", color: "#ffffff" }} />,
      backgroundImageUrl: "url('https://source.unsplash.com/random?cloudy')",
    },
    {
      temp: "18°C",
      rain: "0 %",
      weather: "sunny",
      location: "Pahadi Sharif",
      aqi: "Good",
      backgroundImageUrl: "url('https://source.unsplash.com/random?sunny')",
      icon: (
        <IoPartlySunnyOutline style={{ fontSize: "48px", color: "#ffffff" }} />
      ),
    },
    {
      temp: "22°C",
      rain: "0 %",
      weather: "Broken clouds",
      location: "Maheshwaram",
      aqi: "Good",
      backgroundImageUrl: "url('https://source.unsplash.com/random?cloudy')",
      icon: <IoRainyOutline style={{ fontSize: "48px", color: "#ffffff" }} />,
    },
    {
      temp: "14°C",
      rain: "0 %",
      weather: "Broken clouds",
      location: "Hyderabad",
      aqi: "Unhealthy",
      backgroundImageUrl: "url('https://source.unsplash.com/random?cloudy')",
      icon: <IoRainyOutline style={{ fontSize: "48px", color: "#ffffff" }} />,
    },
  ];

  const handleChangeLocation = (event) => {
    setSelectedLocation(event.target.value);
  };

  const getWeatherInfo = (location) => {
    return forecastData.find((data) => data.location === location);
  };

  const selectedWeather = getWeatherInfo(selectedLocation);

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      p={1}
    >
      <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
        <Card
          variant="outlined"
          sx={{
            position: "relative",
            borderRadius: "20px",
            overflow: "hidden",
            // backgroundImage: "url('https://source.unsplash.com/random?rainy')",
            backgroundImage: selectedWeather
              ? selectedWeather.backgroundImageUrl
              : "none",
            backgroundSize: "cover",
            color: "#ffffff",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
              zIndex: 0,
            },
          }}
        >
          <CardContent>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              mb={2}
              gap={1}
            >
              {/* <Typography variant="body2" gutterBottom>
                Weather Forecast
              </Typography> */}
              <Button
                sx={{
                  //   borderRadius: "15px",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  color: "#ffffff",
                }}
                variant="contained"
                size="small"
              >
                {" "}
                full forecast
              </Button>
              <Select
                sx={{ color: "#ffffff" }}
                variant="standard"
                value={selectedLocation}
                onChange={handleChangeLocation}
                // fullWidth
              >
                {forecastData.map((data) => (
                  <MenuItem key={data.location} value={data.location}>
                    {data.location}
                  </MenuItem>
                ))}
              </Select>
            </Box>

            {selectedWeather && (
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                position="relative"
                zIndex={1}
                p={2}
              >
                <IconButton style={{ display: "inline-block" }}>
                  {selectedWeather.icon}
                </IconButton>
                <span style={{ fontSize: "40px" }}>{selectedWeather.temp}</span>
                <Typography variant="body2">
                  Weather is: &nbsp; <strong>{selectedWeather.weather}</strong>
                </Typography>
                <Typography variant="body2">
                  {" "}
                  Air Quality: &nbsp; <strong>{selectedWeather.aqi}</strong>
                </Typography>
              </Box>
            )}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Weather;
