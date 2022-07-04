/*
 * @Descripttion: 包的入口文件
 * @Date: 2022-07-04 14:06:25
 * @LastEditTime: 2022-07-04 15:10:49
 */

// 定义格式化时间的函数
function dateFormat(dateStr){
    const dt = new Date(dateStr)

    const y = dt.getFullYear()
    const m = padZero(dt.getMonth() + 1)
    const d = padZero(dt.getDate())

    const hh = padZero(dt.getHours())
    const mm = padZero(dt.getMinutes())
    const ss = padZero(dt.getSeconds())

    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}

// 定义一个补零的函数
function padZero(n){
    return n > 9 ? n : '0' + n
}

// 定义转义 HTML 字符的函数
function htmlEscape(htmlstr){
    return htmlstr.replace(/<|>|"|&/g,(match)=>{
        switch(match){
            case '<':
                return '&lt;'
            case '>':
                return '&gt;'
            case '"':
                return '&quot;'
            case '&':
                return '&amp;'
        }
    })
}

// 定义还原 HTML 字符串的函数
function htmlUnEscaped(str){
    return str.replace(/&lt;|&gt;|&quot;|&amp;/g,(match)=>{
        switch(match){
            case '&lt;':
                return '<'
            case '&gt;':
                return '>'
            case '&quot;':
                return '"'
            case '&amp;':
                return '&'
        }
    })
}

// 暴露需要的成员
module.exports = {
    dateFormat,
    htmlEscape,
    htmlUnEscaped
}