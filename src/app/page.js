'use client'
import { useEffect } from "react";
import OldLandingPage from "@/container/OldLandingPage";
import Box from "@mui/material/Box";


export default function Home() {

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('Service worker registered:', registration.scope);
        })
        .catch((err) => {
          console.warn('Service worker registration failed:', err);
        });
    }

var deferredPrompt;

window.addEventListener('beforeinstallprompt', function(event) {
  console.log('beforeinstallprompt fired');
  // event.preventDefault();
  // deferredPrompt = event;
  // return false;

  event.prompt()
  
});
  }, []);


  return (
    <Box>
      <OldLandingPage />
    </Box>
  );
}
