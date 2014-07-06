var url = require('url');
var request = require('request');
var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app);

options = {
  protocol: "http:",
  host: "search.twitter.com",
  pathname: '/search.json',
  query: { q: "codeschool"}
};

var searchURL = url.format(options);

app.get('/', function(req, resp) {
  request(searchURL).pipe(resp);
});

app.listen(8080);
