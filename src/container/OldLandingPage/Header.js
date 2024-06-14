import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { vikaspediaNames } from "@/utils/constant";
import { red, blue, green, amber } from "@mui/material/colors";
import NewSearch from "./NewSearch";

const Header = () => {
  const [currentName, setCurrentName] = useState(0);
  const [currentColor, setCurrentColor] = useState(red[500]);

  useEffect(() => {
    const colors = [red[500], blue[500], amber[500], green[900]];

    const intervalColors = setInterval(() => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setCurrentColor(randomColor);
    }, 500);

    const intervalNames = setInterval(() => {
      setCurrentName(
        (currentName) => (currentName + 1) % vikaspediaNames.length
      );
    }, 800);

    return () => {
      clearInterval(intervalColors);
      clearInterval(intervalNames);
    };
  }, []);

  return (
    <Box>
      <Grid
        container
        spacing={1}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item xs={12} sm={4} md={3}>
          <Box
            display={"flex"}
            justifyContent={"center"}
            sx={{ margin: "auto" }}
          >
            <img
              srcSet={"/appstore/vikaspedialogos/newLogo.png"}
              src={"/appstore/vikaspedialogos/newLogo.png"}
              alt={"Vikaspedia"}
              title={"Vikaspedia"}
              style={{
                width: "var(--l-width)",
                maxWidth: "100px",
                minWidth: "40px",
                height: "auto",
              }}
            />
          </Box>
          <Typography color={currentColor} align="center" variant="h6">
            <strong>{vikaspediaNames[currentName]}</strong>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={9}>
          <NewSearch />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
