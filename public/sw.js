self.addEventListener('install', function(event){
    console.log('installing sevice woker install',event);
    })
    
    self.addEventListener('activate', function(event){
        console.log('activateing sevice woker install',event);
        return self.clients.claim();
        })
    
    
        self.addEventListener('fetch', function(event){
    
            console.log("fetching sevice event", event);
            event.respondWith(fetch(event.request));
    
    
        } )