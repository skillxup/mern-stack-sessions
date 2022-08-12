const fs = require("fs");
// try {
//     const a = 1;
//     const c = (a + b);
//     console.log("c: " + c);
// } catch(err) {
//     console.log("err: " + err);
// }

function nodeStyleCallBack(err, data) {
    try {
        console.log(data);
    } catch(err) {
        console.error("there was a problem while refering: ", err);
    }
}

fs.readFile("./sample1.txt", nodeStyleCallBack);
fs.readFile("./userDetails.js", nodeStyleCallBack);