'use strict';

var assert = require('assert');
var strike = require('../lib/strike');

describe('strike', function(){
    describe('#info()', function(){
        it('should return info on specified torrent hash', function(done) {
            strike.info('B425907E5755031BDA4A8D1B6DCCACA97DA14C04').then(function(result) {

                var status = result[0];
                var data = result[1];

                assert.equal(200, status.statuscode);
                assert.equal(1, data.length);

                assert.equal('B425907E5755031BDA4A8D1B6DCCACA97DA14C04', data[0].torrent_hash);

                done();
            }).catch(function(err) {
                done(err);
            });
        });
    });

    describe('#downloadLink()', function(){
        it('should return the download link for specified hash', function(done) {
            strike.downloadLink('B425907E5755031BDA4A8D1B6DCCACA97DA14C04').then(function(result) {

                assert.equal(200, result.statuscode);
                assert.equal(true, result.message != null);

                done();
            }).catch(function(err) {
                done(err);
            });
        });
    });

    describe('#search()', function(){
        it('should return search results', function(done) {
            strike.search('Slackware').then(function(result) {

                var status = result[0];
                var data = result[1];

                assert.equal(200, status.statuscode);
                assert.equal(true, status.results > 0);

                assert.equal(true, Array.isArray(data));
                assert.equal(true, data[0].torrent_hash !== null);

                done();
            }).catch(function(err) {
                done(err);
            });
        });
    });

    describe('#countTotal()', function(){
        it('should return total torrent count', function(done) {
            strike.countTotal().then(function(result) {

                assert.equal(200, result.statuscode);
                assert.equal(true, result.indexed_torrents > 0);

                done();
            }).catch(function(err) {
                done(err);
            });
        });
    });

    describe('#top()', function(){
        it('should return top for given category', function(done) {
            strike.top('Anime').then(function(result) {

                var status = result[0];
                var data = result[1];

                assert.equal(200, status.statuscode);
                assert.ok(data.length > 0);
                assert.equal('Anime', data[0].torrent_category);

                done();
            }).catch(function(err) {
                done(err);
            });
        });
    });
});

