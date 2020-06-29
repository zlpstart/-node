let fs = require('fs')

fs.readdir('E:/黑马node/node/node assets',(err,data)=>{
    if(err){
        return console.log("目录不可用")
    }
    console.log(data)
})