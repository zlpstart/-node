// 1.引入http核心模块
let http = require('http');
// 2.创建服务器实例
let server = http.createServer();
// 3.注册result
server.on("request",(req,res)=>{
    // console.log("收到请求")
    // res.write("呵呵")
    // res.end()

    // 上面的方式比较麻烦，推荐使用更简单的方式，直接end同时填写
    // res.end('hello world')

    // 1.根据不同的请求路径发送不同的响应结果
    //      req.url 获取到的是端口号之后的那一部分路径
    //      也就是说，所有的
    // 2.判断路径处理响应

    var url = req.url
    
    // if(url == '/login'){
    //     res.end("登录");
    // }else if(url == '/register'){
    //     res.end("注册");
    // }else if(url == '/haha'){
    //     res.end("哈哈");
    // }else {
    //     res.end('404 Not Found')
    // }

    if(url === '/products'){
        var products = [
            {
                name:"zlp",
                age:18
            },
            {
                name:"wjq",
                age:20
            }
        ]
    }
    
    

})
// 4.监听端口号
server.listen("3000",()=>{
    console.log("连接服务器成功")
})