var fs = require('fs')

// 第一个参数：文件路径
// 第二个参数：文件内容
// 第三个参数：回调函数
//      error
//
//      成功：
//          文件写入成功
//          error 是 Null
//      失败：
//          文件写入失败
//          error就是错误对象

fs.writeFile('./data/zlp1.md','1111',(error) => {
    if(error){
        console.log("写入文件失败了")
    }else {
        console.log("写入文件成功了")
    }
})