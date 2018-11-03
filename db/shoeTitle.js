const mongoose = require('mongoose');

require('./connection.js');

const shoeTitleSchema = new mongoose.Schema({
  shoeID: { type: String, unique: true },
  shoeName: String,
  shoeColors: [String],
  price: String,
  shoeLine: String,
  image: String,
  shoeType: String,
});

const Shoe = mongoose.model('ShoeInfo', shoeTitleSchema);

module.exports = Shoe;
