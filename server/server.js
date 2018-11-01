const express = require('express');
const parser = require('body-parser');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.use(morgan('dev'));
app.use(parser.json());

// APP LISTENING PROTOCOL
const PORT = 3232;
app.listen(PORT, () => {
  console.log(`>>>>> Express server listening on port ${PORT}...`);
});
