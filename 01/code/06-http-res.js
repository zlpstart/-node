var http = require('http')

var server = http.createServer()

// resquest 请求事件处理函数，需要接受两个参数：
//      Request 请求对象
//          请求对象可以用来获取客户端的一些请求信息，例如请求路径
//      Response 响应对象
//          响应对象可以用来给客户端发送响应消息

server.on('request',(request,response) => {
    console.log("收到客户端的请求了,请求路径是："+ request.url);

    // response 对象有一个方法：write 可以用来给客户端发送响应数据
    // write 可以使用多次，但最后一定要使用end来结束响应，否则客户端会一直等待
    
    // response.write("hello world");

    // 告诉客户端，我的话说完了，你可以呈现给用户了

    // response.end();

    // 由于现在我们的服务器的能力还非常弱，无论是什么请求，都只能响应hello world
    // 思考：
    //  我希望当请求不同的路径的时候 响应不同的结果
    // 例如：
    //  /index
    //  /login 登录
    //  /register 注册
    //  /haha   哈哈哈

    if(request.url == '/login'){
        response.write("登录")
        response.end();
    }else if(request.url == '/register'){
        response.write("注册")
        response.end();
    }else if(request.url == '/haha'){
        response.write("哈哈")
        response.end();
    }
    
})

server.listen(3000,() => {
    console.log("服务器启动成功了，可以通过http://127.0.0.1:3000/ 来访问")
})