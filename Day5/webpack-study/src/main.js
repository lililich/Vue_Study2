// 这是main.js 是我们项目的js入口

// 1.导入Jquery
// import *** from ***是ES6中导入模块的方式
// 由于ES6代码太高级，浏览器解析不了，所以这一行执行报错
import $ from 'jquery'
// const $ = require('jquery')

// 使用import语法，导入css样式表
// 注意：webpack默认只能处理js类型的文件，无法处理其他的非js类型的文件
// 如果需要非JS类型的文件，我们需要手动安装一些合适的第三方loader加载器
// 1.如果要打包处理css文件，需要安装npm i style-loader css-loader -D
// 2.打开webpack.config.js这个配置文件，在里面新增一个配置节点叫module，它是一个对象，在这个module对象上有一个rules属性，是个数组，这个数组中存放了所有第三方文件的匹配和处理规则
import './css/index.css'
import './css/index.less'
import './css/index.scss'

$(function(){
    $('li:odd').css('backgroundColor','pink')
    $('li:even').css('backgroundColor',function(){
        return'#' + 'FF6900'
    })
})

// 经过演示，webpack可以做哪些事情
// 1.webpack能够处理js间互相依赖关系
// 2.webpack能够处理js兼容问题，把高级的浏览器不识别的语法转为低级的浏览器能识别的语法
// 刚才运行的命令格式：webpack 要打包的文件路径 打包好要输出的文件路径