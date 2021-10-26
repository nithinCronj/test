var url = require('url');
module.exports = {
    handleRequest: function(req, res){
        res.writeHead(200, {'Content-Type': 'text/html'});
        var path = url.parse(req.url).pathname;
            switch(path){
                case '/': {res.write('Index Page');break;}
                case'/login':{res.write('Login Page'); break;}
                default: {res.writeHead(404);
                res.write('No page found');
                res.end();}

                         }
                                      }
                    }