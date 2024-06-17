const CACHE_STATIC = "static";
const CACHE_DYNAMIC = "dynamic";

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_STATIC).then(function (cache) {
      console.log("[Service Worker] Precaching App Shell");
      cache.addAll([
        "/",
        "/_next/static/chunks/app/layout.js",
        "/_next/static/chunks/app/page.js",
        "/_next/static/css/app/page.css",
        "/_next/static/css/app/layout.css",
        "/_next/static/chunks/app-pages-internals.js",
        "/appstore/vikaspedialogos/newLogo.png",
        "/appstore/vikaspedialogos/vikaspediaLogo.png",
        "/appstore/appstore/200x75.png",
        "/appstore/playstore/200x75.png",
        "/appstore/vikaspedialogos/LandingPageBg.jpeg",
        "/officialslogo/cdac/75x75.png",
        "/officialslogo/digitalindia/200x70.png",
        "/officialslogo/meity/200x75.png",
        // "https://static.vikaspedia.in/media/pwa/logo144.png",
        // "https://vikaspedia.in/appstore/vikaspedialogos/newLogo.png",
      ]);
    })
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
      .then((cached) => cached || fetch(event.request)) // otherwise request network
    // .then(
    //   (response) =>
    //     cache(event.request, response) // put response in cache
    //       .then(() => response) // resolve promise with the network response
    // )
  );
});

// self.addEventListener("fetch", function (event) {
//   event.respondWith(
//     caches
//       .match(event.request)
//       .then(function (response) {
//         if (response) {
//           return response || event.request.url;
//         } else {
//           // return fetch(event.request)
//           //   .then(function (res) {
//           //     return caches.open(CACHE_DYNAMIC).then(function (cache) {
//           //       cache.put(event.request.url, res.clone());
//           //       return res;
//           //     });
//           //   })
//           //   .catch(function (err) {});
//         }
//       })
//       .catch((err) => {
//         console.log("check the err===>");
//       })
//   );
// });
