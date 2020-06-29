let http = require('http')
let fs = require('fs')

// 1.创建server
let server = http.createServer()

// 2.监听 server 的 request 请求事件，设置请求处理函数
//  请求
//      处理
//  响应
//  一个请求对应一个响应，如果在一个请求的过程中，已经结束响应了，则不能重复发送响应。
//  没有请求就没有响应
// 
//  咱们以前使用过Apache服务器软件，这个软件默认有一个www目录，所有存放在www目录中的
//  127.0.0.1:80/

let myDir = `../../node assets`

server.on('request', (req, res) => {
    let url = req.url
    // / index.html
    // /a.txt a.txt
    // /apple/login.html 
    if (url === '/') {
        fs.readFile(`${myDir}/index.html`, (err, data) => {
            // if(err){
            //     res.end('404 Not Found.')
            // }else {

            // }

            if (err) {
                // return 有两个作用：
                //  1.方法返回值
                //  2.阻止代码继续往后执行
                return res.end('404 Not Found.')
            }
            res.end(data)
        })
    } else if (url === '/a.txt') {
        fs.readFile(`${myDir}/a.txt`, (err, data) => {
            if (err) {
                return res.end('404 Not Found.')
            }
            res.setHeader('Content-Type', 'text/plain;charset=utf-8')
            res.end(data)
        })
    } else if (url === '/login') {
        fs.readFile(`${myDir}/login.html`, (err, data) => {
            if (err) {
                return res.end('404 Not Found')
            }
            res.end(data)
        })
    }
})

// 3.绑定端口号，启动服务
server.listen(3000, () => {
    console.log('running...')
})