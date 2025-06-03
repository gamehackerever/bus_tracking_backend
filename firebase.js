const admin = require("firebase-admin");
const serviceAccount = require("./nitc-bus-tracking-firebase-adminsdk-fbsvc-f743ebe8c5.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;
