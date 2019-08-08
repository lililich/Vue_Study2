// 入口文件

// 查找包规则：
// 1、找node_modules文件夹
// 2、在node_modules中查找对应的vue文件夹
// 3、在vue文件夹中查找package.json的包配置文件
// 4、在package.json文件查找main属性【main属性制定了这个包在被加载时候的入口文件】
// 导入的包功能不完整，只提供runtime-only方式，导入的是vue.runtime.common.js，可以再webpack.config.js里修改导入包的路径
import Vue from 'vue'

// import Vue from '../node_modules/vue/dist/vue.js'
// let login ={
//     template:"<h1>login组件，使用网页形式创建出来的</h1>"
// }

// 导入login组件，
import login from './login.vue'
// webpack默认是无法打包.vue文件，需要安装相关loader

let vm = new Vue({
    el: '#app',
    data: {
        msg: 'ok'
    },
    methods: {},

    // render: function (createElements) { // 在webpack中，如果想要通过vue把一个组件放到页面中展示，vm实例中使用render函数实现
    //     return createElements(login)
    // }
    render: c => c(login), //render函数简写

    // components: {
    //     login
    // },

})

import person,{title, address as ad}from './test.js'

console.log(person)
console.log(title)
console.log(ad)
