/*
 * @Descripttion: 
 * @Date: 2022-07-08 15:09:58
 * @LastEditTime: 2022-07-08 15:41:29
 */
const express = require('express');
const router = require('./apiRouter');
const cors = require('cors');
const app = express()

app.use(express.urlencoded({ extended: false }));
app.use(cors())
app.use('/api', router)

app.listen(80, () => {
    console.log('http://127.0.0.1');
})

