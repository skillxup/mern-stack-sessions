var fs = require('fs');

// setInterval()
// var i = 0;
// setInterval(function() {
//     console.log("its executing for every 1 sec " + i + "!");
//     i++;
// }, 1000);

// setTimeout()
// setTimeout(function() {
//     console.log("its executing for only 1 time!");
// }, 1000);

// recursive function
// var recursiveFunc = function() {
//     console.log("its executing for 1 sec!");
//     setInterval(recursiveFunc, 1000);
// }

// recursiveFunc();

// clearTimeeout
// function welcome() {
//     console.log("welcome to nodejs")
// }
// var id1 = setTimeout(welcome, 1000);
// var id2 = setTimeout(welcome, 1000);

// clearTimeout(id1);

// setImmediate()
fs.readFile("sample1.txt", function() {
    setTimeout(function() {
        console.log("the file executed with setTimeout");
    }, 0);
    setImmediate(function() {
        console.log("the file executed with setImmediate");
    });
});