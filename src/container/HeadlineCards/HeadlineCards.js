"use client";

import { Card, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { headlineCardsData } from "./HeadlineCardData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HeadlineCards() {
  const sliderSettings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Grid
      container
      spacing={2}
      backgroundColor={"black"}
      justifyContent={"center"}
    >
      <Grid item xs={10}>
        <Slider {...sliderSettings}>
          {headlineCardsData.map((data, index) => (
            <Grid item key={index} title={data.title}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  margin: "8px",
                }}
              >
                <Typography
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    margin: "2px",
                  }}
                  variant="body2"
                  gutterBottom
                >
                  <strong>{data.title}</strong>
                </Typography>
                <a href={data.link} target="_blank" rel="noopener noreferrer">
                  <CardMedia
                    component="img"
                    height="100"
                    src={data.image}
                    alt={data.title}
                  />
                </a>
              </Card>
            </Grid>
          ))}
        </Slider>
      </Grid>
    </Grid>
  );
}

export default HeadlineCards;
