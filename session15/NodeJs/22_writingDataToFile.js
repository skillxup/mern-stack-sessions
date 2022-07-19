var fs = require("fs");
var data = '<p>checking with new para and writing</p>';

fs.writeFile('writeNewFileData2.html', data, function(err, success) {
    if(err) throw err;
});