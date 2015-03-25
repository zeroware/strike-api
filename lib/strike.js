'use strict';

var client = require('superagent-promise');
var endpoint = 'https://getstrike.net/api/v2/';


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
    var uri = endpoint + 'torrents/download/';

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

var search = function(query, category, subCategory) {
    var uri = endpoint + 'torrents/search/';

    var queryParams = { phrase: query };

    if (category) {
        queryParams.category = category;
    }

    if (subCategory) {
        queryParams.subcategory = subCategory;
    }

    return client
        .get(uri)
        .query(queryParams)
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
