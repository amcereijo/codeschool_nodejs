var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
  response.writeHead(200);
  fs.readFile('./index.html', function(err, content){
  	response.write(content);
    response.end();
  });
}).listen(8080);
