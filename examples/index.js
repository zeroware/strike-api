var strike = require('../lib/strike');

strike.info('B425907E5755031BDA4A8D1B6DCCACA97DA14C04').then(function(res) {
    var status = res[0];
    var results = res[1];

    var result = results[0];

    console.log('L:' + result.leeches + ' S:' + result.seeds + ' - ' + result.torrent_title + ' (' + result.size + ')')
});

strike.search('Slackware').then(function(res) {

    var status = res[0];
    var results = res[1];

    for(var i in results) {
        console.log('L:' + results[i].leeches + ' S:' + results[i].seeds + ' - ' +  results[i].torrent_title + ' (' + results[i].size + ')')
    }
});