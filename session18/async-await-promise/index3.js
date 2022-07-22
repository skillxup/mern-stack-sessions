// rewrite promise - based applications to async / await
const fs = require('fs');

// not implemented the async and await
// const readFilePromise = (fileName, encoding) => {
//     return new Promise((resolve, reject) => {
//         fs.readFile(fileName, encoding, (err, data) => {
//             if(err) return reject(err);
//             resolve(data);
//         })
//     })
// }

// readFilePromise('./inpu.txt', 'utf8')
//     .then(data => {
//         console.log(data);
//     }).catch(err => {
//         console.log(err);
//     });

// using with async and await
const readFileAsyncAwait = async (filePath, encoding) => {
    await fs.readFile(filePath, encoding, (err, data) => {
        if(err) console.log(err);
        console.log(data);
    })
}

readFileAsyncAwait('iput.txt', 'utf8');