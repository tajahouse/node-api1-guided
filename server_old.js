const http = require('http');

const server = http.createServer((req, res)=>{
    res.statusCode=200;
    res.setHeader("Content-Type", 'text/html')
    res.write("<h1>Taja, You are going to be a coding BEAST!</h1>")
    res.end()
})

server.listen(4545, ()=>{
    console.log('server started on port 4545')
})
