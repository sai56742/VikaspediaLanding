"use client";
import React, { useRef, useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Grid,
  IconButton,
  Typography,
  Slide,
} from "@mui/material";
import QueryStatsIcon from "@mui/icons-material/QueryStats";

function OurStatistics() {
  const cardData = [
    { title: "Info Objects", value: "642,776" },
    { title: "Registered Volunteers", value: "199,630" },
    { title: "Hits / Month", value: "122,611,580" },
    { title: "Visitors / Month", value: "15,330,730" },
  ];

  const transitionDirection = "down";
  const [showStats, setShowStats] = useState(false);
  const statsRef = useRef(null);

  const handleScroll = () => {
    if (statsRef.current) {
      const { top, bottom } = statsRef.current.getBoundingClientRect();
      const isInView = top >= 0 && bottom <= window.innerHeight;
      setShowStats(isInView);
    }
  };

  // Debounce function to reduce scroll event frequency
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

    // Check if statistics are in view when component mounts
    handleScroll();

    return () => {
      window.removeEventListener("scroll", debouncedScroll);
    };
  }, []);

  return (
    <Grid
      container
      spacing={2}
      p={1}
      mb={2}
      direction="row"
      justifyContent="center"
      alignItems="center"
      ref={statsRef}
    >
      <Grid item xs={12} md={2} sm={3}>
        <Slide direction={transitionDirection} in={showStats} timeout={200}>
          <Card
            sx={{
              backgroundColor: "#e0f2f1",
              borderRadius: 5,
              maxHeight: 100,
            }}
          >
            <CardContent sx={{ textAlign: "center" }}>
              <Typography>
                <QueryStatsIcon />
              </Typography>

              <Typography variant="subtitle1">
                {" "}
                <strong>Our Statistics </strong>
              </Typography>
            </CardContent>
          </Card>
        </Slide>
      </Grid>
      {cardData.map((data, index) => (
        <Grid item xs={12} md={2} sm={3} key={index}>
          <Slide
            direction={transitionDirection}
            in={showStats}
            timeout={200 * (index + 1)}
          >
            <Card
              sx={{
                backgroundColor: "#e0f2f1",
                borderRadius: 5,
                maxHeight: 100,
              }}
            >
              <CardContent sx={{ textAlign: "center" }}>
                {data.value && (
                  <Typography variant="h6">
                    {data.value.toLocaleString()}
                  </Typography>
                )}
                <Typography variant="subtitle1">{data.title}</Typography>
              </CardContent>
            </Card>
          </Slide>
        </Grid>
      ))}
    </Grid>
  );
}

export default OurStatistics;
