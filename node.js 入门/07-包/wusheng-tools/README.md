<!--
 * @Descripttion: 
 * @Date: 2022-07-04 14:06:38
 * @LastEditTime: 2022-07-07 09:53:49
-->
## 安装
```
npm install wusheng-tools
```

## 导入
```js
const wusheng = require('wusheng-tools');
```

### 格式化时间
```js
// 调用 dateFormat 对时间进行格式化
const dtStr = wusheng.dateFormat(new Date());
// 结果 2022-07-07 09:49:10
console.log(dtStr);
```

## 转义 HTML 中的特殊字符
```js
// 带转换的 HTML 字符串
const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>'
// 调用 htmlEscape 方法进行转换
const str = wusheng.htmlEscape(htmlStr)
```

## 还原 HTML 中的特殊字符
```js
// 还原 HTML 字符串
const str2 = wusheng.htmlUnEscaped(str)
```

## 开源协议
ISC