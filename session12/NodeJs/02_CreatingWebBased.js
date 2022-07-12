var http = require("http");

http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end("hello world");
}).listen(8081);

console.log("server started its execution at http://localhost:8081 or http://127.0.0.1:8081");
// node <filename>