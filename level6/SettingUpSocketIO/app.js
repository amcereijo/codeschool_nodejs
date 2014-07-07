var socket = require('socket.io');
var express = require('express');
var app = express.createServer();
var io = socket.listen(app);

io.sockets.on('connection', function(client) {
  console.log('Connected...');
});
