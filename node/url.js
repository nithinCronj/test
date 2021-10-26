const http=require('http')
const server=http.createServer((req, res)=> {
    if(req.url=='/'){
        res.write('Hello world');
        res.end();
    }
        if(req.url=='/login'){
            res.write('login successs');
            res.end();
        }
});
// server.on('connection',(socket)=> {
//     console.log('New connection');
// })
server.listen(8080)
// console.log('listenung on 8080');