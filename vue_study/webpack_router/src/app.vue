<template>
    <div>
        <h1>this app component</h1>
        <router-link to="/account">account</router-link>
        <router-link to="/goodslist">goodslist</router-link>
        <router-view></router-view>
    </div>

</template>

<script>
    export default {
        name: "app"
    }
</script>

<style scoped>

</style>
