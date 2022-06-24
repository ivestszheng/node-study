/*
 * @Descripttion: 
 * @Date: 2022-06-23 13:16:16
 * @LastEditTime: 2022-06-23 13:51:31
 */
// console.log('我的%s已经%d岁','猫',2)

// 清空命令行
// console.clear()

// const x = 1
// const y = 2
// const z = 3

// console.count('x的值为'+x+'且已经检查了几次')
// console.count('x的值为'+x+'且已经检查了几次')
// console.count('y的值为'+x+'且已经检查了几次')

// const oranges = ['橙子','橙子']
// const apples = ['苹果']

// oranges.forEach(fruit=>{
//     console.count(fruit)
// })

// apples.forEach(fruit => {
//     console.count(fruit)
// })

// const function2 = () => console.trace()
// const function1 = () => function2()
// function1()

// const doSomeThing = () => console.log('测试')
// const measureDoingSomething = () =>{
//     console.time('doSomeThing()')
//     // 做点事,并测量所需的时间
//     doSomeThing()
//     console.timeEnd('doSomeThing()')
// }
// measureDoingSomething()

// console.log('\x1b[33m%s\x1b[0m', '你好')
// const chalk = import('chalk')
// console.log(chalk.yellow('你好'))

const ProgressBar = require('progress')

const bar = new ProgressBar(':bacr',{total: 10})
const timer = setInterval(()=>{
    bar.tick()
    if(bar.complete){
        clearInterval(timer)
    }
},100)