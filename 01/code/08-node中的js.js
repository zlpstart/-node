// 用来获取机器信息的
let os = require('os')

// 用来操作路径的
let path = require('path')

// 获取当前机器的cpu信息
console.log(os.cpus())

// 获取当前机器的内存大小   字节
console.log(os.totalmem())

// ex
path.extname('c:/a/b/c/d/hello.txt')