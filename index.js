var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/messages', function (req, res) {
	res.send("GET messages");
});

app.get('/messages/:id', function (req, res) {
	var id = req.params.id;
	res.send("GET message with :id " + id);
});

app.post('/messages', function (req, res){
	res.send("POST messages");
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});