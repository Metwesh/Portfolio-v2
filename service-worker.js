self.addEventListener("install", () => {});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    (async () => {
      // Enable navigation preload if it's supported.
      if ("navigationPreload" in self.registration) {
        await self.registration.navigationPreload.enable();
      }
    })()
  );
  self.clients.claim();
});

self.addEventListener("fetch", () => {});
