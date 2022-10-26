
//basic clientRequest Object

//const { response } = require('express');
var http = require('http');

var options = {
    hostname: '127.0.0.1',
    path: '/',
    port: '5500',
    method: 'POST'
};
function handleResponse(response) { 
    var str = '';
    //console.log(response)
    if (response) {
        try {
            response.on('data', function (chunk) {
                str += chunk;
            });
            response.on('end', function () {
                console.log(str);
            });
        } catch (error) {
            console.log("No response")
        }
       
    } else { 
         console.log("No response")
    }
    
}
function req() { 
    var req = http.request(options, function (response) { 
        handleResponse(response);
    });
    req.end();
}

function serverObj() {
    http.createServer(function (req,res) { 
        console.log('loading...');
    }).listen(5500,'127.0.0.1');
}
//req()
serverObj()
