var http = require('http');
const { parse } = require('path/posix');
const url = require('url');

// http://localhosts:8080/

employee = ["shubham", "aditya"]
admincred = {
    pass: "pass",
    user: "dsadsa"
}

callBackFunction = (req, res)=>{
    var method= url.parse(req.url);
    console.log(method);
    res.writeHead(200, {'Content-Type': 'text/html'});
    switch(method){
        case "POST":{
                            switch(route){
                            case "addEmployee":
                                    break;

                                 case "GET":
                                    break;
                            }
    switch(req.url){
        case "/login":
            res.end("<h1>Login</h1>")
            break;
        case "/home":
            res.end(JSON.stringify(employee))
            break;
        case "/add":
            const queryObject = url.parse(req.url,true).query;
            employee.push(queryObject.emp)
            res.end(JSON.stringify(employee))
            break;
    }
}

http.createServer(callBackFunction).listen(8080);

// client -> server side middleware -> server ->  DB
// server -> client
