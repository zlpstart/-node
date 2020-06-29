let http = require('http')
let fs = require('fs')

// 1.创建server
let server = http.createServer()

let myDir = `../../node assets/`

server.on('request', (req, res) => {
    let url = req.url
    let filePath = 'index.html'
    if (url != '/') {
        filePath = url
    }
    console.log(filePath,myDir + filePath)
    fs.readFile(myDir + filePath,(err,data)=>{
        if(err){
            return res.end('404 Not Found')
        }
        res.end(data)
    })
})

// 3.绑定端口号，启动服务
server.listen(3000, () => {
    console.log('running...')
})