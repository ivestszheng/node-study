/*
 * @Descripttion: 
 * @Date: 2022-06-30 13:51:16
 * @LastEditTime: 2022-06-30 14:04:45
 */
const http = require('http')

const server = http.createServer((req,res)=>{
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello World\n')
})

const HOST = '127.0.0.1'
const PORT = 8080

server.on('request',(req,res)=>{
    console.log('Someone is visiiting our web server.');
})

server.listen(PORT,()=>{
    console.log(`Server is running at http://${HOST}:${PORT}/`);
})