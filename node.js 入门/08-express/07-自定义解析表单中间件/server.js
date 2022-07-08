/*
 * @Descripttion: 
 * @Date: 2022-07-08 14:13:31
 * @LastEditTime: 2022-07-08 14:44:06
 */
const express = require('express');
const app = express();
const customBodyParser = require('./custom-body-parser');
// 这是解析表单数据的中间件
app.use(customBodyParser)

app.post('/user',(req,res)=>{
    res.send(req.body)
})

app.listen(80,()=>{
    console.log('http://127.0.0.1');
}) 