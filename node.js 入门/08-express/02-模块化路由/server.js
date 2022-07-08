/*
 * @Descripttion: 
 * @Date: 2022-07-08 09:56:31
 * @LastEditTime: 2022-07-08 10:17:36
 */
const express = require('express');
const app = express()

// 导入路由模块
const router = require('./router');
// 注册路由模块
app.use('/api',router)

// app.use 作用就是用来注册全局中间件

app.listen(80,()=>{
    console.log('http://127.0.0.1');
})