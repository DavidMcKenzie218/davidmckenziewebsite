const MongoClient = require('mongodb').MongoClient;

const DatabaseQuery = function(){
  this.url = "mongodb://localhost:27017"
}

DatabaseQuery.prototype = {
  all: function(onQueryFinnished){
    const client = new MongoClient(this.url);
    client.connect(function(err){
      const db = client.db("test_david_mckenzie_db");
      let data = db.collection("test");
      data.find().toArray(function(err, docs){
        onQueryFinnished(docs);
      });
    })
  }
}

module.exports = DatabaseQuery;