var fs = require("fs");
fs.stat('inputData.html', function(err, stats) {
    if(err) throw err;
    // console.log(stats);
    
    var myData = `<p>
        ${stats.isDirectory()}, 
        ${stats.isFile()}, 
        ${stats.size}, 
        ${stats.atime}
    </p>`;
    
    fs.open('fileStats.html', 'w', function(err, openFile) {
        if(err) throw err;
    
        fs.writeFile('fileStats.html', myData, function(err, success) {
            if(err) throw err;
        });
    });
});

// var stats = fs.statSync('inputData.html');
// var myData = `<p>
//     fileSize: ${stats.size},
//     isFile: ${stats.isFile()} 
// </p>
// `;
// fs.open('fileStats.html', 'w', function(err, openFile) {
//     if(err) throw err;
    
//     fs.writeFile('fileStats.html', myData, function(err, success) {
//         if(err) throw err;
//     });
// });


// console.log(stats.isDirectory());
// console.log(stats.isFile());
// console.log(stats.size);