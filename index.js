const express = require('express');
const db = require('./firebase/config');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const port = process.env.PORT || 9000;
app.listen(port, () => console.log(`listening on http://localhost:${9000}`));
