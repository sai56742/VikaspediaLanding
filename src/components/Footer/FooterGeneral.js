"use client";
import React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Avatar from "@mui/material/Avatar";
import Link from "next/link";

const FooterGeneral = ({ selectedLang }) => {
  const CdacIcon = "./officialslogo/cdac/75x75.png";
  const DigitalIndiaIcon = "./officialslogo/digitalindia/200x70.png";
  const MeityIcon = "./officialslogo/meity/200x75.png";

  const AppStoreIcon = "./appstore/appstore/200x75.png";
  const PlayStoreIcon = "./appstore/playstore/200x75.png";

  const officialLinks = [
    {
      icon: CdacIcon,
      label: "C-DAC",
      url: "https://www.cdac.in/",
      hoverText: selectedLang?.cdacLogoText,
    },
    {
      icon: DigitalIndiaIcon,
      label: "Digital India",
      url: "https://digitalindia.gov.in/",
      hoverText: selectedLang?.digitalIndiaLogoText,
    },
    {
      icon: MeityIcon,
      label: "MeitY",
      url: "https://www.meity.gov.in/",
      hoverText: selectedLang?.meityLogoText,
    },
  ];

  const storeLinks = [
    {
      icon: AppStoreIcon,
      label: "AppStore",
      url: "https://apps.apple.com/in/app/vikaspedia/id1527052818",
      hoverText: selectedLang?.appstoreLogoText,
    },
    {
      icon: PlayStoreIcon,
      label: "PlayStore",
      url: "https://play.google.com/store/apps/details?id=com.cdac.vikaspediabrowserstudio&hl=en_US&gl=US&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1",
      hoverText: selectedLang?.playstoreLogoText,
    },
  ];

  const socialLinks = [
    {
      icon: FacebookIcon,
      label: "Facebook",
      url: "https://www.facebook.com/vikaspedia/",
      hoverText: selectedLang?.facebookLogoText,
    },
    {
      icon: InstagramIcon,
      label: "Instagram",
      url: "https://www.instagram.com/vikaspedia/",
      hoverText: selectedLang?.instagramLogoText,
    },
    {
      icon: LinkedInIcon,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/vikaspedia-india/",
      hoverText: selectedLang?.linkedinLogoText,
    },
    {
      icon: XIcon,
      label: "Twitter",
      url: "https://twitter.com/vikaspedia",
      hoverText: selectedLang?.twitterLogoText,
    },
    {
      icon: YouTubeIcon,
      label: "YouTube",
      url: "https://www.youtube.com/@vikaspedia",
      hoverText: selectedLang?.youtubeLogoText,
    },
  ];

  const today = new Date();

  function getOrdinalSuffix(day) {
    if (day > 3 && day < 21) return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }

  const day = today.getDate();
  const month = today.toLocaleDateString("en-US", { month: "long" });
  const year = today.getFullYear();
  const formattedDate = `${day}${getOrdinalSuffix(day)} ${month}, ${year}`;

  return (
    <Box
      p={1}
      sx={{ backgroundColor: "#4d4d4d", color: "#ffffff" }}
      component={"footer"}
    >
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={0.5}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            rowSpacing={0}
            columnSpacing={4}
          >
            {officialLinks.map((data, index) => (
              <Grid item key={`${data?.label}-${index}`}>
                <a
                  href={data?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  style={{ textDecoration: "none" }}
                  title={data?.hoverText}
                >
                  <img
                    src={data?.icon}
                    alt={data?.label}
                    style={{
                      width: "auto",
                      height: "40px",
                      cursor: "pointer",
                    }}
                  />
                </a>
              </Grid>
            ))}
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            rowSpacing={0.5}
            columnSpacing={4}
          >
            {storeLinks.map((data, index) => (
              <Grid item key={`${data?.label}-${index}`}>
                <a
                  key={index}
                  href={data?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={data?.hoverText}
                >
                  <img
                    src={data?.icon}
                    alt={data?.label}
                    style={{
                      width: "auto",
                      height: "40px",
                      cursor: "pointer",
                    }}
                  />
                </a>
              </Grid>
            ))}
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            {socialLinks.map((data, index) => {
              return (
                <Grid item key={`${data?.label}-${index}`}>
                  <Avatar
                    href={data?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={data?.hoverText}
                    alt={data?.label}
                    component={Link}
                    sx={{
                      bgcolor: "#000000",
                    }}
                    variant="circular"
                  >
                    <data.icon fontSize="medium" />
                  </Avatar>
                </Grid>
              );
            })}
          </Grid>

          <Grid item xs={12}>
            <Box display={"flex"} justifyContent={"center"} mt={1}>
              <Typography variant="body2" align="center">
                {selectedLang?.lastmodified}
              </Typography>
              <Typography variant="body2" align="center">
                &nbsp;-&nbsp;{formattedDate}
                &nbsp;&copy; {selectedLang?.lastmodifiedCdac}.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FooterGeneral;
