// 导入vue-router包
import VueRouter from 'vue-router'

import account from './main/account.vue'
import goodslist from './main/goodslist.vue'

import login from './sub/login.vue'
import register from './sub/register.vue'
// 创建路由对象

let router = new VueRouter({
    routes:[
        {
            path: '/account',
            component: account,
            children: [
                {path: 'login', component: login},
                {path: 'register', component: register},
            ]
        },
        {path: '/goodslist', component: goodslist},
    ]
})
// 将router.js 暴露出去
export default router
