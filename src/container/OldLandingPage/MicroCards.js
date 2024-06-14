"use client";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Grid, Fade, Grow, Slide, Zoom, Typography } from "@mui/material";
import Link from "next/link";

const brands = [
  {
    name: "viki1",
    logo: "./micro/viki_s1.png",
    href: "https://google.com",
  },
  {
    name: "viki2",
    logo: "./micro/viki_s2.png",
    href: "https://google.com",
  },
  {
    name: "viki3",
    logo: "./micro/viki_s3.png",
    href: "https://google.com",
  },
  {
    name: "viki4",
    logo: "./micro/viki_s4.png",
    href: "https://google.com",
  },
  {
    name: "viki5",
    logo: "./micro/viki_s5.png",
    href: "https://google.com",
  },
  {
    name: "viki6",
    logo: "./micro/viki_s6.png",
    href: "https://google.com",
  },
  {
    name: "viki7",
    logo: "./micro/viki_s7.png",
    href: "https://google.com",
  },
  {
    name: "viki8",
    logo: "./micro/viki_s8.png",
    href: "https://google.com",
  },
  {
    name: "viki9",
    logo: "./micro/viki_s9.png",
    href: "https://google.com",
  },
  {
    name: "viki10",
    logo: "./micro/viki_s10.png",
    href: "https://google.com",
  },
  {
    name: "viki11",
    logo: "./micro/viki_s11.png",
    href: "https://google.com",
  },
  {
    name: "viki12",
    logo: "./micro/viki_s12.png",
    href: "https://google.com",
  },
  {
    name: "viki13",
    logo: "./micro/viki_s13.png",
    href: "https://google.com",
  },
  {
    name: "viki14",
    logo: "./micro/viki_s14.png",
    href: "https://google.com",
  },
  {
    name: "viki15",
    logo: "./micro/viki_s15.png",
    href: "https://google.com",
  },
  {
    name: "viki16",
    logo: "./micro/viki_s16.png",
    href: "https://google.com",
  },
  {
    name: "viki17",
    logo: "./micro/viki_s17.png",
    href: "https://google.com",
  },
  {
    name: "viki18",
    logo: "./micro/viki_s18.png",
    href: "https://google.com",
  },
  {
    name: "viki19",
    logo: "./micro/viki_s19.svg",
    href: "https://google.com",
  },
  {
    name: "viki20",
    logo: "./micro/viki_s20.png",
    href: "https://google.com",
  },
  {
    name: "viki21",
    logo: "./micro/viki_s21.png",
    href: "https://google.com",
  },
];

const MicroCard = () => {
  const theme = useTheme();
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Typography align="center" color={"primary"} variant="h5">
          Vikaspedia offered Micro Site
        </Typography>
      </Grid>
      {brands.map(({ name, logo, href }, index) => {
        return (
          <Grid item key={name}>
            <Box
              sx={{
                cursor: "pointer",

                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1)",
                  background: theme.palette.grey.A200,
                },
                p: 1,
                borderRadius: "50%",
                border: `1px solid`,
                borderLeftColor: "#ed1b23",
                borderRightColor: "#0094d9",
                borderTopColor: "#00452a",
                borderBottomColor: "#fec10c",
                animation: "$spin 1.5s linear infinite",
              }}
            >
              <Link
                href={href}
                alt={name}
                target="_blank"
                style={{ textDecoration: "none", display: "block" }}
              >
                <img
                  src={logo}
                  alt={name}
                  style={{
                    display: "block",
                    transition: "opacity 0.3s ease-in-out",
                    width: "100px",
                    height: "100px",
                  }}
                />
              </Link>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default MicroCard;
