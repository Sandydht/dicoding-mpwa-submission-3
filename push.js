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
    "endpoint": "https://fcm.googleapis.com/fcm/send/eSyQKNr8PhA:APA91bENu058dALIO42c86z1GWHrUJJP0OAHKCB2xamx1FjjBcLF4zQs7SETFbm88Cf1ADLhixmSPDrHL3b7_LjA3_inHpmxsrNgpIoOvnqYZOtaUyTgEXeT7BHPWkcL7-KjKktMpa2P",
    "keys": {
        "p256dh": "BNdxmsFsg0MykXDdQPqHxWqntjcROJ2wHkI1xZ1E+B+agK0dr/Cefrt9Qicjuk3ZsxJLBISWmh72RdCuDnQzHz4=",
        "auth": "e+89M9bHpw8vU+6g5C0ngQ=="
    }
};

const payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';

const options = {
    gcmAPIKey: '308840371031',
    TTL: 60
};

webPush.sendNotification(
    pushSubscription,
    payload,
    options
);