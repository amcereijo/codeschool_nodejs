var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200);
  response.end("Hello, this is dog sent in response.end");
}).listen(8080);
