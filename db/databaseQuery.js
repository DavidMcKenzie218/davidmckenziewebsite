const MongoClient = require('mongodb').MongoClient;

const DatabaseQuery = function(){
  this.url = "mongodb://localhost:27017/test_david_mckenzie_db"
}

DatabaseQuery.prototype = {
  all: function(){
    MongoClient.connect(this.url, function(err, db){
      if(db){
        console.log("database connected");
      }
    })
  }
}

module.exports = DatabaseQuery;