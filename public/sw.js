






self.addEventListener('install', function(event) {
  console.log('[Service Worker] Installing Service Worker ...', event);
});

self.addEventListener('activate', function(event) {
  console.log('[Service Worker] Activating Service Worker ...', event);
  return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  console.log('[Service Worker] Fetching something ....', event);
  event.respondWith(fetch(event.request));
});









// self.addEventListener('activate', function(event){
//     console.log('activateing sevice woker install',event);
//     return self.clients.claim();
//     })



// let cacheData= "pwa"


// this.addEventListener("install", (event) => {
//     event.waitUntil(
//       caches
//         .open(cacheData)
//         .then((cache) =>
//           cache.addAll([
//             "/",
//             "/_next/static/chunks/app/page.js",
//             "/_next/static/chunks/app/layout.js",
//             "/_next/static/css/app/layout.css",
//             "/_next/static/css/app/page.css",
//             // "/page.js",
//             // "/layout.js",
//             // "/font.js",
//             // "/page.module.css",
//             // "/theme.js",
//             "/appstore/playstore/200x75.png",
//             "/appstore/vikaspedialogos/screenshot-512x512.png",
//             // "/socialmedia2/fb/25*25.png",
//             // "/socialmedia2/fb/35*35.png",
//             // "/socialmedia2/fb/40*40.png",
//             // "/socialmedia2/fb/50*50.png",
//             // "/socialmedia2/fb/75*75.png",
//             "/appstore/vikaspedialogos/LandingPageBg.jpeg",
//             "/appstore/vikaspedialogos/newLogo.png",
//             "/appstore/vikaspedialogos/vikaspediaLogo.png",
//             "/officialslogo/cdac/75x75.png",
//             "/officialslogo/digitalindia/200x70.png",
//             "/officialslogo/meity/200x75.png",

           
           
            
            

            
//           ]),
//         ),
//     );
//   });
  



//     this.addEventListener("fetch", (event)=>{
//         event.respondWith(caches.match(event.request).then((res)=>{
//             if(res){
//                 return res
//             }
//         }))
//     })

// // self.addEventListener('install', function(event){
// //     console.log('installing sevice woker install',event);

// //     })
    
  
//         // self.addEventListener('fetch', function(event){
    
//         //     console.log("fetching sevice event", event);
//         //     event.respondWith(fetch(event.request));
    
    
//         // } )


