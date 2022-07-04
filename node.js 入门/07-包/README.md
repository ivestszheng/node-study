<!--
 * @Descripttion: 
 * @Date: 2022-07-04 14:08:18
 * @LastEditTime: 2022-07-04 15:00:34
-->
# 包

## 初始化包的基本结构

1. 新建`wusheng-tools`文件夹，作为包的根目录
2. 在`wusheng-tools`文件夹中，新建如下三个文件：
   - package.json (包管理配置文件)
   - index.js (包的入口文件)
   - README.md （包的说明文档）

## 开发属于自己的包

### 初始化 package.json

```json
{
    "name": "wusheng-tools",
    "version": "1.0.0",
    "main": "index.js",
    "description": "提供了格式化时间，HTMLEscape的功能",
    "keywords": ["wusheng","dateFormat","escape"],
    "license": "ISC"
}
```

### 在 index.js 中定义格式化时间的方法
```javascript
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
```

### 在 index.js 中定义转义 HTML 的方法

```javascript
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
```

### 在 index.js 中定义还原 HTML 的方法
```javascript
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
```

### 将不同的功能进行模块化拆分
