const express = require('express');
const parser = require('body-parser');
const morgan = require('morgan');
const path = require('path');

const Shoe = require('../db/shoeTitle');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.use(morgan('dev'));
app.use(parser.json());

// SERVER REQUEST METHODS
app.get('/:shoeID/:n&c', ({ params }, res) => {
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

app.get('/:shoeID/:n&c/:style', ({ params }, res) => {
  const style = params.style.slice(1);
  Shoe.find({ shoeType: style }, (err, shoes) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      const images = [];
      for (let i = 0; i < shoes.length; i += 1) {
        const tuple = [];
        tuple.push(shoes[i].shoeID);
        tuple.push(shoes[i].image);
        images.push(tuple);
      }
      res.send(images);
    }
  });
});


// APP LISTENING PROTOCOL
const PORT = 3006;
app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`>>>>> Express server listening on port ${PORT}...`);
});
