/*
 * @Descripttion: 
 * @Date: 2022-07-04 14:27:36
 * @LastEditTime: 2022-07-04 15:09:10
 */
const wusheng = require('./wusheng-tools')

// const dtStr = wusheng.dateFormat(new Date())
// console.log(dtStr);

const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>'
const str = wusheng.htmlEscape(htmlStr)
// console.log(str);

const str2 = wusheng.htmlUnEscaped(str)
console.log(str2);