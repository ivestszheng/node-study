/*
 * @Descripttion: 
 * @Date: 2022-07-13 14:04:58
 * @LastEditTime: 2022-07-13 14:06:25
 */
const express = require('express');
const app = express();
const session = require('express-session')

// 配置 session 中间件
app.use(session({
    secret: '',
    resave: false,
    saveUninitialized: true
}))

