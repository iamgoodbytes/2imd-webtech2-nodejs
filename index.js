var express = require('express');
var app = express();

app.use('/', require('./routers/index'));
app.use('/messages', require('./routers/messages'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});