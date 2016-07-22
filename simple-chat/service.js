var express = require('express');
var http = require('http');
var path = require('path');

var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);
server.listen(3333);

app.use(express.static('./public'));

io.sockets.on('connection', function (client) {

    var usernames = [];

    client.on('user', function (name) {
        usernames.push(name.name);
        client.broadcast.emit('join', usernames[usernames.length - 1]);
    });

    client.on('message', function (message) {
        client.emit('message', message);
        client.broadcast.emit('message', message);
    });

    client.on('disconnect', function (username) {
        client.broadcast.emit('leave', username);
    });

});

app.use(function (req, res) {
    res.send(404, "Page Not Found");
});
