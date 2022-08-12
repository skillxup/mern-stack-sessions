var rect = require("./rectangle");
module.exports.Rect = function Rect(l, b) {
    rect(l, b, (err, rectangle) => {
        if(err) {
            console.log(`there is an error: ${err.message}`);
        } else {
            console.log(`area of rectangle with dimensions length = ${l}, and breadth = ${b} : ${rectangle.Area()}`);

            console.log(`perimeter of the rectangle with dimensions length = ${l}, and breadth = ${b} : ${rectangle.Perimeter()}`);
        }
        console.log('\n\n');
    })
}