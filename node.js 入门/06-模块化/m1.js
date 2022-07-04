/*
 * @Descripttion: 
 * @Date: 2022-07-04 09:18:30
 * @LastEditTime: 2022-07-04 09:59:22
 */
console.log('加载了m1这个用户自定义模块');

module.exports.username = '无声'

module.exports.sayHello = function(){
    console.log('Hello');
}

module.exports = {
    nickname: "Fe无声",
    sayHello: function(){
        console.log('New Hello');
    } 
}
