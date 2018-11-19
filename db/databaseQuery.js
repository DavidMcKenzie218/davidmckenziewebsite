const MongoClient = require('mongodb').MongoClient;

const DatabaseQuery = function(){
  this.url = "mongodb://localhost:27017/test_david_mckenzie_db"
}

module.exports = DatabaseQuery;