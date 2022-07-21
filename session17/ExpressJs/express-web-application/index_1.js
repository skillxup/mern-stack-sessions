var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

// define a route
app.get('/', function(req, res) {
    res.send(`
        <html>
            <head>
                <title>express web application</title>
            </head>

            <body>
                <h1>express web application</h1>
            </body>
        </html>
    `);
});

app.get('/about', function(req, res) {
    res.send(`
        <html>
            <head>
                <title>about - express web application</title>
            </head>

            <body>
                <h1>about - express web application</h1>
            </body>
        </html>
    `);
});

var server = app.listen(5000, function() {
    console.log('node server is running');
});