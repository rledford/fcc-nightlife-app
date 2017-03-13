
module.exports = (server) => {
  var io = require('socket.io')(server);
  io.on('connection', (socket) => {
    console.log('client connected');
    require('../app/handlers/test.server.handler')(socket);
  });
  io.on('disconnect', () => {
    console.log('client disconnected');
  });
  return io;
};
