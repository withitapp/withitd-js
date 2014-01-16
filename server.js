var express = require('express');

var app = express();
var port = 1234;

app.get('/users/:id', function(req, res) {
	res.send({
		id:req.params.id, 
		name: "Oguz Bilgic", 
	});
});

app.listen(port);
console.log('Listening on port '+port+'...');
