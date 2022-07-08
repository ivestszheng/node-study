/*
 * @Descripttion: 
 * @Date: 2022-07-08 10:31:37
 * @LastEditTime: 2022-07-08 10:43:54
 */
const express = require('express');
const app = express()

// 定义一个最简单的中间件函数
const mw = (req,res,next) => {
    console.log('这是最简单的中间件函数');
    // 把流转关系转交给下一个中间件或路由
    next()
}

// 将 mw 注册为全局生效的中间件
// 客户端发起的任何请求，到达服务器之后，都会触发的中间件
app.use(mw)

app.get('/',(req,res)=>{
    res.send('Home page.')
})

app.get('/user',(req,res)=>{
    res.send('User page.')
})

app.listen(80,()=>{
    console.log('http://127.0.0.1');
})