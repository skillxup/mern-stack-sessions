var express = require('express');
var app = express();

var path = require('path');
var http = require('http');

var nStatic = require('node-static');

// setting static middleware
app.use(express.static('public'));

// serves all the request which includes /images 
app.use('/images', express.static(__dirname + '/images'));

// setting virtual path
app.use('/resources', express.static(__dirname + '/images'));

// bodyParser
var options = {root: path.join(__dirname, "/")};

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

// define a route
app.get('/', function(req, res) {
    res.sendFile('index.html', options);
});

app.post('/submit-data', function(req, res) {
    var name = req.body.firstName + ' ' + req.body.lastName;
    res.send(name + ' submitted successfully');
});

var server = app.listen(5000, function() {
    console.log('node server is running');
});