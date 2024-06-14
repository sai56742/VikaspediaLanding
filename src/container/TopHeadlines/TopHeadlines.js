"use client";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState, useEffect } from "react";
import { headlineData } from "./TopHeadlinesData";

function TopHeadlines() {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [firstHalf, setFirstHalf] = useState([]);
  const [secondHalf, setSecondHalf] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const halfLength = Math.ceil(headlineData.length / 2);
      setFirstHalf(headlineData.slice(0, halfLength));
      setSecondHalf(headlineData.slice(halfLength));
      setDataLoaded(true);
    }, 0);
  }, []);

  const renderDescription = (description) => {
    if (Array.isArray(description)) {
      return description.map((line, index) => (
        <Typography key={index} variant="body2">
          {`${index + 1}) ${line}`}
        </Typography>
      ));
    } else {
      return <Typography variant="body2">{description}</Typography>;
    }
  };

  return (
    <Grid container justifyContent="center" p={1} spacing={1} mb={4}>
      <Grid item xs={2} md={2} sm={2}></Grid>

      <Grid item xs={12} md={8} sm={12}>
        <Grid container spacing={1}>
          <Grid item xs={12} m={2}>
            <Typography variant="h6" align="center">
              <strong> Top Stories</strong>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} sm={6}>
            {/* Grid for the first half */}
            {/* <Paper elevation={1}> */}
            {dataLoaded &&
              firstHalf.map((story, index) => (
                <Accordion key={index} sx={{ mt: "4px" }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel${index + 1}-content`}
                    id={`panel${index + 1}-header`}
                  >
                    <Typography variant="body1">
                      <strong> {story.title}</strong>{" "}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2">
                      {renderDescription(story.description)}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            {/* </Paper> */}
          </Grid>
          <Grid item xs={12} md={6} sm={6}>
            {/* Grid for the second half */}
            {/* <Paper elevation={1}> */}
            {dataLoaded &&
              secondHalf.map((story, index) => (
                <Accordion key={index} sx={{ mt: "4px" }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel${
                      index + secondHalf.length + 1
                    }-content`}
                    id={`panel${index + secondHalf.length + 1}-header`}
                  >
                    <Typography variant="body1">
                      <strong> {story.title}</strong>{" "}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2">
                      {renderDescription(story.description)}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            {/* </Paper> */}
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={2} sm={2} md={2}></Grid>
    </Grid>
  );
}

export default TopHeadlines;
