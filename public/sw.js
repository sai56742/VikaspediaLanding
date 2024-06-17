const CACHE_NAME = "static";
const STATIC_CACHE_URLS = [
  "/",
  "/_next/static/chunks/app/layout.js",
  "/_next/static/chunks/app/page.js",
  "/_next/static/css/app/page.css",
  "/_next/static/css/app/layout.css",
  "/_next/static/chunks/webpack.js",
  "/_next/static/chunks/app-pages-internals.js",
  "/appstore/vikaspedialogos/newLogo.png",
  "/appstore/vikaspedialogos/vikaspediaLogo.png",
  "/appstore/appstore/200x75.png",
  "/appstore/playstore/200x75.png",
  "/appstore/vikaspedialogos/LandingPageBg.jpeg",
  "/officialslogo/cdac/75x75.png",
  "/officialslogo/digitalindia/200x70.png",

  "/officialslogo/meity/200x75.png",
  "https://static.vikaspedia.in/media/pwa/logo144.png",
  "https://vikaspedia.in/appstore/vikaspedialogos/newLogo.png",
];

self.addEventListener("install", function (event) {
  // console.log("[Service Worker] Installing Service Worker ...", event);
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_CACHE_URLS))
  );
});

self.addEventListener("activate", function (event) {
  // console.log("[Service Worker] Activating Service Worker ...", event);
  return self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  // Cache-First Strategy
  event.respondWith(
    caches
      .match(event.request) // check if the request has already been cached
      .then(
        (cached) =>
          // console.log("cached files ===>")

          cached || fetch(event.request)
      )
      .catch()
  );
});
