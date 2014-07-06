var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app);

var quotes = {
  'einstein': 'Life is like riding a bicycle. To keep your balance you must keep moving',
  'berners-lee': 'The Web does not just connect machines, it connects people',
  'crockford': 'The good thing about reinventing the wheel is that you can get a round one',
  'hofstadter': 'Which statement seems more true: (1) I have a brain. (2) I am a brain.'
};

app.get('/quotes/:name', function(request, response) {
  var quote = quotes[request.params.name];
  response.render('./quote.ejs', {name:request.params.name, quote: quote});
});

app.listen(8080);
