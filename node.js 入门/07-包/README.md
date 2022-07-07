<!--
 * @Descripttion: 
 * @Date: 2022-07-04 14:08:18
 * @LastEditTime: 2022-07-07 11:26:01
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

### 发布包
在终端执行`npm login`命令，依次输入用户名、密码、邮箱后，即可登录成功

> 运行`npm login`命令前，必须先把**下包的服务器**地址切换为**npm 的官方服务器**，否则会导致发布包失败！

登录成功后终端会显示`Logged in as <YourUsername> on https://registry.npmjs.org/.`，如果地址不是`npm`仓库，代表登录错服务器。

登录后使用进入包的根目录，通过`npm publish`即可发布包。

### 删除已发布的包
```
npm unpublish <packageName> --force
```

> npm unpublish 命令 **只能删除72小时以内发布的包**且**删除后24小时内不能发布同名的包**
>
> **不要往npm上发布没有意义的包**

