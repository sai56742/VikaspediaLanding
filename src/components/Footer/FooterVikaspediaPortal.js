"use client";
import React from "react";

import Link from "next/link";
import MUILink from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";

const FooterVikaspediaPortal = ({ selectedLang }) => {
  return (
    <Typography align={"center"} variant="h6" mt={1} component={"h1"}>
      {selectedLang?.aboutPortal1Text}
      {/* &nbsp;
      <MUILink
        href={"https://www.meity.gov.in/"}
        variant="body2"
        title={selectedLang?.meityLogoText}
        target="_blank"
        component={Link}
        sx={{
          color: blue[900],
          textDecoration: "none",
          "&:hover": { textDecoration: "underline" },
        }}
      >
        <strong>
          <i>{selectedLang?.meityText}</i>
        </strong>
        &nbsp;
      </MUILink>
      {selectedLang?.aboutPortal2Text}
      &nbsp;
      <MUILink
        href={"https://cdac.in/index.aspx?id=HY"}
        variant="body2"
        title={selectedLang?.cdacLogoText}
        target="_blank"
        component={Link}
        sx={{
          color: blue[900],
          textDecoration: "none",
          "&:hover": { textDecoration: "underline" },
        }}
      >
        <strong>
          <i>{selectedLang?.cdacText}</i>
        </strong>
        &nbsp;
      </MUILink>
      {selectedLang?.aboutPortal3Text}
      {selectedLang?.aboutPortal4Text} */}
    </Typography>
  );
};

export default FooterVikaspediaPortal;
