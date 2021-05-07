const admin = require('firebase-admin');

const key = require('./key.json')['firebase-service-account'];
const serviceAccount = require(`./${key}`);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

module.exports = { db, admin };
