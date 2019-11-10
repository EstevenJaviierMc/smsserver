var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var bodyParser = require('body-parser');


app.use(bodyParser.json());

app.post('/api/send', function (req, res) {
    io.emit('sms', req.body);
    res.send('exito');
});


http.listen(80, function () {
    console.log('listening on');
});