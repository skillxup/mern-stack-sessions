var fs = require('fs');
var myData = `
    <p>inputing the <strong>new data</strong></p>
`;
fs.open('inputData.html', 'w', function(err, openFile) {
    if(err) throw err;
    fs.writeFile('inputData.html', myData, function(err, success) {
        if(err) throw err;
    });
});