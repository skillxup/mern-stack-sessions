const express = require('express');
const app = express();

app.use(express.json());

const data = [
    { "name": "john", "email": "john@gmail.com" }, 
    { "name": "paul", "email": "paul@gmail.com" }, 
    { "name": "david", "email": "david@gmail.com" }, 
    { "name": "walter", "email": "walter@gmail.com" }
];

app.get('/', function(req, res) {
    res.json(data);
});

app.listen(3000, function() {
    console.log('server running on port 3000!');
})