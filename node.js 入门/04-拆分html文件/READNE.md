<!--
 * @Descripttion: 
 * @Date: 2022-06-30 10:37:09
 * @LastEditTime: 2022-06-30 10:37:13
-->

# node 拆分 html 文件

## 要实现的功能

将要目录下的`index.html`页面拆分成三个文件，分别是：

- index.css
- index.js
- index.html

并且将拆分出来的3个文件，存放到`target`目录中。

## 实现步骤

1. 创建两个正则表达式，分别用来匹配`<style>`和`<script>`标签
2. 使用`fs`模块，读取需要被处理的`HTML`文件
3. 自定义`resolveCSS`方法，来写入`index.css`样式文件
4. 自定义`resolveJS`方法，来写入`index.js`脚本文件
5. 自定义`resolveHTML`方法，来写入`index.html`文件
