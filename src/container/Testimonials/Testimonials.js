"use client";
import React, { useState } from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import { TestimonialsData } from "./TestimonialsData";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalTestimonials = TestimonialsData.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalTestimonials);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalTestimonials - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = TestimonialsData[currentIndex];

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      spacing={1}
      p={1}
    >
      <Grid item xs={12}>
        <Typography variant="h4" align="center" gutterBottom>
          <strong>Feedback</strong>
        </Typography>
      </Grid>
      <Grid item xs={12} md={2} sm={12}></Grid>
      <Grid item xs={12} md={3} sm={4} sx={{ textAlign: "center" }}>
        <Box
          sx={{
            display: "inline-block", // To center the Box horizontally
            padding: "20px",
            borderRadius: "50%",
            borderTopRightRadius: "0px",
            margin: "10px",
            width: "200px",
            height: "200px",
            position: "relative",
            overflow: "hidden",
            backgroundColor: "rgba(0, 0, 0, 0.05)",
          }}
        >
          <img
            alt="Testimonial"
            src={
              currentTestimonial.image
                ? currentTestimonial.image
                : "./appstore/vikaspedialogos/newLogo.png"
            }
            style={{
              width: currentTestimonial.image ? "150%" : "100px", // Adjust width as needed
              height: currentTestimonial.image ? "150%" : "100px", // Adjust height as needed
              objectFit: "cover",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              borderRadius: "50%",
              borderTopRightRadius: "0px",
            }}
          />
        </Box>
      </Grid>
      <Grid item xs={12} md={6} sm={8}>
        <Typography variant="h6">{currentTestimonial.name}</Typography>
        <Typography variant="subtitle2">
          {currentTestimonial.description}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <IconButton onClick={handlePrevious}>
            <ArrowBackIcon />
          </IconButton>
          <IconButton onClick={handleNext}>
            <ArrowForwardIcon />
          </IconButton>
        </Box>
      </Grid>
      <Grid item xs={12} md={1} sm={12}></Grid>
    </Grid>
  );
}

export default Testimonials;
