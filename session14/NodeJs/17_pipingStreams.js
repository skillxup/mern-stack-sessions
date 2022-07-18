var fs = require("fs");
var readerStream = fs.createReadStream('inputData.html');
var writerStream = fs.createWriteStream('newData.html');
readerStream.pipe(writerStream);
console.log('we are done with input -> output stream');