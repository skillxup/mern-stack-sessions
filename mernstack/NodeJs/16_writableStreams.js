var fs = require("fs");
var data = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>InputData</title>
</head>
<body>
    <p>writeData into html</p>
</body>
</html>
`;

var writerStream = fs.createWriteStream('outputData.html');
writerStream.write(data, 'utf-8');
writerStream.end();

writerStream.on('finish', function() {
    console.log('write completed');
});

writerStream.on('error', function(err) {
    console.log(err.stack);
});

console.log("writing the data completed");