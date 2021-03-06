var express = require('express');
var app = express.createServer();
var socket = require('socket.io');
var io = socket.listen(app);

io.sockets.on('connection', function(client) {
  console.log("Client connected...");

  client.on('question', function(question) {
	client.get('question_asked', function(err, q){
      if(q != true){
    	client.broadcast.emit('question', question);
        client.set('question_asked', true);
      }
    });
    
  });
});
