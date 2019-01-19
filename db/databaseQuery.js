const MongoClient = require('mongodb').MongoClient;

const DatabaseQuery = function(){
  this.url = "mongodb://localhost:27017" 
}

DatabaseQuery.prototype = {
  all: async function(onQueryFinnished){
    const client = await MongoClient.connect(this.url, {useNewUrlParser:true});
    let db = client.db("test_david_mckenzie_db");
    let data = db.collection("test");
    data.find().toArray(function(err, docs){
      onQueryFinnished(docs); 
    });
  }
}


module.exports = DatabaseQuery;