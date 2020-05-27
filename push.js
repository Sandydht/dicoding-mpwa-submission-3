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
    "endpoint": "https://fcm.googleapis.com/fcm/send/fU6OVuNRR44:APA91bF8OBAdFaJ9Mm5KlolnzBDMyVU-v6-WANXW4GLlslIZxRz0-8Xm372LmFsCSbr5Rp-y9TSCIbZPgcLOIVbNVTrjNVgK9e3TlY2rRQHGT-eEZSlQtsgxManyQbsvOaQkQQFPg9qI",
    "keys": {
        "p256dh": "BD9mi0u/adjuPmUKfDu4d2aAS1LWIfLmfLDmu7XQOWBeY0UtWcuOeAN3d+jnLGePrxS0sNMAqkMG/VdyGUvdpeA=",
        "auth": "9m5dMwbz/l9gDzgje7DlGA=="
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