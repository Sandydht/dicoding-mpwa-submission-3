const webPush = require('web-push');

const vapidKeys = {
    "publicKey": "BJ4rkhDkXkCj6BI6Vc91Sa_jNupFw8lxZlGPnrsWwssemx74YOTxV2jmJzmXltCco0KpQ2uIpxYTwTL2A4Ph_u8",
    "privateKey": "Lw0-fkMTtqI5CgC0sXfT5pY38DBcZdmxoOx7j1XBmeI"
};

webPush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);

const pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/eBQBc6e4hHo:APA91bEfDZDkFkR78FUOo2yRQE-amYtUzsbOsoYHrvOO4cXMZ4OPlKNjSxNvxc7NhGnOyahx4E-4NwRXbO62h9U3M8YGZhWMI2sjy0A0xhuVprh0tczlmAJ-fOUFk4vfKLXC-o5bCeB4",
    "keys": {
        "p256dh": "BObVxfbYO3JTZcfADgAMvgakESn3shinaycjiQemIXpAFcfCJ7Kkno1rZfFjz7CjLCqh+K+hBsakTrmp02vGm3A=",
        "auth": "gOFXulnWN6IC+gDIkiIo2g=="
    }
};

const payload = 'Notifikasi payload';

const options = {
    gcmAPIKey: '308840371031',
    TTL: 60
};

webPush.sendNotification(
    pushSubscription,
    payload,
    options
);