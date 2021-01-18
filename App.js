var axios = require('axios');
module.exports = async id => {
var data = await axios.get('https://www.purpleair.com/json',{ params: { show: id } })
if(!data.data.results.length) throw Error('Invalid ID')
var res = Object.assign(... data.data.results.reverse()),
stats = JSON.parse(res.Stats)
return {
stats:stats,
LastSeen:new Date(res.LastSeen * 1000),
lastModified:new Date(stats.lastModified),
Created : new Date(res.Created * 1000)
}}