'use client'
import { useEffect } from "react";
import OldLandingPage from "@/container/OldLandingPage";
import Box from "@mui/material/Box";


export default function Home() {


  
  useEffect(() => {
    const registerServiceWorker = async () => {
      if ('serviceWorker' in navigator) {
        try {
          const registration = await navigator.serviceWorker.register('/sw.js');
          console.log('Service Worker registered successfully');

          // Initialize deferredPrompt for later use to show browser install prompt
          let deferredPrompt;

          // Add an event listener for 'beforeinstallprompt' event
          window.addEventListener('beforeinstallprompt', (e) => {
            // Prevent the mini-infobar from appearing
            e.preventDefault();
            // Stash the event so it can be triggered later
            deferredPrompt = e;
            // Show the install prompt to the user
            deferredPrompt.prompt();
            // Optionally, send analytics event that PWA install promo was shown
            console.log(`'beforeinstallprompt' event was fired.`);
          });
        } catch (error) {
          console.error('Service Worker registration failed:', error);
        }
      }
    };

    registerServiceWorker();
  }, []);

 
  return (
    <Box>
      <OldLandingPage />
    </Box>
  );
}
