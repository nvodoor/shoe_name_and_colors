const express = require('express');
const parser = require('body-parser');
const morgan = require('morgan');
const path = require('path');

const Shoe = require('../db/shoeTitle');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.use(morgan('dev'));
app.use(parser.json());

// APP LISTENING PROTOCOL
const PORT = 3232;
app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`>>>>> Express server listening on port ${PORT}...`);
});


// SERVER REQUEST METHODS
app.get('/shoe/:shoeID', ({ params }, res) => {
  const id = params.shoeID.slice(1);
  Shoe.find({ shoeID: id }, (err, shoe) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.send(shoe);
    }
  });
});
