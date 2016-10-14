/**
 * Created by iMorice on 22.11.15.
 */
var express = require('express');
var path = require('path');
var app = express(),
    port = 1861,
    server = require('http').createServer(app),
    io = require('socket.io').listen(server);

function createVirtualHost(domainName, dirPath){
    return vhost(domainName, express.static(dirPath));
}


app.use(express.static(__dirname));


/*var clientHost = createVirtualHost("2wei.gewinnt", __dirname+'../client');
 app.use(clientHost);*/

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname+'/index.html'));
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