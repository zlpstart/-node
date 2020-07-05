// 0.安装
// 1.引包
let express = require('express')

// 2.创建你的服务器应用程序
//      也就是你原来的http.createServer
let app = express()

// 在express中 开放资源就是一个API的事

// 提供静态资源服务
// 只要这样做了，你就可以直接通过 /public/xxx 的方式访问 public 目录中的所有资源了
// let     变量           =            实际
app.use('/public/',express.static('./public/'))
app.use('/aa/',express.static('./static/'))


// 模板引擎 也就是一个API的事。。

// 当服务器收到get请求/的时候，执行回调处理函数

app.get('/',(req,res)=>{
    // 在express中可以直接通过 req.query来获取查询字符串参数
    console.log(req.query)
    res.send('hello express!')
})

app.get('pinglun',(req,res) => {
    // req.query
    // 在 Express 中 使用模板引擎有更好的方式： res.render('文件名',{模板对象})
    // 可以自己尝试去看art-template 官方文档： 如何让art-template结合 Express 来使用
})

app.get('/about',(req,res)=>{
    res.send('hello about!')
})

// 相当于 server.listen
app.listen(3000,()=>{
    console.log('app is running at port 3000')
})