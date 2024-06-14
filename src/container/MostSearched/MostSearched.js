"use client";
import React, { useState } from "react";
import {
  Grid,
  Box,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { MostSearchedData } from "./MostSearchedData";

function MostSearched() {
  const [visibleCards, setVisibleCards] = useState(3); // Number of initially visible cards
  const [showMore, setShowMore] = useState(true); // Flag to show "Show More" button

  const handleShowMore = () => {
    setVisibleCards(visibleCards + 3); // Increase visible cards by 5
    if (visibleCards + 3 >= MostSearchedData.length) {
      setShowMore(false); // Hide "Show More" button when all cards are visible
    }
  };

  return (
    <Grid container justifyContent="center" spacing={2} mb={2}>
      <Grid item xs={12} md={8} sm={12} m={1}>
        <Box border={1} p={2} mx="auto">
          <Typography variant="h6" align="center" gutterBottom>
            <strong>Most Searched News</strong>
          </Typography>
          {MostSearchedData.slice(0, visibleCards).map((item, index) => (
            <Card
              key={index}
              variant="outlined"
              style={{
                marginTop: 16,
                borderRadius: "16px",
                backgroundColor: "rgba(224, 242, 241, 0.5)",
              }} // Transparent background color
            >
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {item.headline}
                </Typography>
                <Typography variant="body2">{item.news}</Typography>
              </CardContent>
            </Card>
          ))}
          {showMore && (
            <Box mt={2} align="center">
              <Button size="small" variant="contained" onClick={handleShowMore}>
                Show More
              </Button>
            </Box>
          )}
        </Box>
      </Grid>
    </Grid>
  );
}

export default MostSearched;
