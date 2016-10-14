var express = require('express');
var path = require('path');
var vhost = require('./vhost');
var app = express(),
    port = 1861,
    server = require('http').createServer(app),
    io = require('socket.io').listen(server);
var ioClient = require('socket.io-client');
var socketClient = ioClient.connect("http://tvr2wei-eimerreis.c9.io", {reconnect: true});


console.log("Socket Client: " + socketClient);
socketClient.on('connect', function(){
    console.log("Verbindung mit Server hergestellt.");
});

    app.use(express.static(__dirname + '/../client'));
    app.use(express.static(__dirname + '/../remote'));

    app.get('/', function(req, res){
      res.sendFile(path.join(__dirname+'/../client/index.html'));
    });

    io.on('connection', function(socket){
      console.log('User connected');
      io.emit('get-selectedPlayers');
      socket.on('disconnect', function(){
        console.log("disconnceted");
      });
      socket.on('change-slide', function(folie){
        io.emit('change-slide', folie);
      });

      socket.on('players-changed',function(selectedPlayers){
        io.emit('players-changed', selectedPlayers);
      });

      socket.on('message-sended', function(message){
        console.log(message);
        io.emit('message-sended', message);
      });
    });

server.listen(port);
console.log("Server läuft auf Port "+port);