var fs = require("fs");
fs.readFile('inputData.txt', function(err, data) {
    if(err) throw err;
    console.log(data.toString());
});