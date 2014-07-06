var url = require('url');
var request = require('request');

options = {
  protocol: "http:",
  host: "search.twitter.com",
  pathname: '/search.json',
  query: { q: "codeschool"}
};

var searchURL = url.format(options);
request(searchURL, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) 
  }
});
