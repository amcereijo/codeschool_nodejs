var fs = require('fs');
var file = fs.createReadStream('index.html');

file.pipe(process.stdout, { end: false });

file.on("end", function() {
  console.log('--File Complete--');
});
