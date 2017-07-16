
module.exports = function(){
   var express = require('express'),
      bodyParser = require('body-parser'),
      cookieParser = require('cookie-parser'),
      morgan = require('morgan'),
      cwd = process.cwd();

   var app = express();
   var server = require('http').createServer(app);

   //configure middleware
   app.use(bodyParser.json());
   app.use(bodyParser.urlencoded({extended: true}));
   app.use(morgan('dev'));

   //initialize passport

   //configure static locations
   app.use('/public', express.static(cwd + '/public'));
   app.use('/controllers', express.static(cwd + '/controllers'));

   //configure view setup
   app.set('views', './app/views');
   app.set('view engine', 'ejs');

   //wire routes

   return app;
};
