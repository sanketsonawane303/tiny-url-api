const express = require('express');
const Joi = require('joi');
const db = require('../firebase/config');
const nextCode = require('../functions/nextCode');

const router = express.Router();

router.post('/', async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const { lastCode } = (
    await db.collection('details').doc('info').get()
  ).data();

  const code = nextCode(lastCode);

  const data = {
    code,
    url: req.body.url,
    count: 0,
  };

  await db.collection('urls').doc(code).set(data);
  await db.collection('details').doc('info').set({ lastCode: code });

  res.status(200).send({ code });
});

function validate(url) {
  const schema = Joi.object({
    url: Joi.string().required(),
  });

  return schema.validate(url);
}

module.exports = router;
