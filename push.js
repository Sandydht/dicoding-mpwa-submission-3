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
    "endpoint": "https://fcm.googleapis.com/fcm/send/eNfM3-M__TU:APA91bEyevzG2qCDDSk7PSVmkunYCWWwUn2d-OTwgXfQuO1qVftGrayVeDfNlq0Bi7GMRBxn5-iOgZ2isQnD18GwxIz9qVPgkFC5llINC-m7qgupeVWzatc5i97TTmiyJrx9WuNbdMQU",
    "keys": {
        "p256dh": "BNUTLllpwkiTyoxv5RpU+FHn+YmA/1qG+WiS/3T0h6nIZxobDk4hVgCoCI9yqZnpt4yt/AMSNyWiqNmtjmiYHuU=",
        "auth": "/3TWiFIpTRJ/+7US+JkqHw=="
    }
};

const payload = 'Hello from premiere league';

const options = {
    gcmAPIKey: '122533598104',
    TTL: 60
};

webPush.sendNotification(
    pushSubscription,
    payload,
    options
);