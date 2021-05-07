const express = require('express');
const db = require('../firebase/config');

const router = express.Router();

router.get('/:id', async (req, res) => {
  const code = req.params.id;

  const doc = await db.collection('urls').doc(code).get();
  if (!doc.exists) return res.status(404).send('Site not found');

  res.status(200).redirect(doc.data().url);
});

module.exports = router;
