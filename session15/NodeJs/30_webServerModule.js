// import the required modules
var http = require("http");
var fs = require("fs");
var url = require("url");

// create a server
http.createServer(function(request, response) {
    // parse the request 
    var pathname = url.parse(request.url).pathname;
    console.log('user requested for: ' + pathname + '');

    // read the requested file content
    fs.readFile(pathname.substr(1), function(err, data) {
        if(err) {
            response.writeHead(404, {'Content-Type': 'text/plain'});
            response.write(err);
        } else {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(data.toString());
        }
        response.end();
    });
}).listen(8081);

console.log("server running at: http://localhost:8081/<filename>");