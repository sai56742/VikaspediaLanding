"use client";

// App.js or any main component
import React, { useEffect } from "react";
import InstallPrompt from "./installPrompt";
import OldLandingPage from "@/container/OldLandingPage"; // Adjust the path as per your project structure
import axios from "axios";

export default function App() {
  useEffect(() => {
    let deferredPrompt; // Store the event globally
    const userAgent = navigator.userAgent;


    // generatePayload()
    

    
    const registerServiceWorker = async () => {
      if ("serviceWorker" in navigator) {
        const registration = await navigator.serviceWorker.register("/sw.js");

        window.addEventListener("beforeinstallprompt", (event) => {});

        window.addEventListener("appinstalled", (event) => {
          // alert("app insatlled");
          generatePayload()


          console.log("app installed",registration);
        });
      }
    };
    registerServiceWorker();
  }, []);




  

// Function to determine browser name and version
function getBrowserInfo(userAgent) {
  let browserName = 'Unknown';
  let browserVersion = 'Unknown';

  if (/Firefox\/\d+/.test(userAgent)) {
    browserName = 'Firefox';
    browserVersion = userAgent.match(/Firefox\/(\d+)/)[1];
  } else if (/Edg\/\d+/.test(userAgent)) {
    browserName = 'Edge';
    browserVersion = userAgent.match(/Edg\/(\d+)/)[1];
  } else if (/Chrome\/\d+/.test(userAgent)) {
    browserName = 'Chrome';
    browserVersion = userAgent.match(/Chrome\/(\d+)/)[1];
  } else if (/Safari\/\d+/.test(userAgent)) {
    browserName = 'Safari';
    browserVersion = userAgent.match(/Version\/(\d+)/)[1];
  } else if (/MSIE \d+/.test(userAgent) || /Trident\/\d+/.test(userAgent)) {
    browserName = 'Internet Explorer';
    browserVersion = userAgent.match(/(MSIE |rv:)(\d+)/)[2];
  }

  return { browserName, browserVersion };
}

// Function to determine OS and platform
function getOSInfo(userAgent) {
  let osVersion = 'Unknown';
  let platform = 'Unknown';

  if (/Windows NT/.test(userAgent)) {
    osVersion = 'Windows';
  } else if (/Mac OS X/.test(userAgent)) {
    osVersion = 'macOS';
  } else if (/Android/.test(userAgent)) {
    osVersion = 'Android';
  } else if (/iPhone|iPad/.test(userAgent)) {
    osVersion = 'iOS';
  }

  if (/Windows/.test(userAgent)) {
    platform = 'Windows';
  } else if (/Macintosh/.test(userAgent)) {
    platform = 'macOS';
  } else if (/Android/.test(userAgent)) {
    platform = 'Android';
  } else if (/iPhone|iPad/.test(userAgent)) {
    platform = 'iOS';
  }

  return { osVersion, platform };
}







  function generatePayload() {
    const userAgent = navigator.userAgent;
    const { browserName, browserVersion } = getBrowserInfo(userAgent);
    const { osVersion, platform } = getOSInfo(userAgent);
    const hostUrl = window.location.href;
  
    // Fetch IP address
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
        const ipAddress = data.ip;
  
        const payload = {
          browserVersion: browserVersion,
          browser: browserName,
          fcmToken: "sw", // Assuming a static value for fcmToken
          ipAddress: ipAddress,
          appVersion: "pwa", // Assuming a static value for appVersion
          language: hostUrl, // Getting browser language
          osVersion: osVersion,
          platform: platform,
        };
  
        console.log('Generated Payload:', payload);



        const apiUrl = 'https://contentms.vikaspedia.in/vikaspedia/storeFcmToken'; // Replace with your API endpoint
      const headers = {
        'Content-Type': 'application/json',

        // 'Authorization': 'Bearer YOUR_ACCESS_TOKEN', // Replace with your actual token if needed
      };

      axios.post(apiUrl, payload, {
        headers: headers,
      }).then(response=>{
        console.log('Success:', response);
      }) .catch(error => {
        console.error('Error:', error);
      });
      

     


  
        // You can now use the payload for further processing or API calls
      })
      .catch(error => {
        console.error('Error fetching IP address:', error);
      });
  }

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
