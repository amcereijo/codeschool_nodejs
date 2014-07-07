var express = require('express');
var app = express.createServer();
var socket = require('socket.io');
var io = socket.listen(app);

io.sockets.on('connection', function(client) {
  console.log("Client connected...");

  // listen for answers here
  client.on('answer', function(question, answer){
    client.broadcast.emit('answer', question, answer);
  });
  client.on('question', function(question) {
    client.get('question_asked', function(err, asked) {
      if(!asked) {
        client.set('question_asked', true);
        client.broadcast.emit('question', question);
      }
    });
  });
});
