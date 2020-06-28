let http = require('http')

let serve = http.createServer()

serve.on("request",(req,res)=>{
    console.log(`收到请求了,请求路径是${req.url}`)
})

serve.listen ('80',()=>console.log("服务器启动成功，可以访问了"))