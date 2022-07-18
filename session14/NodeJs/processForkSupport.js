const fs = require("fs");
const child_process = require("child_process");

for(var i = 0; i < 3; i++) {
    var workerProcess = child_process.fork('processForkSupporting.js', [i]);
    workerProcess.on('close', function(code) {
        console.log("child process at fork support level exited with code: " + code);
    });
}