const admin = require('firebase-admin');

const key = require('./key.json')['firebase-service-account'];
const serviceAccount = require(`./${key}`);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// Set last_code to some inital value while if not set.
const infoRef = db.collection('details').doc('info');
infoRef
  .get()
  .then(({ lastCode }) => {
    if (!lastCode) infoRef.set({ lastCode: 'axbi' });
  })
  .catch((err) => process.exit());

module.exports = { db, admin };
