var http=require('http');
//var day=require('./sample.js');
http.createServer(function(req, res){
    res.writeHead(200,{'content-Type': 'text/html'});
    res.write(req.url);
    res.end();
}).listen(8080);