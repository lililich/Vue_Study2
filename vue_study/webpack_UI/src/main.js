import Vue from 'vue'
// 导入vue-router包
import VueRouter from 'vue-router'
// 手动安装VueRouter
Vue.use(VueRouter)

// 引入mint-ui全部组件
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI)

// 按需引入mint-ui Button, Toast组件
import { Button, Toast } from 'mint-ui'
// 注册组件
Vue.component(Button.name, Button)
Vue.component(Toast.name, Toast)

// 导入bootstrap样式
import 'bootstrap/dist/css/bootstrap.min.css'
// 导入mui样式，手动安装
import './lib/mui/css/mui.min.css'

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
