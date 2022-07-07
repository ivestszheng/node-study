/*
 * @Descripttion: 包的入口文件
 * @Date: 2022-07-04 14:06:25
 * @LastEditTime: 2022-07-07 09:38:14
 */
const date = require('./src/dateFormat')
const escape = require('./src/htmlEscape')

module.exports = {
    ...date,
    ...escape
}