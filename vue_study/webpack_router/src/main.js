import Vue from 'vue'
// 导入vue-router包
import VueRouter from 'vue-router'

// 手动安装VueRouter
Vue.use(VueRouter)

import app from './app.vue'
// 导入路由自定义模块
import router from './router.js'
let vm = new Vue({
    el: '#app',
    data: {},
    render: c => c(app),
    router,
})

// app这个组件是通过vm实例render函数渲染出来的，放到el: '#app'中去
// 路由监听的组件只能放到<router-view></router-view>中
