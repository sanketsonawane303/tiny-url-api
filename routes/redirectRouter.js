const express = require('express');
const { db, admin } = require('../firebase/config');

const router = express.Router();

router.get('/:id', async (req, res) => {
  const code = req.params.id;

  const doc = await db.collection('urls').doc(code).get();
  if (!doc.exists) return res.status(404).send('Site not found');

  await db
    .collection('urls')
    .doc(code)
    .update({
      count: admin.firestore.FieldValue.increment(1),
    });

  res.status(200).redirect(doc.data().url);
});

module.exports = router;
