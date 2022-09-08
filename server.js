const express = require('express')
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
const cors = require("cors")
require('./config/database')
const Data = require('./models/Data')

app.use(cors())
app.use(express.json());

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', async function (req, res) {
  io.sockets.emit('transmit', { msg: req.query });
  // const data = new Data({
  //   value: req.query.sensor1Val,
  //   values: req.query.sensor2Val
  // })
  // await data.save()
  // return res.json({ success: true, response: { data }, error: null })

});


io.on('connection', function (socket) {
  io.sockets.emit('transmit', { msg: 'Connected to Device' });
});

server.listen(process.env.PORT || 80, process.env.HOST || '0.0.0.0', function () {
  console.log("server started")
});
