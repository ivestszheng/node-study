/*
 * @Descripttion: 使用 express 创建最基本的服务器
 * @Date: 2022-07-07 14:19:16
 * @LastEditTime: 2022-07-07 14:23:46
 */
// 导入 express
const express = require('express');
// 创建 web 服务器
const app = express()
const PORT = 80
// 启动 web 服务器
app.listen(PORT, () => {
    console.log(`express server running on port http://127.0.0.1`);
})