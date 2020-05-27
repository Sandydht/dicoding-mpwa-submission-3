importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

workbox.precaching.precacheAndRoute([
    { url: "/index.html", revision: "1" },
    { url: "/nav.html", revision: "1" },
    { url: "/standings.html", revision: "1" },
    { url: "/js/nav.js", revision: "1" },
    { url: "/js/materialize.min.js", revision: "1" },
    { url: "/js/payload.js", revision: "1" },
    { url: "/js/api.js", revision: "1" },
    { url: "/js/db.js", revision: "1" },
    { url: "/js/idb.js", revision: "1" },
    { url: "/css/materialize.min.css", revision: "1" },
    { url: "/manifest.json", revision: "1" },
    { url: "/pages/home.html", revision: "1" },
    { url: "/pages/saved.html", revision: "1" },
    { url: "/images/icons/icon-72x72.png", revision: "1" },
    { url: "/images/icons/icon-96x96.png", revision: "1" },
    { url: "/images/icons/icon-128x128.png", revision: "1" },
    { url: "/images/icons/icon-144x144.png", revision: "1" },
    { url: "/images/icons/icon-152x152.png", revision: "1" },
    { url: "/images/icons/icon-192x192.png", revision: "1" },
    { url: "/images/icons/icon-384x384.png", revision: "1" },
    { url: "/images/icons/icon-512x512.png", revision: "1" },
]);

workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    workbox.strategies.cacheFirst({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200]
            }),
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 365,
                maxEntries: 30
            })
        ]
    })
);

self.addEventListener("push", function (event) {
    const title = "Premiere League";
    const options = {
        body: event.data.text(),
        icon: "/images/icons/icon-512x512.png"
    }

    event.waitUntil(self.registration.showNotification(title, options));
});