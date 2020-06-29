// require
// 端口号

let http = require('http');

let server = http.createServer()

server.on('request', (req, res) => {
    // 在服务器默认发送的数据，其实是utf8编码的内容
    // 但在浏览器不知道你是utf8编码的内容
    // 浏览器在不知道服务器响应内容的编码的情况下按照当前操作系统的默认编码去解析
    // 中文操作系统默认是 gbk
    // 解决方法就是正确的告诉浏览器，我给你发送的内容是什么编码的
    // 在http协议中，Content-Type 就是用来告诉对方我发送给你的数据内容是什么类型
    // res.setHeader('Content-Type','text/plain;charset=utf-8')
    // res.end('hello 世界')

    let url = req.url
    if (url === '/plain') {
        res.setHeader('Content-Type', 'text/plain;charset=utf-8')
        res.end('hello 世界')
    }else if(url === '/html'){
        // 如果你发送的是html格式的字符串，则也要告诉浏览器我给你发送的是text/html格式的文本
        res.setHeader('Content-Type', 'text/html;charset=utf-8')
        res.end(`<p>hello html<a href="">点我</a></p>`)
    }
})

server.listen(3000, () => {
    console.log("Server is running...")
})