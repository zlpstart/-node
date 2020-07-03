let fs = require('fs')
let http = require('http')

let comments = [
    {
        name: '张三',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    },
    {
        name: '张三2',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    },
    {
        name: '张三3',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    },
    {
        name: '张三4',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    },
    {
        name: '张三5',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    },
]

http
    .createServer((req, res) => {
        let url = req.url
        if (url === '/') {
            fs.readFile('./views/index.html', (err, data) => {
                if (err) {
                    return res.end('读取页面失败')
                }
                res.end(data)
            })
        } else if (url === '/post') {
            fs.readFile('./views/post.html', (err, data) => {
                if (err) {
                    return res.end('读取页面失败')
                }
                res.end(data)
            })
        }
        else if (url.indexOf('/public/' == 0)) {
            fs.readFile('.' + url, (err, data) => {
                if (err) {
                    return res.end('静态资源渲染失败')
                }
                res.end(data)
            })
        } else {
            res.readFile('./views/404.html', (err, data) => {
                res.setHeader('Content-Type', 'text/html;charset=utf-8')
                res.end(data)
            })
        }
    })
    .listen(3000, () => {
        console.log('running...')
    })