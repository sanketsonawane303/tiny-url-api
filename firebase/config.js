const admin = require('firebase-admin');

const key = require('./key.json')['firebase-service-account'];
const serviceAccount = require(`./${key}`);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// Only exporting 'db' and not 'admin'
// Since only Firestore is required in the application
module.exports = db;
