// access the router object, so that we can add routes to it
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
	res.send("GET messages");
});

router.get('/:id', function (req, res) {
	var id = req.params.id;
	res.send("GET message with :id " + id);
});

router.post('/', function (req, res){
	res.send("POST messages");
});

module.exports = router;