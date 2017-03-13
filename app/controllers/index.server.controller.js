var io = require('../../server').ioInstance;

exports.render = (req, res) => {
  console.log(io);
  res.render('index', {req: req});
}
