let http = require('http')
let fs = require('fs')

// 1.创建server
let server = http.createServer()

let myDir = `../../node assets/`

server.on('request', (req, res) => {
    let url = req.url
    fs.readFile(`./template.html`,(err,data) => {
        if(err){
            return res.end('404 Not Found')
        }
        // 1. 如何得到 wwwDir 目录列表中的文件名和目录名
        //      fs.readdir
        // 2. 如何将得到的文件名和目录名替换到tamplate.html中
        //      模板引擎
        // 只要你做了这两件事儿，那这个问题就解决了
        fs.readdir(myDir,(err,data)=>{
            if(err){
                return res.end('Can not find www dir')
            }
            console.log(data)
        })
        res.end(data)
    })
})

// 3.绑定端口号，启动服务
server.listen(3000, () => {
    console.log('running...')
})