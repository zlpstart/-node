// 在Node中，每个模块内部都有一个自己的 module对象
// 该对象module中，有一个成员就叫:exports
// 也就是说 如果你需要对外导出成员，只需要把导出的成员挂在到module,export中

// 我们每次发现，每次导出接口成员的时候都通过 module.exports.xxx = xxx 的方式很麻烦，点儿的太多了
// 所以，Node为了简化你的操作，专门提供了一个变量：exports 等于 module.exports

// let module = {
//     exports:{

//     }
// }

// 当一个模块需要导出单个成员的时候
// 直接给exports赋值是不管用的

// 也就是说在模块中还有这么一句代码
let exports = module.exports

exports.foo = 'bar'
// 谁来require我，谁就得到module,export
// 默认在代码的最后有一句：
// 一定要记住，最后 return 的是 module.exports
// 不是 exports
// 所以你给 exports 重新赋值 不管用
// return module.exports

// exports === module.exports
// 两者一致，那就说明，我可以使任意一方来导出