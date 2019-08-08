// mian.js是JS入口文件

// ES6导入JQuery文件

import $ from 'jquery'
// const $ = require('jquery')

// 使用import语法导入css样式，webpack默认只能打包JS文件，非JS文件需要安装加载器。
// 打开webpack.config.js配置文件，在里面新增一个配置节点，叫做module配置对象，里面有个rules属性，是个数组，存放了所有第三方文件的匹配和处理规则
import './css/style.css'
import './css/index.less'
import './css/index.scss'
// 注意：webpack处理第三方文件类型的过程：
// 1、发现不是JS文件，然后到配置文件中去，查找有没有对应的第三方loader规则
// 2、如果找到对应规则，就会调用对应的loader处理这种文件
// 3、调用loader的时候是从后往前调用，最后一个loader调用完毕后会把处理结果直接交给webpack进行打包合并，最终输出到bundle.js中去
import 'bootstrap/dist/css/bootstrap.min.css'
// 引用node_modules里的包可以不用前面的node_modules路径，默认会去这个目录里找

// jquery代码
$(function(){
    $('li:odd').css('backgroundColor','lightblue')
    $('li:even').css('backgroundColor',function(){
        return '#'+'eee'
    })
})

// class关键字是ES6里提供的新语法，用来ES6中的面向对象编程
class person{
    // 静态属性，直接通过类名来直接访问的属性person.info
    // 实例属性：通过实例来访问属性p1.info
    static info={name:'lx',age:'20'}
}

const p1 = new person()
// webpack中默认只能处理一部分ES6新语法，需要第三方loader来处理高级语法
// 通过Bable可以将高级语法转化为低级语法
console.log(person.info)
