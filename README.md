# Strike Search API client

This is a simple node.js API client for the _Strike Search_ website (http://getstrike.net)

## Quickstart

```js
	var strike = require('strike-api');
	
	strike.info('B425907E5755031BDA4A8D1B6DCCACA97DA14C04').then(function(res) {
        var status = res.statuscode;
        var results = res.torrents;
    
        var result = results[0];
    
        console.log('L:' + result.leeches + ' S:' + result.seeds + ' - ' + result.torrent_title + ' (' + result.size + ')')
    });
    
    strike.search('Slackware').then(function(res) {
    
        var status = res.statuscode;
        var results = res.torrents;
    
        for(var i in results) {
            console.log('L:' + results[i].leeches + ' S:' + results[i].seeds + ' - ' +  results[i].torrent_title + ' (' + results[i].size + ')')
        }
    });
    
```

## Licence

May be freely distributed under the MIT license.

Copyright (c) 2015 zeroware