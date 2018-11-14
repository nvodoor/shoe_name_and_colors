const express = require('express');

const parser = require('body-parser');
const morgan = require('morgan');
const compression = require('compression');
const path = require('path');

const Shoe = require('../db/shoeTitle');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.use(morgan('dev'));
app.use(parser.json());
app.use(compression());

// SERVER REQUEST METHODS
app.get('/:shoeID/colors', ({ params }, res) => {
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

app.get('/:shoeID/colors/:style', ({ params }, res) => {
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

app.post('/new/shoe', (req, res) => {
  const values = req.body; 

  let shoe = new Shoe({
    shoeName: values.name,
    shoeColors: values.color,
    price: values.price,
    shoeLine: values.shoeline,
    image: values.image,
    shoeType: values.shoetype
  })

  shoe.save((err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

app.delete('/:shoeID', ({ params }, res) => {

  Shoe.findByIdAndDelete(params.shoeID.slice(1), (err, resp) => {
    if (err) {
      res.send(err);
    } else {
      res.send(resp);
    }
  })
});

app.update('/:shoeID', (res, req) => {
  const shoeID = req.params.shoeID.slice(1);
  const values = req.body;

  Shoe.findByIdAndUpdate(shoeID, {
    shoeName: values.name,
    shoeColors: values.color,
    price: values.price,
    shoeLine: values.shoeLine,
    image: values.image,
    shoeType: values.shoetype
  }, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
})
// APP LISTENING PROTOCOL
const PORT = 3006;
app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`>>>>> Express server listening on port ${PORT}...`);
});
