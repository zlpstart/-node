let foo = 'bar'

function add(x,y){
    return x + y
}

// 你可以认为 在每个模块的最后 return 了一个 exports
// exports = add 

// 如果一个模块需要直接导出某个成员，而非挂在的方式
// 那这个时候必须通过下面这种方式
// module.exports = add

// 只能得到我想给你的成员
// 这样做的目的是为了解决变量名冲突的问题
// exports.add = add;

// exports 是一个对象
// 我们可以通过多次为这个对象添加成员实现对外导出多个内部成员

// exports.str = 'hello'

// 现在我有一个需求
// 我希望加载得到的直接就是一个方法
// 方法
// 字符串
// 数字
// 数组

module.exports = {
    add:function(){
        return x + y
    },
    str:'hello'
}