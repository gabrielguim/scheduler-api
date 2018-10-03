var admin = require("firebase-admin");

var serviceAccount = require("./scheduler-admin-key");

var firebase = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://schedulerapp-5441c.firebaseio.com"
});

const auth = firebase.auth();

module.exports = {
  firebase,
  auth
}