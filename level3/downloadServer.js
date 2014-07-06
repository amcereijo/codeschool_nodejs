var fs = require('fs');
var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'image/png'});
  var file = fs.createReadStream('icon.png');
  file.pipe(response, {end:false});
  file.on('end', function() {
    response.end();
  });
});
