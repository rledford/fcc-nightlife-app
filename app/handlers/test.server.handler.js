var server = require('../../server');
module.exports = (socket) => {
  socket.on('test', (socket) => {
    console.log('TEST handled by test.server.handler');

    console.log('io from server: '+server.io);
  });
}
