var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use('/', require('./routers/index'));
app.use('/messages', require('./routers/messages'));

// parse application/json 
app.use(bodyParser.json());

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});