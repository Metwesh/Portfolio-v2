self.addEventListener("install", () => {});

self.addEventListener("activate", () => self.clients.claim());

self.addEventListener("fetch", () => {});
