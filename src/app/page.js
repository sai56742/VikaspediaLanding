'use client'
import { useEffect } from "react";
import OldLandingPage from "@/container/OldLandingPage";
import Box from "@mui/material/Box";


export default function Home() {


  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then(() => {
          console.log('Service Worker registered successfully');
        })
        .catch((error) => {
          console.error('Service Worker registration failed:', error);
        });
    }

    
  }, []);


 
  return (
    <Box>
      <OldLandingPage />
    </Box>
  );
}
