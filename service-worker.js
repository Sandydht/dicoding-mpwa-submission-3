importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

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
],
    {
        ignoreURLParametersMatching: [/.*/]
    });

workbox.routing.registerRoute(
    new RegExp("https://api.football-data.org/v2/"),
    new workbox.strategies.CacheFirst()
)

self.addEventListener("push", function (event) {
    const title = "Premiere League";
    const options = {
        body: event.data.text(),
        icon: "/images/icons/icon-512x512.png"
    }

    event.waitUntil(self.registration.showNotification(title, options));
});