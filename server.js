var http = require('http');
var opn = require('opn');


opn('localhost:3000/', {app: 'firefox'});

http.createServer(function(req, res) {
    console.log("Booting up");
    res.write("Page hit");
    res.end();
}).listen(3000);