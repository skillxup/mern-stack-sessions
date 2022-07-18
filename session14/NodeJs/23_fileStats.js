var fs = require("fs");
fs.stat('inputData.html', function(err, stats) {
    if(err) throw err;
    console.log(stats);
});

var stats = fs.statSync('inputData.html');
console.log(stats.isDirectory());
console.log(stats.isFile());
console.log(stats.size);