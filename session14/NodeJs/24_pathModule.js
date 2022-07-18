var path = require("path");
console.log('normalize: ' + path.normalize('/'));
console.log('normalize: ' + path.normalize('/..'));
console.log('normalize: ' + path.normalize('/../..'));