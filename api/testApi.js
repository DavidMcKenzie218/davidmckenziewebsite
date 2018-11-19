const DatabaseQuery = require('../db/databaseQuery.js');

const TestApi = function(app){

  const query = new DatabaseQuery();

  app.get("/data", function(req, res){
    query.all(function(results){
      res.json(results);
    })
  })
}

module.exports = TestApi;