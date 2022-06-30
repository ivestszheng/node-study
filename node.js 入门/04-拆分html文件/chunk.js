/*
 * @Descripttion: 拆分文件js
 * @Date: 2022-06-30 10:49:05
 * @LastEditTime: 2022-06-30 13:00:12
 */
const fs = require('fs')
const path = require('path');

const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

fs.readFile(path.join(__dirname, './index.html'), 'utf8', (err, dataStr) => {
    if (err) throw new Error(`读取 HTML 文件失败${err.message}`)

    resolveCSS(dataStr)
    resolveJS(dataStr)
    resolveHTML(dataStr)
})

function resolveCSS(htmlStr) {
    const [res] = regStyle.exec(htmlStr)
    const newCSS = res.replace('<style>', '').replace('</style>', '')

    fs.writeFile(path.join(__dirname, './target/index.css'), newCSS, (err) => {
        if (err) {
            console.log(`写入 CSS 样式失败${err.message}`)
        } else {
            console.log('写入样式文件成功！');
        }
    })
}

function resolveJS(htmlStr) {
    const [res] = regScript.exec(htmlStr)
    const newJS = res.replace('<script>', '').replace('</script>', '')

    fs.writeFile(path.join(__dirname, './target/index.js'), newJS, (err) => {
        if (err) {
            console.log(`写入 JS 失败${err.message}`)
        } else {
            console.log('写入 JS 文件成功！');
        }
    })
}

function resolveHTML(htmlStr) {
    const newHTML = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./index.css" />')
        .replace(regScript,'<script src="./index.js"></script>')
    
    fs.writeFile(path.join(__dirname,'./target/index.html'),newHTML,(err)=>{
        if(err) return console.log(`写入 HTML 文件失败！${err.message}`)
        console.log('写入 HTML 页面成功！');
    })
}