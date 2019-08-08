<template>
    <div>
        <h1>this app component</h1>
        <mt-button type="default" @click="show">button</mt-button>
        <mt-button type="default" icon="back" plain>button</mt-button>
        <mt-button type="primary" size="small">button</mt-button>
        <mt-button type="danger" size="large" disabled="">button</mt-button>
        <button type="button" class="mui-btn mui-btn-royal">
            紫色
        </button>
        <router-link to="/account">account</router-link>
        <router-link to="/goodslist">goodslist</router-link>
        <router-view></router-view>
    </div>

</template>

<script>
    import {Toast} from 'mint-ui'
    import './css/style.css'


    export default {
        name: "app",
        data: function () {
            return {
                toastInstance: null
            }
        },
        created(){
            this.getlist()
        },
        methods: {
            getlist(){
                this.show()
                setTimeout(() => { // 3秒延时自动消失
                    this.toastInstanse.close()
                },3000)
            },
            show(){
                // Toast("toast提示信息！")
                this.toastInstanse = Toast({
                    message: 'message',
                    duration: -1, // 弹出之后不消失
                    position: 'top',
                    iconClass: 'glyphicon glyphicon-heart',// bootstrap图标
                    className: 'mytoast'
                })
            }
        }
    }
</script>

<style scoped>

</style>
