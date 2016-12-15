var mongoose = require('mongoose');

module.exports = function(){
   //connect to database
   var db = mongoose.connect(process.env.MONGO_LOCAL);

   //require models from app/controllers/models

   return db;
};
