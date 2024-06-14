import React from "react";
import { Paper, Typography, Grid, Box } from "@mui/material";

const overlayStyle = {
  backgroundColor: "rgba(255, 255, 255, 0.5)",
  transition: "opacity 0.3s ease",
};

const DynamicCard = ({ imageUrl, title, description, url }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Paper
        elevation={4}
        variant="outlined"
        sx={{
          backgroundImage: `url(${imageUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          cursor: "pointer",
          "&:hover": {
            opacity: 0.8,
          },
        }}
        height="100%"
      >
        <Box sx={overlayStyle}>
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {description}
          </Typography>

          <Box
            component="a"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit URL"
          ></Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default function DynamicCardGrid() {
  // Sample data
  const cardData = [
    {
      imageUrl: "https://source.unsplash.com/random?consumer",
      title: "Lorem Ipsum 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      url: "https://example.com",
      like: true,
    },
    {
      imageUrl: "https://source.unsplash.com/random?nature",
      title: "Lorem Ipsum 2",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      url: "https://example.com",
      like: false,
    },
    // Add more card data as needed
  ];

  return (
    <Box mt={5}>
      <Grid container spacing={2}>
        {cardData.map((data, index) => (
          <DynamicCard key={index} {...data} />
        ))}
      </Grid>
    </Box>
  );
}
