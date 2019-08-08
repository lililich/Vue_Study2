import Vue from 'vue'
// 1. 导入 vue-router 包
import VueRouter from 'vue-router'
// 2. 手动安装 VueRouter 
Vue.use(VueRouter)

// 导入自己的图标
import 'bootstrap/dist/css/bootstrap.css'
import './css/app.css'
// 导入MUI的样式表，和Bootstrap用法没有差别
import './lib/mui/css/mui.min.css'

//导入所以MintUI组件
//导入Mint-UI
// import MintUI from 'mint-ui'  //把所有组件都导入进来
// //这里可以省略node_modules这一层目录
// import 'mint-ui/lib/style.css'
// //将MintUI安装到Vue中
// Vue.use(MintUI)  //将所有的组件注册为全局的组件


// 按需导入Mint-UI组件
import {Button} from 'mint-ui'
// 使用Vue.component注册按钮组件
Vue.component(Button.name,Button)

// 导入 app 组件
import app from './App.vue'

// 导入 自定义路由模块
import router from './router.js'

var vm = new Vue({
  el: '#app',
  render: c => c(app), // render 会把 el 指定的容器中，所有的内容都清空覆盖，所以 不要 把 路由的 router-view 和 router-link 直接写到 el 所控制的元素中
  router // 4. 将路由对象挂载到 vm 上
})

// 注意： App 这个组件，是通过 VM 实例的 render 函数，渲染出来的， render 函数如果要渲染 组件， 渲染出来的组件，只能放到 el: '#app' 所指定的 元素中；
// Account 和 GoodsList 组件， 是通过 路由匹配监听到的，所以， 这两个组件，只能展示到 属于 路由的 <router-view></router-view> 中去；