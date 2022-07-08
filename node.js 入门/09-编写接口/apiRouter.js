/*
 * @Descripttion: 
 * @Date: 2022-07-08 15:13:05
 * @LastEditTime: 2022-07-08 15:21:53
 */
const express = require('express');
const router = express.Router()

router.get('/get',(req,res) => {
    // 通过 req.query 获取客户端通过查询字符串，发送到服务器的数据
    const query = req.query

    res.send({
        status: 200,
        msg: 'GET 请求成功！',
        data: query
    })
})

router.post('/post',(req,res) => {
    const body = req.body
    
    res.send({
        status: 200,
        masg: 'POST 请求成功！',
        data: body
    })
})

module.exports = router