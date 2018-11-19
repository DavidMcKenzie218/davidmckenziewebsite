const TestApi = function(app){
  let testData = [{id:1, para:"test data"}];

  app.get("/data", function(req, res){
    res.json({data: testData});
  })
}

module.exports = TestApi;