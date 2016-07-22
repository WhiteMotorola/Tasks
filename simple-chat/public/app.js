var io = require("socket.io-client");

$(function () {

    var socket = io.connect('http://localhost:3333');
    var name = 'Vlad' + (Math.round(Math.random() * 100));

    $('.chat .nick').text(name);

    function msg(nick, message) {
        var m = '<div class="msg">' + '<span class="user">' + safe(nick) + ':</span> ' + safe(message) + '</div>';
        $("#messages").append(m).scrollTop($("#messages")[0].scrollHeight);
    }

    function msg_system(message) {
        var m = '<div class="msg system">' + safe(message) + '</div>';
        $("#messages").append(m).scrollTop($("#messages")[0].scrollHeight);
    }

    socket.on('connect', function () {
        msg_system('You are connected!');
        socket.emit("user", { name: name });
    });

    socket.on('message', function (data) {
        msg(data.name, data.message);
        $("#message_text").focus();
    });

    socket.on('leave', function(data) {
        msg_system(data + " leave chatroom");
    });

    socket.on('join', function(data) {
        msg_system(data + " enter chatroom");
    });

    $("#message_btn").click(function () {
        var text = $("#message_text").val();
        if (text.length <= 0) {
            return;
        }
        $("#message_text").val("");
        socket.emit("message", { message: text, name: name });
    });

    function safe(str) {
        return str.replace(/&/g, '&amp;')
           .replace(/</g, '&lt;')
           .replace(/>/g, '&gt;');
    }
});
