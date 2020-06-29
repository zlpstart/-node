let fs = require('fs')

fs.readdir('E:/node Assins',(err,data)=>{
    if(err){
        console.log("目录不可用")
    }
    console.log(data)
})