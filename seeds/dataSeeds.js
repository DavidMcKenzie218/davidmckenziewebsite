load('./seeds/titleSeeds.js');
load('./seeds/bodySeeds.js')

use test_david_mckenzie_db;
db.dropDatabase();

db.test.insert([
  {
    headers:titleSeeds,
    body:bodySeeds
  } 
]);

db.test.find();