var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.get("/", function(req, res){
	res.end("Hello There ...");
});

app.listen(3000);
