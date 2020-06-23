// fs 时候 file-system 的简写，就是文件系统的意思
// 在Node中如果想要进行文件操作，就必须引入fs这个核心模块
// 在fs这个核心模块中，就提供了所有的文件操作相关的API
// 例如：fs.readFile就是用来读取文件的

// 1.使用require方法加载fs核心模块
var fs = require('fs')

// 2.读取文件
//  第一个参数就是要读取的文件路径
//  第二个参数是一个回调函数
//      error  
//          如果读取失败 error 就是错误对象
//          如果读取成功 error 就是null
//      data
//          如果读取失败 undefined 没有数据 
//          如果读取成功 data  就是读取到的数据
//        
//          成功
//              data数据
//              error null
//          失败
//              data null
//              error 错误对象
fs.readFile('./data/hello.txt',(err,data)=>{
    // <Buffer 68 65 6c 6c 6f 20 6e 6f 64 65 6a 73 0d 0a>
    // 文件中存储的其实都是二进制数据 0 1
    // 这里为什么看到的不是 0 和 1 呢？原因是因为二进制转为16进制了
    // 但是无论是二进制还是 16 进制，人类都不认识
    // 所以我们可以通过 toString 方法把其转为我们能认识的字符
    // console.log(data)

    // console.log(data.toString())

    // 在这里就可以通过判断 error 来确认是否有错误发生
    if(err){
        console.log('读取文件失败了')
        return
    }else {
        console.log(data.toString())
    }
})