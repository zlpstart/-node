let http = require('http')
let fs = require('fs')

// 1.创建server
let server = http.createServer()

let myDir = `E:/黑马node/node/node assets`

server.on('request', (req, res) => {
    let url = req.url
    fs.readFile(`./template.html`, (err, data) => {
        if (err) {
            return res.end('404 Not Found')
        }
        // 1. 如何得到 wwwDir 目录列表中的文件名和目录名
        //      fs.readdir
        // 2. 如何将得到的文件名和目录名替换到tamplate.html中
        //      模板引擎
        //      2.1 在template.html中 需要替换的位置预留一个特殊的标记（就像使用以前模板引擎的特性）
        //      2.2 根据files生成需要的HTML内容
        //      2.3 替换
        // 只要你做了这两件事儿，那这个问题就解决了
        fs.readdir(myDir, (err, data) => {
            if (err) {
                return res.end('Can not find www dir')
            }
            // 2.1 生成需要替换的内容
            let content = ''
            data.forEach(item => {
                content += `
                    <p>${item}</p>
                `
            })
            // 2.3 替换
            data = content.toString()
            data = data.replace('xxx', content)

            console.log(data)
            // 3.发送解析替换过后的响应
            res.end(data)
        })


    })
})

// 3.绑定端口号，启动服务
server.listen(3000, () => {
    console.log('running...')
})