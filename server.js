var express = require('express');
var app = express();
var http = require('http').Server(app)
var io = require('socket.io')(http)

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/client/build/index.html');
});

app.use(express.static('client/build'));

io.on('connection', function(socket){
  socket.on('draw', (coords) => {

    io.sockets.emit('draw', coords)
  })

})

http.listen(3000, function (){

  console.log('Example app listening at 3000');
});
