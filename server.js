
require('dotenv').load();

var express = require('./config/express.js'),
    mongoose = require('./config/mongoose.js');


var app = express();
var db = mongoose();

//wire routes
require('./app/routes/index.server.routes')(app);
require('./app/routes/search.server.routes')(app);


app.listen( process.env.PORT || 8080, function(){
    console.log('listening on port: ' + (process.env.PORT || 8080));
});
