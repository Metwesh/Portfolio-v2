// install service worker
self.addEventListener('install', (e) => {
    console.log("Service worker has been installed", e)
})

// activate service worker
self.addEventListener('activate', (e) => {
    console.log("Service worker has been activated", e)
})