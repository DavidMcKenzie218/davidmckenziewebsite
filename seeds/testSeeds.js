use test_david_mckenzie_db;
db.dropDatabase();

db.test.insert([
  {
    headers:[{id:1, title:"test data"}],
    body:[{id:1, para:"test data id 1"}]
  } 
]);

db.test.find();