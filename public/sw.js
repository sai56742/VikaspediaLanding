const CACHE_NAME = "static";
const CACHE_DYNAMIC = "dynamic";
const STATIC_CACHE_URLS = [
  "/",
  "/src/container/OldLandingPage/index.js",
  "/src/container/OldLandingPage/Header.js",
  "/src/components/FooterGeneral.js",
  "/src/components/SelectDropdown/index.js",

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

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      } else {
        return fetch(event.request)
          .then(function (res) {
            return caches.open(CACHE_DYNAMIC).then(function (cache) {
              cache.put(event.request.url, res.clone());
              return res;
            });
          })
          .catch(function (err) {});
      }
    })
  );
});
