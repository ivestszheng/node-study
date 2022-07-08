// @ts-nocheck
/*
 * @Descripttion: 
 * @Date: 2022-07-08 10:48:18
 * @LastEditTime: 2022-07-08 10:55:55
 */
const express = require('express');
const app = express()

app.use((req,res,next)=>{
    // 获取到请求到达服务器的时间
    const TIME = Date.now()
    // 为 req 对象挂载自定义属性，从而把时间共享给后面的所有路由
    req.startTime = TIME
    next()
})

app.get('/',(req,res)=>{
    res.send('Home page.' + req.startTime)
})

app.get('/user',(req,res)=>{
    res.send('User page.' + req.startTime)
})

app.listen(80,()=>{
    console.log('http://127.0.0.1');
}) 