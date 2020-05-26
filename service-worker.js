importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

workbox.precaching.precacheAndRoute([
    { url: "/index.html", revision: "1" },
    { url: "/nav.html", revision: "1" },
    { url: "/js/nav.js", revision: "1" },
    { url: "/js/materialize.min.js", revision: "1" },
    { url: "/css/materialize.min.css", revision: "1" },
    { url: "/manifest.json", revision: "1" },
]);

workbox.routing.registerRoute(
    new RegExp("pages/"),
    workbox.strategies.staleWhileRevalidate({
        cacheName: "pages"
    })
);

workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    workbox.strategies.cacheFirst({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200],
            }),
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 365,
                maxEntries: 30,
            }),
        ]
    })
);

workbox.routing.registerRoute(
    /\.(?:png|gif|jpg|jpeg|svg)$/,
    workbox.strategies.cacheFirst({
        cacheName: "icons",
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 60,
                maxAgeSeconds: 30 * 24 * 60 * 60,
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