var fs = require("fs");

// var data = fs.readFileSync('inputData2.html');
// console.log(data.toString());
// console.log('executed with Sync');

fs.readFile('inputData2.html', function(err, buffer) {
    if(err) throw err;
    console.log(buffer.toString());
});
console.log('executed with Async');