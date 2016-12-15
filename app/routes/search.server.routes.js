
var express = require('express'),
    router = express.Router(),
    search = require('../controllers/search.server.controller');

module.exports = function (app) {
    app.route('/search')
        .post((req, res) => {
            console.log('search location: ' + req.body.location);
            search.searchLocation(req.body.location);
            res.send('searching location: '+req.body.location);
        })
        .get((req, res) => {
            console.log('get /search');
            res.send('get /search');
        })
}
