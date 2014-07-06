var fs = require('fs');
var file = fs.createReadStream('index.html');
file.pipe(process.stdout);
