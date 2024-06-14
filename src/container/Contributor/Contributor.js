import React from "react";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import { ContributorData } from "./ContributorData";

function Contributors() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={1}
      p={2}
    >
      <Grid item xs={12}>
        <Typography variant="h6" align="center" gutterBottom>
          <strong>{` ${ContributorData.length} individuals are supporting to vikaspedia `}</strong>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        >
          {ContributorData.map((contributor, index) => (
            <a
              key={index}
              href={contributor.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Avatar
                alt={contributor.name}
                src={contributor.imageUrl}
                sx={{ width: 70, height: 70, mr: "8px", mb: "4px" }}
                title={contributor.name}
              />
            </a>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
}

export default Contributors;
