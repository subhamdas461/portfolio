const CACHE_NAME = "c-ver-1"
const urlsToCache = ["index.html","offline.html"];

// Install SW
this.addEventListener("install",(evt)=>{
    evt.waitUntil(
        caches.open(CACHE_NAME)
        .then((cache)=>{
            console.log("Opened Cache:",cache)
            return cache.addAll(urlsToCache);
        })
    )
})

// Listen for request
this.addEventListener("fetch",(evt)=>{
    evt.respondWith(
        caches.match(evt.request)
        .then(()=>{
            return fetch(evt.request)
            .catch(()=>caches.match("offline.html"))
        })
    )
})

// Activate the SW
this.addEventListener("activate",(evt)=>{
    const cacheWhitelist = []
    cacheWhitelist.push(CACHE_NAME)
    evt.waitUntil(
        caches.keys().then((cacheNames)=> Promise.all(
            cacheNames.map( (cacheName) =>{
                if(!cacheWhitelist.includes(cacheName)){
                    return caches.delete(cacheName);
                }
            })
        ))
    )
})