// 如果是非路径形式的模块标识
// 路径形式的模块:
// ./ 当前目录不可省
// ../ 上一级目录，不可省略
// /xxx 几乎不用
// d:/a/foo.js 几乎不用
// 首位的 / 在这里标识的是当前文件模块所属磁盘根路径
// .js后缀名可以省略
// rquire('模块标识符')

// 核心模块的本质也是文件
// 核心模块文件已经被编译到了二进制文件中了，我们只需要按照名字来加载就可以了
// require('fs')
// require('http')

// 第三方模块
// 凡是第三方模块都必须通过 npm 来下载
// 使用的时候可以通过require('包名')的方式来进行加载才可以使用
// 不可能有任何一个第三方包和核心模块的名字是一样的
// 既不是核心模块、也不是路径形式的模块、
//      先找到当前文件所属目录中的 node-modules 目录
//      node_modules/art-template
//      node_modules/art-template/package.json 文件
//      node_modules/art-template/package.json 文件中的 main属性
//      main属性中就记录了 art-template 的入口模块
//      然后加载使用这个第三方包
//      实际上最终加载的还是文件
// 
//      如果package.json 文件不存在或者 main 指定的入口模块是在
//      则 node 会自动找该目录下的index.js
//      也就是说 index.js 会作为一个默认备选项
//      
//      如果以上所有任何一个条件都不成立，则会进入上一级目录中的node_modules 目录查找
//      如果上一级还没有，则会继续网上上一级查找
//      。。。
//      如果直到当前磁盘根目录还找不到，最后报错:
//      can not find module xxx
// var template = require('art-template)
//
// 注意：我们一个项目有且只有一个node_modules,放在项目根目录中，这样的话所有子目录中的代码都可以加载到子项目中
// 不会出现多个 node_modules
// 模块查找机制
//      优先从缓存加载
//      核心模块
//      路径形式的文件模块
//      第三方模块
//          node_modeules/art-template/
//          node_modeules/art-template/package.json
//          node_modeules/art-template/package.json main
//          index.js 备选项
//          进入上一级目录找 node_modules
//          按照这个规则依次网上找，直到磁盘根目录还找不到，最后报错
//      一个项目有且仅有一个 node_modules 而且是存放在项目的根目录

// 如果想要了解更多底层细节，可以参考：《深入浅出Node.js》中的模块系统章节
let template = require('art-template')