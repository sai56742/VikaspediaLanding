"use client";
import { createTheme } from "@mui/material/styles";
import { Noto_Serif_Devanagari, Noto_Sans_Ol_Chiki } from "next/font/google";

const devanagari = Noto_Serif_Devanagari({
  subsets: ["devanagari", "latin", "latin-ext"],
});
const santhaliText = Noto_Sans_Ol_Chiki({
  subsets: ["ol-chiki", "latin", "latin-ext"],
});

const theme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: [
      devanagari.style.fontFamily,
      santhaliText.style.fontFamily,
    ].join(","),
  },
});

export default theme;
