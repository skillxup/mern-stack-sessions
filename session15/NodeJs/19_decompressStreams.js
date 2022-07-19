var fs = require("fs");
var zlib = require("zlib");

fs.createReadStream('zipInputData.zip')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('zipOutputData.html'))