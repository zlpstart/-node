// require
// 端口号

let http = require('http');

let server = http.createServer()

server.on('request',(req,res) => {
    res.end('hello world')
})

server.listen(3000,()=>{
    console.log("Server is running...")
})