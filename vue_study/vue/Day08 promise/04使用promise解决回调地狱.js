const fs = require('fs')
const path = require('path')

function getFileByPath(fpath){
    return new Promise(function (resolve,reject) {
        fs.readFile(fpath, 'utf-8',(err,dataStr) => {
            if (err) return reject(err)
            resolve(dataStr)
        })
    })
}
// 需求先读取文件1，再读取文件2,3
// 通过.then指定回调函数的时候，成功的回调函数必须传，失败的回调可以省略
// 在上一个.then中返回一个新的promise实例，可以继续使用下一个.then来处理



// 捕获异常的两种
// 1、前面失败不影响后面
getFileByPath('./1.txt')
    .then(function (data) {
        console.log(data)
        return getFileByPath('./2.txt')
    }, function(err){                 //这样不影响后面文件的读取
        console.log('失败的结果'+err.message)
        return getFileByPath('./2.txt')
    }).then(function (data) {
        console.log(data)
    return getFileByPath('./3.txt')
    }).then(function (data) {
        console.log(data)
    })

// 2、前面失败后面也失败
getFileByPath('./1.txt')
    .then(function (data) {
        console.log(data)
        return getFileByPath('./2.txt')
    }).then(function (data) {
        console.log(data)
    return getFileByPath('./3.txt')
    }).then(function (data) {
        console.log(data)
    }).catch(function (err) {       //catch作用任何promise执行失败，立即停止，用catch捕获异常
        console.log(err.message)
})
