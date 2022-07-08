/*
 * @Descripttion: 使用 express 创建最基本的服务器
 * @Date: 2022-07-07 14:19:16
 * @LastEditTime: 2022-07-07 16:36:36
 */
// 导入 express
const express = require('express');
// 创建 web 服务器
const app = express()
const PORT = 80

// 监听客户端的 GET 和 POST 请求，并向客户端响应具体的内容
app.get('/user', (req, res) => {
    // 通过 req.query 可以获取到客户端发送过来的 查询参数
    // 注意：默认情况下，req.query 是一个空对象
    console.log(req.query)
    // 调用 express 提供的 res.send() 方法，向客户端响应一个 JSON 对象
    res.send(req.query)
})

app.post('/user', (req, res) => {
    // 调用 express 提供的 res.send() 方法，向客户端响应一个 文本字符串
    res.send('请求成功')
})

// 注意：这里的 :id 是一个动态的参数
app.get('/user/:id',(req,res)=>{
    // req.params 是动态匹配到的 URL 参数，默认也是一个空对象
    console.log(req.params);
    res.send(req.params)
})

app.get('/user/:ids/:name',(req,res)=>{
    // req.params 是动态匹配到的 URL 参数，默认也是一个空对象
    console.log(req.params);
    res.send(req.params)
})

// 启动 web 服务器
app.listen(PORT, () => {
    console.log(`express server running on port http://127.0.0.1`);
})