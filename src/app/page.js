'use client'

// App.js or any main component
import React, { useEffect } from 'react';
import InstallPrompt from './installPrompt';
import OldLandingPage from '@/container/OldLandingPage'; // Adjust the path as per your project structure

export default function App() {


  // let deferredPrompt = null;

  // useEffect(() => {
  //   const registerServiceWorker = async () => {
  //     if ('serviceWorker' in navigator) {
  //       try {
  //         const registration = await navigator.serviceWorker.register('/sw.js');
  //         console.log('Service Worker registered successfully');
         
  //         // Add event listener for 'beforeinstallprompt' event
  //         window.addEventListener('beforeinstallprompt', (e) => {
  //           console.log('beforeinstallprompt event fired');
           

  //           // Prevent the default browser prompt
  //           e.preventDefault();

  //           // Stash the event so it can be triggered later
  //           deferredPrompt = e;

  //           // Show the install prompt immediately
  //           showInstallPrompt();
  //         });
  //       } catch (error) {
  //         console.error('Service Worker registration failed:', error);
  //       }
  //     }
  //   };

  //   registerServiceWorker();

  //   // Clean up event listener on component unmount
  //   return () => {
  //     window.removeEventListener('beforeinstallprompt', () => {});
  //   };
  // }, []);

  // const showInstallPrompt = () => {
  //   if (deferredPrompt) {

  //     alert("install")
  //     // Show the browser's native install prompt
  //     deferredPrompt.prompt();

  //     // Wait for the user's response
  //     deferredPrompt.userChoice.then((choiceResult) => {
  //       if (choiceResult.outcome === 'accepted') {
  //         console.log('User accepted the install prompt');
  //       } else {
  //         console.log('User dismissed the install prompt');
  //       }

  //       // Reset deferredPrompt
  //       deferredPrompt = null;
  //     });
  //   }
  // };



  return (
    <>
      {/* <InstallPrompt /> */}
      <OldLandingPage />
    </>
  );
}
