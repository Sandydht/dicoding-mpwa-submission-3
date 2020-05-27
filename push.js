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
    "endpoint": "https://fcm.googleapis.com/fcm/send/c463LJINAq8:APA91bGzE79zVsDFdkGb8QrioacHGc7xr7a8xovFtf65q0JspK3TaxGxZmb9wIP2KT-5puXvPC2jEKeolbSnO3fRIcmctMnLFqJQusf5KKHsQSnHEmx-xaQWpdNUEGUVCf1JCqVSnpMQ",
    "keys": {
        "p256dh": "BIBigNPdnKZ/TAADCrtDDU5/VjagEqVgwdYGFNGdzlp3DCIbchoB195llQ4ygtC5axmJL4x+93IAPKfDBTLS4Uk=",
        "auth": "LZAyUHXWc+V91S3TI5rwrQ=="
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