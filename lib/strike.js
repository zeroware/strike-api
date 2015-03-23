'use strict';

var client = require('superagent-promise');
var endpoint = 'https://getstrike.net/api/';


var info = function(hash) {
    var uri = endpoint + 'torrents/info/';

    if (Array.isArray(hash)) {
        hash = hash.join(',');
    }

    return client
            .get(uri)
            .query({ hashes: hash })
            .end()
            .then(function(res) {
                return res.body;
            });
};

var downloadLink = function(hash) {
    var uri = endpoint + 'torrents/downloads/';

    return client
        .get(uri)
        .query({ hash: hash })
        .end()
        .then(function(res) {
            return res.body;
        });
};

var countTotal = function() {
    var uri = endpoint + 'torrents/count/';

    return client
        .get(uri)
        .end()
        .then(function(res) {
            return res.body;
        });
};

var search = function(query) {
    var uri = endpoint + 'torrents/search/';

    return client
        .get(uri)
        .query({ q: query })
        .end()
        .then(function(res) {
            return res.body;
        });
};


var top = function(category) {
    var uri = endpoint + 'torrents/top/';

    category = category || 'all';

    return client
        .get(uri)
        .query({ category: category })
        .end()
        .then(function(res) {
            return res.body;
        });
};

module.exports = {
    info: info,
    downloadLink: downloadLink,
    countTotal: countTotal,
    search: search,
    top: top
};
