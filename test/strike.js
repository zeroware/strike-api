'use strict';

var assert = require('assert');
var strike = require('../lib/strike');

describe('strike', function(){
    describe('#info()', function(){
        it('should return info on specified torrent hash', function(done) {
            strike.info('B425907E5755031BDA4A8D1B6DCCACA97DA14C04').then(function(result) {

                var status = result.statuscode;
                var data = result.torrents;

                assert.equal(200, status);
                assert.equal(1, data.length);

                assert.equal('B425907E5755031BDA4A8D1B6DCCACA97DA14C04', data[0].torrent_hash);

                done();
            }).catch(function(err) {
                done(err);
            });
        });

        it('should return info with multiple torrent hash', function(done) {
            strike.info([
                'B425907E5755031BDA4A8D1B6DCCACA97DA14C04',
                '156B69B8643BD11849A5D8F2122E13FBB61BD041'
            ]).then(function(result) {

                var status = result.statuscode;
                var data = result.torrents;

                assert.equal(200, status);
                assert.equal(2, data.length);

                assert.equal('156B69B8643BD11849A5D8F2122E13FBB61BD041', data[0].torrent_hash);
                assert.equal('B425907E5755031BDA4A8D1B6DCCACA97DA14C04', data[1].torrent_hash);

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

                var status = result.statuscode;
                var resultCount = result.results;
                var data = result.torrents;

                assert.equal(200, status);
                assert.equal(true, resultCount > 0);

                assert.equal(true, Array.isArray(data));
                assert.equal(true, data[0].torrent_hash !== null);

                done();
            }).catch(function(err) {
                done(err);
            });
        });

        it('should return search with category', function(done) {
            strike.search('Slackware', 'Applications').then(function(result) {

                var status = result.statuscode;
                var resultCount = result.results;
                var data = result.torrents;

                assert.equal(200, status);
                assert.equal(true, resultCount > 0);

                assert.equal(true, Array.isArray(data));
                assert.equal(true, data[0].torrent_hash !== null);
                assert.equal(true, data[0].torrent_category === 'Applications');

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
                assert.equal(true, result.message > 0);

                done();
            }).catch(function(err) {
                done(err);
            });
        });
    });

    describe('#top()', function(){
        it('should return top for given category', function(done) {
            strike.top('Anime').then(function(result) {

                var status = result.statuscode;
                var data = result.torrents;

                assert.equal(200, status);
                assert.ok(data.length > 0);
                assert.equal('Anime', data[0].torrent_category);

                done();
            }).catch(function(err) {
                done(err);
            });
        });
    });
});

