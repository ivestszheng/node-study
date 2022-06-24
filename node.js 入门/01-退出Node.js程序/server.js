/*
 * @Descripttion: 
 * @Date: 2022-06-23 11:04:58
 * @LastEditTime: 2022-06-23 11:20:04
 */
const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Hi!')
})

const server = app.listen(3000, () => console.log('Server ready'))

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process terminated')
  })
})

setTimeout(()=>{
  process.kill(process.pid, 'SIGTERM')
},1000)