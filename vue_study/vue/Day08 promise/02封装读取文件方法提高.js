const fs = require('fs')
const path = require('path')

// 将成功失败回调分开处理
// succCb, errCb形参，是回调函数
function getFileByPath(fpath, succCb, errCb){
    fs.readFile(fpath, 'utf-8',(err,dataStr) => {
        if (err) return errCb(err)
        succCb(null, dataStr)
    })
}

// getFileByPath(path.join(__dirname,'./1.txt'), function (data) {
//     console.log(data + '成功')
//     },function (err) {
//         console.log('失败' + err.message)
// })

// 需求先读取文件1，再读取文件2,3
// 回调嵌套很多层，回调地狱
getFileByPath(path.join(__dirname,'./1.txt'), function (data) {
    console.log(data + '成功')

    getFileByPath(path.join(__dirname,'./2.txt'), function (data) {
    console.log(data + '成功')

        getFileByPath(path.join(__dirname,'./3.txt'), function (data) {
            console.log(data + '成功')
        })
    })
})
