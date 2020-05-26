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
    "endpoint": "https://fcm.googleapis.com/fcm/send/enyZ0t_6GD4:APA91bGosG75nGygQFnVCsCLDkHXxkZMag2I1M7LYKjkKdVkbMr3b8j9FubWZMnIOur0gEi1TSfH6uuNn-uX0uiYuuOpgYViXC9YILdecnCgOr_hXYpofG8VOrFXJsKZKu4N6Az50wHy",
    "keys": {
        "p256dh": "BGaDP8gAlbRVInpiJS7pssG9GUksChqU3VYYuhdzclphh9b+XC/gZgVi6ObGXeryN/fvX2ceZkkled3X3EsUSM4=",
        "auth": "GSiShpKaLcm5ui6GOExwlA=="
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