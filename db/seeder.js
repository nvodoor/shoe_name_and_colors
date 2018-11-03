const mongoose = require('mongoose');
const Shoe = require('./shoeTitle.js');

const IDS = ['310805-408', '310806-408', '310806-002', '305381-113', '852542-306', '554724-062', '554724-113', '554724-071', '554724-610', '554724-050',
  '554724-109', 'AR4491-001', 'AR4491-700', 'AV3922-601', 'AV3922-348', 'AV3922-001', 'AT3146-001', 'AV1200-600', 'AV1200-007', 'AV1200-008',
  'AV1200-401', 'AV1200-100', 'AV1200-200', 'AV1200-001', '315371-006', '315371-300', '310805-160', '136027-148', 'AV7008-700', 'AV7007-001',
  'AR5599-006', 'AT4040-601', '820273-300', '820273-400', '820273-600', '820276-006', '554725-065', '640734-065', '640734-071',
  'AR6351-113', 'AR6352-113', 'AT8012-601', 'AT8011-407', 'BV8017-445', '384665-104', '305368-113', '440888-148', '884129-035', '414575-035',
  '151186-301', '850000-301', 'AA2494-801', 'AA2494-401', 'AA2494-701', '555088-801', '555088-401', 'AQ7924-001', 'AQ7924-305', 'AQ7924-107',
  'AQ7924-601', 'AQ7924-100', 'AQ9119-300', 'AQ9119-001', '555112-001', '640735-065', '640735-071', 'AT4612-500', 'AT4613-500',
  'BV8018-445', 'AR4430-016', 'AR4430-105', 'AR4430-003', 'AR4430-200', 'AR4430-023', 'AR1000-001', 'AR1000-006', 'AR1000-003',
  'AR1000-023', '580603-603', '580603-300', '580603-401', '580603-001', 'AO9744-600', '384666-104', '384667-104', 'AJ7984-002', 'AJ7984-600',
  'AJ7984-001', 'AO2649-001', 'AO2649-301', 'AO2649-023', 'AO2649-007', 'AO2649-002', 'AJ7990-003', 'AJ7990-001', 'AJ7990-301', 'AJ7990-006',
  'AA2517-600', 'AA2517-005', 'AA2517-002', 'AA2517-062', 'AA2517-023', 'AA2517-004', '684915-106', 'AH8109-003', 'AH8109-600', 'AH8109-100',
  'AH8109-002', 'AO1561-003', 'AO1561-117', 'AO1561-010', 'AO1561-011', 'AO1561-107', 'AO1560-010', 'AO1560-117', 'AA1253-105', 'AA1253-400',
  'AQ9084-063', 'AQ9084-006', 'AQ9084-100', 'AQ9084-300', 'AQ9084-010'];

const prodLines = ['Men\'s Shoe', 'Women\'s Shoe', 'Men\'s Basketball Shoe', 'Women\'s Basketball Shoe'];
const imgSrcs = ['https://s3.amazonaws.com/warp-v/images/136027_148.jpeg', 'https://s3.amazonaws.com/warp-v/images/305381_113.jpeg', 'https://s3.amazonaws.com/warp-v/images/554724_050.jpeg', 'https://s3.amazonaws.com/warp-v/images/555088_401.jpeg', 'https://s3.amazonaws.com/warp-v/images/AA1253_105.jpeg', 'https://s3.amazonaws.com/warp-v/images/AA1272_014.jpeg', 'https://s3.amazonaws.com/warp-v/images/AH6789_602.jpeg', 'https://s3.amazonaws.com/warp-v/images/AH6789_801.jpeg', 'https://s3.amazonaws.com/warp-v/images/AJ1936_001.jpeg', 'https://s3.amazonaws.com/warp-v/images/AJ2018_700.jpeg', 'https://s3.amazonaws.com/warp-v/images/AO1755_005.jpeg', 'https://s3.amazonaws.com/warp-v/images/AO2649_301.jpeg', 'https://s3.amazonaws.com/warp-v/images/AO8979_600.jpeg', 'https://s3.amazonaws.com/warp-v/images/AO9378_002.jpeg', 'https://s3.amazonaws.com/warp-v/images/AQ0070_014.jpeg', 'https://s3.amazonaws.com/warp-v/images/AQ1087_102.jpeg', 'https://s3.amazonaws.com/warp-v/images/AQ9084_006.jpeg', 'https://s3.amazonaws.com/warp-v/images/AQ9119_300.jpeg', 'https://s3.amazonaws.com/warp-v/images/AR0043_600.jpeg', 'https://s3.amazonaws.com/warp-v/images/AR1000_023.jpeg', 'https://s3.amazonaws.com/warp-v/images/AV2296_402.jpeg', 'https://s3.amazonaws.com/warp-v/images/AV3922_601.jpeg', 'https://s3.amazonaws.com/warp-v/images/AV7014_002.jpeg', 'https://s3.amazonaws.com/warp-v/images/BQ7930_400.jpeg'];
const shoeNames = ['Air Jordan 11 Retro', 'Air Jordan 11', 'Air Jordan 10 Retro', 'Air Jordan Retro 10', 'Air Jordan Retro 8', 'Air Jordan 1 Mid Premium', 'Air Jordan 1 Mid', 'Air Jordan 9 Retro NRG', 'Air Jordan Legacy 312', 'Air Jordan 1 Moto', 'Jordan 88 Racer', 'Jordan Spizike', 'Air Jordan 5 Retro', 'Air Jordan Future', 'Air Jordan 1 Rebel XX', 'Air Jordan Legacy 312',
  'Jordan Jumpman Team II', 'Jordan Grind 2 Oklahoma', 'Jordan Grind 2 Michigan', 'Jordan Son Of Mars Low', 'Jordan Delta Speed TR', 'Jordan DNA LX', 'Jordan Relentless', 'Jordan Hydro XIII Retro', 'Jordan Jumpman Quick 23', 'Jordan Melo 1.5 SE', 'Jordan Hydro V Retro'];

const shoeStyles = {};
for (let i = 0; i < IDS.length; i += 1) {
  const style = IDS[i].split('-')[0];
  if (shoeStyles[style] !== undefined) {
    shoeStyles[style].ids.push(IDS[i]);
  } else {
    shoeStyles[style] = {};
    shoeStyles[style].ids = [IDS[i]];
    shoeStyles[style].productLine = prodLines[(Math.floor(Math.random() * prodLines.length))];
    shoeStyles[style].shoeName = shoeNames[(Math.floor(Math.random() * shoeNames.length))];
    shoeStyles[style].price = `$${Math.floor(Math.random() * 100) + 100}`;
  }
}


const shoeArr = [];
for (let i = 0; i < IDS.length; i += 1) {
  const style = IDS[i].split('-')[0];
  const info = shoeStyles[style];
  const image = imgSrcs[(Math.floor(Math.random() * imgSrcs.length))];
  const shoe = {
    shoeID: IDS[i],
    shoeName: info.shoeName,
    shoeColors: info.ids,
    price: info.price,
    shoeLine: info.productLine,
    shoeType: style,
    image,
  };
  shoeArr.push(shoe);
}

const seed = (callback = () => { mongoose.connection.close(); }) => {
  Shoe.deleteMany({}, (err) => {
    if (err) {
      console.log(err);
    } else {
      Shoe.insertMany(shoeArr, (error, docs) => {
        if (error) {
          console.log(error);
        } else {
          console.log(`>>>>> finished seeding database with ${docs.length} shoes...`);
          callback();
        }
      });
    }
  });
};

module.exports = seed;
