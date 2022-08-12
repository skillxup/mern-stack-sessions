module.exports = (length, breadth, callback) => {
    if(length <= 0 || breadth <= 0) {
        setTimeout(() => callback(new Error('dimensions cannot be negative' + length + ', breadth: ' + breadth), null), 5000);
    } else {
        setTimeout(() => callback(null, {
            Perimeter: () => (2 * (length + breadth)), 
            Area: () => (length * breadth)
        }), 5000);
    }
}