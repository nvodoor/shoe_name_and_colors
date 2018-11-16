const fs = require('fs');
const stringify = require('csv-stringify');
const AWS = require('aws-sdk');

const recording = {};

const prodLines = ['Men\'s Shoe', 'Women\'s Shoe', 'Men\'s Basketball Shoe', 'Women\'s Basketball Shoe'];
const imgSrcs = [];

const shoeNames = ['Air Jordan 11 Retro', 'Air Jordan 11', 'Air Jordan 10 Retro', 'Air Jordan Retro 10', 'Air Jordan Retro 8', 'Air Jordan 1 Mid Premium', 'Air Jordan 1 Mid', 'Air Jordan 9 Retro NRG', 'Air Jordan Legacy 312', 'Air Jordan 1 Moto', 'Jordan 88 Racer', 'Jordan Spizike', 'Air Jordan 5 Retro', 'Air Jordan Future', 'Air Jordan 1 Rebel XX', 'Air Jordan Legacy 312',
  'Jordan Jumpman Team II', 'Jordan Grind 2 Oklahoma', 'Jordan Grind 2 Michigan', 'Jordan Son Of Mars Low', 'Jordan Delta Speed TR', 'Jordan DNA LX', 'Jordan Relentless', 'Jordan Hydro XIII Retro', 'Jordan Jumpman Quick 23', 'Jordan Melo 1.5 SE', 'Jordan Hydro V Retro'];

const shoes = [];
const columns = {
  id: 'id',
  shoeID: 'shoeID',
  shoeName: 'shoeName',
  shoeColors: 'shoeColors',
  price: 'price',
  shoeLine: 'productLine',
  shoeType: 'type',
  image: 'image',
};

const s3 = new AWS.S3();
s3.listObjects({ Bucket: 'nike-database-it' }, (err, images) => {
  const bucket = images.Contents;
  for (let i = 0; i < bucket.length; i += 1) {
    imgSrcs.push(`https://s3.amazonaws.com/nike-database-it/${bucket[i].Key}`);
  }
  for (let i = 6000001; i < 10000001; i += 1) {
    if (i % 100000 === 0) {
      console.log(i);
    }
    let ids = `A${Math.floor((Math.random() * 89999) + 10000).toString()}-${Math.floor((Math.random() * 899) + 100).toString()}`;
    while (recording[ids]) {
      ids = `${Math.floor(Math.random() * 999999).toString()}-${Math.floor(Math.random() * 999).toString()}`;
    }
    recording[ids] = true;
    const style = ids.split('-')[0];
    const shoeID = ids;
    const productLine = prodLines[(Math.floor(Math.random() * prodLines.length))];
    const shoeName = shoeNames[(Math.floor(Math.random() * shoeNames.length))];
    const price = `$${Math.floor(Math.random() * 100) + 100}`;
    const image = imgSrcs[(Math.floor(Math.random() * imgSrcs.length))];
    shoes.push([i, shoeID, shoeName, shoeID, price, productLine, style, image]);
  }

  console.log(Object.keys(recording).length);

  stringify(shoes, { header: true, columns }, (erroring, output) => {
    if (erroring) {
      console.log(erroring);
    }
    fs.writeFile(`records${2}.csv`, output, (error) => {
      if (error) {
        console.log(error);
      }
      console.log('success');
    });
  });
});