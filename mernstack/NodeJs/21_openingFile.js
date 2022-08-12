var fs = require('fs');
var myData = `
    <p>adding appending the <strong>existing data</strong></p>
`;
fs.open('inputData2.html', 'a+', function(err, openFile) {
    if(err) throw err;
    
    fs.appendFile('inputData2.html', myData, function(err, success) {
        if(err) throw err;
    });
});