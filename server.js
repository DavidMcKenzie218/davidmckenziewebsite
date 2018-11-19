const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

const TestApi = require('./api/testApi.js');
const DatabaseQuery = require('./db/databaseQuery.js');

const COMMENTS_FILE = path.join(__dirname, 'comments.json');

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.use(express.static('client/build'));


const server = app.listen(3000, function () {
  const host = server.address().address;
  const port = server.address().port;

  new TestApi(app);

  let query = new DatabaseQuery();
  query.all();

  console.log('Example app listening at http://%s:%s', host, port);
});