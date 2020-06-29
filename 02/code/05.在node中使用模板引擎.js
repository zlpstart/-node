// art-template
// art-template 不仅可以在浏览器使用，也可以在Node中使用

// 安装：
//  cnpm install art-template
//  该命令在哪执行就会把包安装下载到哪里。默认会下载到 node_modules目录中

let template = require('art-template');
let fs = require('fs');

// 这里不是浏览器
// template('script 标签 id',{对象})

// template,render('模板字符串',替换对象)

// let tplStr = `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <p>大家好，我叫{{name}}</p>
//     <p>我今年{{age}}岁了</p>
//     <p>我来自{{province}}</p>
//     <p>我喜欢：{{each hobbies}} {{$value}} {{/each}}</p>
// </body>
// </html>
// `

fs.readFile('./template.html', (err,data) => {
    if (err) {
        return console.log("读写失败了")
    }

    // data是默认读取到的 二进制数据
    // 而模板需要引起的 render 方法需要接受的是字符串
    // 所以我们在这里 需要把data二进制数据 转为
    let ret = template.render(data.toString(), {
        name: 'Jack',
        age: 18,
        province: '北京市',
        hobbies: [
            '写代码',
            '唱歌',
            '打游戏'
        ],
        title:'个人信息'
    })
    console.log(ret)
})