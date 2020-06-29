// 1.结合 fs 发送文件中的数据
// 2.Content-Type
//      https://tool.oschina.net/commons
//      不同的资源对应不同的Content-Type 是不一样的
//      图片是不需要指定编码
//      一般只为字符数据才指定编码

let http = require('http');
let fs = require('fs');

let server = http.createServer()

server.on('request', (req, res) => {
    // / index.html
    let url = req.url
    if (url === '/') {
        // 肯定不这么干
        // 字符串的拼接。。。

        // 我们要发送的还是在文件中的内容
        fs.readFile('./resource/index.html', (err, data) => {
            if (err) {
                res.setHeader('Content-Type', 'text/plain;charset=utf-8')
                res.end('文件读取失败，请稍后重试')
            } else {
                // data 默认是二进制数据，可以通过 .toString 转为咱们能识别的字符串
                // res.end() 支持两种数据类型，一种是二进制，一种是字符串
                res.setHeader('Content-Type', 'text/html;charset=utf-8')
                res.end(data)
            }
        })
    } else if (url === '/img') {
        // url:统一资源定位符
        // 一个url 最终其实是要对应到一个资源的
        fs.readFile('./resource/signin_icon_qq.png', (err, data) => {
            if (err) {
                res.setHeader('Content-Type', 'text/plain;charset=utf-8')
                res.end('文件读取失败，请稍后重试')
            } else {
                // data 默认是二进制数据，可以通过 .toString 转为咱们能识别的字符串
                // res.end() 支持两种数据类型，一种是二进制，一种是字符串
                // 图片不需要指定编码了，因为我们常说的编码一般指的是：字符编码
                res.setHeader('Content-Type', 'image/jpeg')
                res.end(data)
            }
        })
    }
})

server.listen(3000, () => {
    console.log("Server is running...")
})