var fs = require('fs');
var file = fs.createReadStream('index.html');
file.on('data', function(chunk) {
  console.log(chunk.toString());
})