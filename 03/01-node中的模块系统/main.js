// 默认得到的是对象
// 使用对象中的成员必须 点儿成员来访问
// 有时候，对于一个模块，我仅仅就希望到处一个方法就可以了


let fooExports = require('./foo')

// ReferenceError: foo is not defined
// console.log(foo)

console.log(fooExports)