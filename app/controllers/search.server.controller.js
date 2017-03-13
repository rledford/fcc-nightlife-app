var Yelp = require('yelp');

var yelp = new Yelp({
    consumer_key: process.env.YELP_CONSUMER_KEY,
    consumer_secret: process.env.YELP_CONSUMER_SECRET,
    token: process.env.YELP_TOKEN,
    token_secret: process.env.YELP_SECRET,

});

exports.searchLocation = function (location){
    yelp.search({term: 'nightlife', location: location})
        .then( (data) => {
            console.log(data);
        })
        .catch( (err) => {
            console.error(err);
        });
};
