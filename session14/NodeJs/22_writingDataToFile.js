var fs = require("fs");
var data = '<p>checking with new para</p>';

fs.writeFile('writeNewFileData.html', data, function(err, success) {
    if(err) throw err;
});