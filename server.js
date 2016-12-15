
require('dotenv').load();

var express = require('./config/express.js'),
   mongoose = require('./config/mongoose.js');


var app = express();
var db = mongoose();

app.route('/')
   .get(function(req, res){
      res.render('index');
   });

app.listen( process.env.PORT || 8080, function(){
   console.log('listening on port: ' + (process.env.PORT || 8080));
});
