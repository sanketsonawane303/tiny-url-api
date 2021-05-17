const admin = require('firebase-admin');

const serviceAccount = JSON.parse(
  Buffer.from(process.env.FIREBASE_CREDS_BASE64, 'base64').toString('ascii')
);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// Set last_code to some inital value if not set.
const infoRef = db.collection('details').doc('info');
infoRef
  .get()
  .then((data) => {
    const code = 'axbi';

    if (!data.exists) return infoRef.set({ lastCode: code });

    const { lastCode } = data.data();
    if (!lastCode) infoRef.set({ lastCode: code });
  })
  .catch((err) => {
    console.log(err);
    process.exit();
  });

module.exports = { db, admin };
