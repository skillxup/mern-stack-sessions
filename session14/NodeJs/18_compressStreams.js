var fs = require("fs");
var zlib = require("zlib");

fs.createReadStream('inputData.html')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('zipInputData.zip'));