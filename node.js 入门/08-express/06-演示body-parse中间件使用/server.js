/*
 * @Descripttion: 
 * @Date: 2022-07-08 13:48:54
 * @LastEditTime: 2022-07-08 13:56:09
 */
const express = require('express');
const app = express();
const parser = require('body-parser');

// 导入解析表单数据的中间件
app.use(parser.urlencoded({ extended: false }));
// app.use(express.urlencoded({ extended: false }));
// Express 内置的 express.urlencoded 中间件，就是基于 body-parser 这个第三方中间件进一步封装出来的

// 定义一个路由
app.post('/user',(req,res)=>{
    // 如果没有配置任何解析表单数据的中间件，则 req.body 默认等于 undefined
    console.log(req.body);
    res.send('ok')
})

app.listen(80,()=>{
    console.log('http://127.0.0.1');
}) 