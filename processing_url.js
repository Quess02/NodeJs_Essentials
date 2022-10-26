var url= require('url');

//var urlStr = 'http://user:pass@host.com:80/resource/path/?query=string#hash';
var urlStr='http://127.0.0.1:5500/IntroductionToNode/HTTP_Services/form.html?username=quessmusik02%40gmail.com&pass=12';
var urlObj = url.parse(urlStr, true, false);

console.log(JSON.stringify(urlObj))

//resolving url
newResource = '/another/path?newquery';
console.log(url.resolve(urlStr, newResource));

//processing query strings and Form Parameters
var qstring = require('querystring');
var params = qstring.parse("name=Brad&color=red&color=blue");

console.log(params);