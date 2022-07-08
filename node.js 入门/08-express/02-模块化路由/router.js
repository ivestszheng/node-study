/*
 * @Descripttion: 路由模块
 * @Date: 2022-07-08 09:57:56
 * @LastEditTime: 2022-07-08 10:08:00
 */
// 导入 express
const express = require('express');
// 创建路由对象
const router = express.Router()

// 挂载具体的路由
router.get('/user/list',(req,res) => {
    res.send('Get user list')
})

router.post('/user/add',(req,res) => {
    res.send('Add new user')
})

// 向外导出路由对象
module.exports = router