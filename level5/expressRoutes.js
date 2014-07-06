var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app);

app.get('/tweets', function(request, response){
  response.sendfile(__dirname + '/tweets.html');
});

app.listen(8080);