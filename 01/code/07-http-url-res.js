let http = require('http');

// 1.创建serve
let server = http.createServer()

// 2.监听resquest请求事件，设置请求处理函数
server.on('request',(req,res)=>{
    console.log("收到请求了，请求路径是：" + req.url)
    console.log("请求我的客户与短的端口号是：" + req.socket.remoteAddress,req.socket.remotePort)

    // 这种方式比较多，也是最常见的
    // res.end('hello world')

    // 根据不同的请求路径，发送不同的响应结果
    // 1.获取请求路径
    //      req.url 获取到的是端口号之后的那一部分路径
    //      也就是说所有的url都是以/开头的
    // 2.判断路径处理响应

    let url = req.url
    // if(url === '/'){
    //     res.end('index page')
    // }else if(url === '/login'){
    //     res.end('login page')
    // }else {
    //     res.end('404 Not Found')
    // }


    // 返回json
    if(url === '/products'){
        var products = [
            { 
                name:'苹果 X',
                price:8888
            },
            { 
                name:'菠萝 X',
                price:5000
            },
            { 
                name:'小辣椒 X',
                price:1999
            },
        ]
        // 响应内容只能是二进制数据 或者 字符串
        // 数字
        // 对象
        // 数组
        // 布尔值
        // 以上都不行

        // 转换成字符串形式 再写入
        res.end(JSON.stringify(products))
    }else {
        res.end('404 Not Fount')
    }


})

// 3.绑定端口号，启动服务
server.listen(3000,()=>{
    console.log("服务器连接成功")
})