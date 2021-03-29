var express = require('express'), app = express(), server = require('http').Server(app), io = require('socket.io')(server), port = 8000;
server.listen(port, () => console.log('on port' + port))
// //user server
app.use(express.static(__dirname + '/public'));
io.on('connection', onConnection);
var connectedSocket = null;
function onConnection(socket){
connectedSocket = socket;
}
var serialport = require("serialport");
var SerialPort = serialport.SerialPort;
var portName = process.argv[2];
 
var sp = new serialport(portName,{
baudRate: 115200
});
const Readline = serialport.parsers.Readline;
const parser = new Readline;
sp.pipe(parser);
 
parser.on('data',onData);
 
function onData(data){
// console.log(data);
io.emit('data', { data: data });
}
