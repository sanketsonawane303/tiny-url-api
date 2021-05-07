const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
require('express-async-errors');
const newRouter = require('./routes/newRouter');
const redirectRouter = require('./routes/redirectRouter');

const app = express();

app.use(morgan('tiny'));
app.use(bodyParser.json());

app.use('/new', newRouter);
app.use('/', redirectRouter);

const port = process.env.PORT || 9000;
app.listen(port, () => console.log(`listening on http://localhost:${9000}`));
