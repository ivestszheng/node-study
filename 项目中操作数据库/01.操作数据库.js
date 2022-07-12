/*
 * @Descripttion: 
 * @Date: 2022-07-12 10:14:15
 * @LastEditTime: 2022-07-12 15:50:25
 */
const mysql = require('mysql');

// 建立与数据库的连接
const db = mysql.createPool({
    host: '192.168.102.191', // 数据库的 IP 地址
    user: 'root', // 登录数据库的账号
    password: 'root', // 登录数据库的密码
    database: 'my_db_01' // 指定要操作哪个数据库
})

/**
 // 测试 mysql 能否正常工作
db.query('select * FROM users WHERE username="无声"leno',(err,results)=>{
    // mysql 模块工作期间报错了
    if(err) return console.log(err.message)
    // 能够正常执行 SQL 语句
    // 注意：如果执行的是 SELECT 语句，则执行的结果是数组
    console.log(results);
})
 */

/**
// 向 users 表中，插入一条数据
const user ={ username: 'Spider-Man', password: 'pcc123'}
// 定义待执行的的 SQL 语句, ? 是占位符
const sqlStr = 'INSERT INTO users (username,password) VALUES (?, ?)'
// 执行 SQL 语句
db.query(sqlStr,[user.username,user.password],(err,results)=>{
    if(err) return console.log(err.message)
    // 成功了
    // 注意：如果执行的是 INSERT INTO 插入语句，则 results 是一个对象
    // 可以通过 affectedRows 属性，来判断是否插入数据成功
    if(results.affectedRows === 1){
        console.log('插入数据成功！');
    }
})
 */

/*
// 演示插入数据的便捷方式
const user ={ username: 'Spider-Man2', password: 'pcc4321'}
// 定义待执行的 SQL 语句
const sqlStr = 'INSERT INTO users set ?'
// 执行 SQL 语句
db.query(sqlStr,user,(err,results)=>{
    if(err) console.log(err)
    if(results.affectedRows ===1){
        console.log('插入数据成功！');
    }
})
*/

/*
// 更新用户信息
const user = { id: 6,username: 'aaa',password: '000'}
// 定义 SQL 语句
const sqlStr = 'UPDATE users set username=?,password=? where id=?'
// 执行 SQL 语句
db.query(sqlStr,[user.username,user.password,user.id],(err,results)=>{
    if(err) console.log(err);
    // 执行 UPDATE 语句之后,执行的结果,也是一个对象,可以通过 affectedRows 判断是否更新成功
    if(results.affectedRows === 1) console.log('更新成功！');
})
*/

/*
// 更新用户的便捷方式
const user = { id: 6, username: 'aaaa', password: '0000' }
// 定义 SQL 语句
const sqlStr = 'UPDATE users SET ? where id=?'
// 执行 SQL 语句
db.query(sqlStr, [user, user.id], (err, results) => {
    if (err) return console.log(err);
    if (results.affectedRows === 1) console.log('更新数据成功')
})
*/

/*
// 删除数据
const sqlStr = 'DELETE FROM users WHERE id=?'
// 如果 SQL 语句中有多个占位符，则必须使用数组为每个占位符指定具体的值
// 如果 SQL 语句中只有一个占位符，则可以省略数组
db.query(sqlStr,7,(err,results)=>{
    if(err) return console.log(err)
    if(results.affectedRows === 1) return console.log('删除数据成功！');
})
*/

// 标记删除（软删除）
// 使用标记删的形式，来模拟删除的动作
const sqlStr = 'UPDATE users set status=? where id=?'
db.query(sqlStr,[1,6],(err,results)=>{
    if(err) return console.log(err)
    if(results.affectedRows === 1) return console.log('标记删除数据成功！')
})