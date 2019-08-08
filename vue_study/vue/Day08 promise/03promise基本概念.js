// // 形式上的异步操作
// let promise = new Promise()
//
// 具体的异步操作
// let promise = new Promise(function () {
//     // function里是具体的异步操作
//
// })

const fs = require('fs')
const path = require('path')

// promise实例就会立即操作异步操作函数
// let promise = new Promise(function () {
//     fs.readFile(fpath, 'utf-8',(err,dataStr) => {
//         if (err) throw err
//         console.log(dataStr)
//     })
// })

// js 里只有function才会按需调用，其他的创建就调用，所以将promise放到一个function中

// promise执行步骤1，创建函数
// promise执行步骤2，执行方法
// promise执行步骤3，得到实例p
// promise执行步骤4，调用成功失败回调函数，然后读取文件

function getFileByPath(fpath){
    let promise = new Promise(function (resolve,reject) {
        fs.readFile(fpath, 'utf-8',(err,dataStr) => {
            if (err) return reject(err)
            resolve(dataStr)
        })
    })
    return promise
}

let p = getFileByPath(path.join('./1.txt'))


p.then(function (data) {
    console.log(data + '成功')
}, function (err) {
    console.log(err.message)
})

// getFileByPath(path.join('./2.txt')).then(function (data) {
//     console.log(data + '成功')
// }, function (err) {
//     console.log(err.message)
// })
