const express = require('express');
const app = express();
const server = require('http').createServer(app);
const gameConfig = require('./config/game-config.js');
const port = require('./config/port.js');

var usersRouter = require('./routes/users');

const io = require('socket.io')(server, {
  pingInterval: 15000,
  pingTimeout: 30000
});
gameConfig.io = io;
const game = require('./game.js')(gameConfig);

io.on('connect', (socket) => {
  game.appendSocketListeners(socket);
});

app.disable('x-powered-by');
app.use(express.static('dist'));

app.use('/users', usersRouter);

// 404 handling.
app.use((req, res) => {
  res.status(404);
  res.writeHead(404, { 'Content-Type': 'text/html' });
  res.end('<!DOCTYPE html><html><head><meta charset="utf-8"><title>404 Not found</title></head><body><h1>404 Not found.</h1><br><span style="color:blue;text-decoration:underline;cursor:pointer" onclick="location.href=location.host">Main page</span></body></html>');
});

server.listen(port, () => {
  console.log(`Listening on ${server.address().port}`);
});
