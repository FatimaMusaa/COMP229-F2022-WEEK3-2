const http = require('http');
/*
const server = http.createServer((req, res) =>{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello from NodeJS Application');
});
*/

const server = http.createServer((req, res) =>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Hello from NodeJS Application as html</h1>');
});

/*
const server = http.createServer((req, res) =>{
    res.writeHead(200, {'Content-Type':'application/json'});
   
    res.end({"message":"Hello from NodeJS Application as json"})
});
*/
server.listen(3000);

console.log('Server running at http://localhost:3000');


