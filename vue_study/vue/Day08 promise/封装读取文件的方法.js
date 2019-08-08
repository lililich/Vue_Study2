const fs = require('fs')
const path = require('path')

// // 普通读取文件的方式
// fs.readFile(path.join(__dirname,'./1.txt'), 'utf-8',(err,dataStr) => {
//     if (err) throw err
//     console.log(dataStr)
// })

// 封装方法的初衷：给定文件路径，返回读取到的内容
// function getFileByPath(fpath){
//     fs.readFile(fpath, 'utf-8',(err,dataStr) => {
//         if (err) throw err
//         // console.log(dataStr)
//         // return dataStr
//     })
// }

// var result = getFileByPath(path.join(__dirname,'./1.txt'))
// console.log(result) // undifined 异步请求没有return，要使用callback函数回调

// callback()放两个参数，一个err，一个dataStr
function getFileByPath(fpath, callback){
    fs.readFile(fpath, 'utf-8',(err,dataStr) => {
        if (err) return callback(err)
        callback(null, dataStr)
    })
}
getFileByPath(path.join(__dirname,'./1.txt'),(err, dataStr) =>{
    if (err) return console.log(err.message)
    console.log(dataStr)
})
