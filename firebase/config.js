var firebase = require("firebase-admin");

var serviceAccount = require("./scheduler-admin-key.json");

firebase.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://schedulerapp-5441c.firebaseio.com"
});

module.exports = firebase;