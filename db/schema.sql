DROP DATABASE IF EXISTS nike;

CREATE DATABASE nike;
\connect nike;

DROP TABLE IF EXISTS shoes;

CREATE TABLE shoes (
  id INTEGER,
  shoeID VARCHAR(60),
  shoeName VARCHAR(60),
  shoeColors VARCHAR(60),
  price VARCHAR(60),
  productLine VARCHAR(60),
  type VARCHAR(60),
  image VARCHAR(500)
);

COPY shoes FROM '/Users/neilvodoor/desktop/hrsf105/hrsf105-SDC/shoe_name_and_colors/records3.csv' DELIMITERS ',' CSV;

COPY shoes FROM '/Users/neilvodoor/desktop/hrsf105/hrsf105-SDC/shoe_name_and_colors/records2.csv' DELIMITERS ',' CSV;