// 接下来，我们要干一件使用Node很有成就感的一件事儿
// 你可以使用Node非常轻松的构建一个web服务器
// 在Node中专门提供了一个核心模块 : http
// http这个模块的职责就是帮你创建编写好服务器的

// 1. 加载http 核心模块
var http = require('http')

// 2. 使用http.createServer() 方法创建一个web服务器
//    返回一个 Serve 实例
var server = http.createServer()

// 3. 服务器要干嘛？
//      提供服务：对 数据的服务
//      发请求
//      接受请求
//      处理请求
//      给个反馈（发送响应）
//      注册 request 请求事件
//      当客户端请求过来，就会自动触发服务器的 request 请求事件，然后执行
server.on('request',() => {
    console.log("收到客户端的请求了")
})

// 4.绑定端口号，启动服务器
server.listen(3000,() => {
    console.log("服务器启动成功了，可以通过http://127.0.0.1:3000/ 来访问")
})