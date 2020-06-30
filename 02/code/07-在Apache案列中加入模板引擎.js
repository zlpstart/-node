let http = require('http')

let server = http.createServer()

server.on('request', (req, res) => {
    let url = req.url
    if (url == '/login') {
        res.setHeader('Content-Type', 'text/plain;charset=utf-8')
        res.end("登录")
    }

})

server.listen(3000, () => {
    console.log("running ... ")
})