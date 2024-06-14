self.addEventListener('activate', function(event){
    console.log('activateing sevice woker install',event);
    return self.clients.claim();
    })



let cacheData= "pwa"


this.addEventListener("install", (event) => {
    event.waitUntil(
      caches
        .open(cacheData)
        .then((cache) =>
          cache.addAll([
            // "/",
            "/appstore/playstore/200x75.png",
            "/appstore/vikaspedialogos/screenshot-512x512.png",
            "/appstore/vikaspedialogos/LandingPageBg.jpeg",
            "/favicon.ico",
            "/appstore/vikaspedialogos/newLogo.png",
            "./officialslogo/cdac/75x75.png",
            "./officialslogo/digitalindia/200x70.png",
            "./officialslogo/meity/200x75.png"

            
          ]),
        ),
    );
  });
  



    this.addEventListener("fetch", (event)=>{
        event.respondWith(caches.match(event.request).then((res)=>{
            if(res){
                return res
            }
        }))
    })

// self.addEventListener('install', function(event){
//     console.log('installing sevice woker install',event);

//     })
    
  
        // self.addEventListener('fetch', function(event){
    
        //     console.log("fetching sevice event", event);
        //     event.respondWith(fetch(event.request));
    
    
        // } )


