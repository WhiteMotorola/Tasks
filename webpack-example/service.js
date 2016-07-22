var express = require('express');
var path = require('path');

var app = express();

app.use(express.static('./public'));

app.use(function (req, res, next) {
    if (req.url === '/forbidden') {
        next(new Error("Wooops! Denided."));
    } else {
        next();
    }
});

app.use(function (req, res) {
    res.send(404, "Page Not Found");
});

app.use(function (err, req, res, next) {
    if (app.get('env') === 'development') {
        res.status(500).send(err.message);
    } else {
        res.send(500);
    }
});

app.listen(3000);
