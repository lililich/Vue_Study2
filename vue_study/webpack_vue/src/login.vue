<template>
    <div>
        <h1>这是login组件，使用.vue文件定义出来的，runtime运行环境渲染到页面---{{msg }}</h1>
        <input type="button" value="show" @click="show">
    </div>
</template>

<script>
    export default {
        data(){
            return {
                msg: '123'
            }
        },
        methods: {
            show() {
                console.log('调用了login.vue中的show方法')
            }
        }
    }
</script>

<style scoped>

</style>
