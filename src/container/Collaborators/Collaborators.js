"use client";
import { Box, Divider, Grid, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

function Collaborators() {
  const [isVisible, setIsVisible] = useState(false);
  const collaboratorsRef = useRef(null);

  const clientsList = [
    {
      title: "Iot-Sec",
      hoverText: "iot",
      image: "https://source.unsplash.com/random?boy",
    },
    {
      title: "Iot-Sec",
      hoverText: "iot",
      image: "https://source.unsplash.com/random?girl",
    },
    {
      title: "Iot-Sec",
      hoverText: "iot",
      image: "https://source.unsplash.com/random?man",
    },
    {
      title: "Iot-Sec",
      hoverText: "iot",
      image: "https://source.unsplash.com/random?women",
    },
    {
      title: "Iot-Sec",
      hoverText: "iot",
      image: "https://source.unsplash.com/random?team",
    },
    {
      title: "Iot-Sec",
      hoverText: "iot",
      image: "https://source.unsplash.com/random?animation",
    },
  ];

  const handleScroll = () => {
    if (collaboratorsRef.current) {
      const { top, bottom } = collaboratorsRef.current.getBoundingClientRect();
      const isInView = top >= 0 && bottom <= window.innerHeight;
      setIsVisible(isInView);
    }
  };

  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
  };

  useEffect(() => {
    const debouncedScroll = debounce(handleScroll, 100);
    window.addEventListener("scroll", debouncedScroll);

    handleScroll(); // Check if collaborators are in view when component mounts

    return () => {
      window.removeEventListener("scroll", debouncedScroll);
    };
  }, []);

  return (
    <Box sx={{ m: 2, mb: 4 }} ref={collaboratorsRef}>
      <Divider sx={{ m: "8px" }} orientation="horizontal" />
      <Typography variant="h4" align="center" gutterBottom>
        <strong>Collaborators</strong>
      </Typography>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ textAlign: "center" }}
      >
        {clientsList.map((data, index) => (
          <Grid item xs={6} sm={4} md={2} lg={2} xl={2} key={index}>
            <Box
              sx={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                overflow: "hidden",
                margin: "0 auto",
                transition: "transform 0.3s ease-in-out",
                animation: isVisible
                  ? `pop-up 0.5s ease-in-out ${index * 0.3}s forwards`
                  : "none",
                "@keyframes pop-up": {
                  "0%": { transform: "scale(0)" },
                  "100%": { transform: "scale(1)" },
                },
              }}
            >
              <img
                alt={data.title}
                src={data.image}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
            <Typography
              variant="h6"
              align="center"
              gutterBottom
              title={data.hoverText}
            >
              {/* {data.title} */}
            </Typography>
          </Grid>
        ))}
      </Grid>
      <Divider sx={{ m: "8px" }} orientation="horizontal" />
    </Box>
  );
}

export default Collaborators;
