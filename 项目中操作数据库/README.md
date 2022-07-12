<!--
 * @Descripttion: 
 * @Date: 2022-07-12 10:03:01
 * @LastEditTime: 2022-07-12 10:04:20
-->

# 项目中操作 MySQL

1. 安装操作 MySQL 数据库的第三方模块（mysql）
2. 通过 mysql 模块链接到 MySQL 数据库
3. 通过 mysql 模块执行 SQL 语句

## 安装 mysql 模块

```bash
npm install mysql
```

## 配置 mysql 模块

```js
const mysql = require('mysql');

const db = mysql.createPool({
    host: '127.0.0.1', // 数据库的 IP 地址
    user: 'root', // 登录数据库的账号
    password: 'root', // 登录数据库的密码
    database: 'my_db_01' // 指定要操作哪个数据库
})
```

## 测试 mysql 模块能否正常工作

```js
...
// 测试 mysql 能否正常工作
db.query('select 1',(err,results)=>{
    // mysql 模块工作期间报错了
    if(err) return console.log(err.message)
    // 能够正常执行 SQL 语句
    console.log(results);
})
```

