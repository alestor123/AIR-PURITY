#!/usr/bin/env node
var ap = require('./App'),
labs = require('./labs.json');
(async () => {
var data = await ap(process.argv[2] || 1238);
for (var [key, label] of Object.entries(labs)) console.log(`${label}: ${data.stats[key]}`);
})();