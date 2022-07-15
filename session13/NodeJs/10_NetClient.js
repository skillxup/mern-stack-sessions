var net = require("net");

var client = new net.Socket();
client.connect(1337, '127.0.0.1', function() {
    console.log('connected');
    client.write(`hello server, we are client!`);
});

client.on("data", function(data) {
    console.log(`received: ${data}`);
    client.destroy();
});

client.on("close", function() {
    console.log("connection closed");
});