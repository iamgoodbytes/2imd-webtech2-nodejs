// access the router object, so that we can add routes to it
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

// add one message to the database
// first, we define a mongoose schema
var messageSchema = mongoose.Schema({
	user: String,
	message: String
});
// then we compile this schema into a model
var Message = mongoose.model('Message', messageSchema);


router.get('/', function (req, res) {
	res.send("GET messages");
});

router.get('/:id', function (req, res) {
	var id = req.params.id;
	res.send("GET message with :id " + id);
});

router.post('/', function (req, res){

	// so that we can save a new instance of this model
	var newMessage = new Message({
		user: req.body.user,
		message: req.body.message
	});
	
	newMessage.save(function (err, message) {
	  if (err) return console.error(err);
	  res.send(message);
	});

});

module.exports = router;