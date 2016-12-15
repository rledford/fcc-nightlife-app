
var express = require('express'),
    router = express.Router(),
    apiServerController = require('../controllers/api.server.controller');

router.get('/api/:location', function (req, res) {
    apiServerContoller.yelp();
});
