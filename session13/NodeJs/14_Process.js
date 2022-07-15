// console.log(`arch: ${process.arch}`)
// console.log(`id: ${process.pid}`)
// console.log(`platform: ${process.platform}`)
// console.log(`version: ${process.version}`)

// process.argv.forEach((value, index, array) => {
//     console.log(`${index}: ${value}`);
// })

const exec = require("child_process").exec;
exec("sample1.txt", (err, stdout, stderr) => {
    if(err) throw err;
    console.log(stdout);
});