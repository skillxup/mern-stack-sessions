const fs = require("fs");
const child_process = require("child_process");

for(var i = 0; i < 3; i++) {
    var workerProcess = child_process.spawn('node', ['processForkSupport.js', i]);
    workerProcess.stdout.on('data', function(data) {
        console.log('stdout master level: ' + data);
    });

    workerProcess.stderr.on('data', function(data) {
        console.log('stderr master level: ' + data);
    });

    workerProcess.on('close', function(code) {
        console.log('child process at master level exited with code: ', code);
    });
}