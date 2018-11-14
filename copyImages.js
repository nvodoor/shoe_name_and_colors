const fs = require('fs');
const http = require('https');
const AWS = require('aws-sdk');

const imgSrcs = ['136027_148.jpeg',
  '305381_113.jpeg',
  '554724_050.jpeg',
  '555088_401.jpeg',
  'AA1253_105.jpeg',
  'AA1272_014.jpeg',
  'AH6789_602.jpeg',
  'AH6789_801.jpeg',
  'AJ1936_001.jpeg',
  'AJ2018_700.jpeg',
  'AO1755_005.jpeg',
  'AO2649_301.jpeg',
  'AO8979_600.jpeg',
  'AO9378_002.jpeg',
  'AQ0070_014.jpeg',
  'AQ1087_102.jpeg',
  'AQ9084_006.jpeg',
  'AQ9119_300.jpeg',
  'AR0043_600.jpeg',
  'AR1000_023.jpeg',
  'AV2296_402.jpeg',
  'AV3922_601.jpeg',
  'AV7014_002.jpeg',
  'BQ7930_400.jpeg'];

for (let i = 0; i < 800; i++) {
  var s3 = new AWS.S3({ apiVersion: '2006-03-01' });
  let num = Math.floor(Math.random() * imgSrcs.length)
  let imgGet = imgSrcs[num];
  let imageFile = 'images/' + imgGet
  var params = { Bucket: 'nike-database-it', Key: imageFile }
  var file = fs.createWriteStream(`images${i}.jpg`);
  s3.getObject(params).createReadStream().pipe(file);
}