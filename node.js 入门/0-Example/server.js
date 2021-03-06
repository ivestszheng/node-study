/*
 * @Descripttion: Ndeo.js 应用程序示例
 * @Date: 2022-06-23 10:30:49
 * @LastEditTime: 2022-06-30 14:02:10
 */
const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req,res)=>{
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello World\n')
})

server.on('request',(req,res)=>{
    console.log('Someone is visiiting our web server.');
})

server.listen(port, hostname, ()=>{
    console.log(`Server runing at http://${hostname}:${port}/`)
})