// @ts-nocheck
/*
 * @Descripttion: JWT 认证
 * @Date: 2022-07-13 14:35:43
 * @LastEditTime: 2022-07-13 16:02:46
 */
const express = require('express');
const app = express();

const jwt = require('jsonwebtoken');
const expressJWT = require('express-jwt');

const cors = require('cors');
app.use(cors())

// 解析 post 表单数据的中间件
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// 定义密钥（字符串），用于加密和解密
const secretKey = 'IvesTsZheng'

// 注册将 JWT 字符串解析还原成 JSON 对象的中间件
// 注意：只要配置成功了 express-jwt 这个中间件，就可以把解析出来的用户信息，挂载到 req.user 属性上
app.use(expressJWT({ secret: secretKey,algorithms: ['HS256'], }).unless({ path: [/^\/api\//] }))

// 登录接口
app.post('/api/login', (req, res) => {
    // 将 req.body 请求体中的数据，转存为 userinfo 常量
    const userinfo = req.body
    // 登录失败
    if (userinfo.username !== 'admin' || userinfo.password !== '000000') {
        return res.send({
            status: 400,
            message: '登录失败！'
        })
    }

    // 登录成功后，调用 jwt.sign() 方法生成 JWT 字符串，并通过 token 属性发送给客户端。
    /**
     * params1: 用户的信息对象
     * params2: 加密的密钥
     * params3: 配置对象，可以配置当前 tonken 的有效期
     */
    // 记住：千万不要将密码加密到 token 字符中
    const tokenStr = jwt.sign({ username: userinfo.username }, secretKey, { expiresIn: '30s' })
    res.send({
        status: 200,
        message: '登录成功！',
        token: tokenStr // 要发送给客户端的 token 字符串
    })
})

// 这是一个有权限的 API 接口
app.get('/admin/getinfo', (req, res) => {
    console.log(req.user);
    res.send({
        status: 200,
        message: '获取用户信息成功！',
        data: req.user // 要发送给客户端的信息
    })
})

// 使用全局错误处理中间件，捕获解析 JWT 失败后产生的错误
app.use((err,req,res,next)=>{
    // 这次错误是由 token 解析失败导致的
    if(err.name === 'UnauthorizedError'){
        return res.send({
            status: 401,
            message: '无效的token'
        })
    }
    // 其它原因导致的错误
    res.send({
        status: 50,
        message: '未知错误'
    })
})

app.listen(8080, () => {
    console.log('http://127.0.0.1');
})