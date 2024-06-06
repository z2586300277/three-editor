<template>
    <router-view />
    <div class="info">
        <div class="link">
            <el-link class="text" @click="openUrl('https://z2586300277.github.io/three-editor/docs/dist/')">-官网</el-link>
            <el-link class="text" @click="openUrl('https://z2586300277.github.io/three-editor/dist/#/codeMirror')">-案例</el-link>
            <el-link class="text" @click="openUrl('https://z2586300277.github.io/three-editor/dist/#/editor')">-编辑器</el-link>
        </div>
        <div class="flexAuthor">
            <img class="logo" src="/site.png" alt="logo" width="20px" height="20px"> &nbsp;
            <el-link class="text" @click="openUrl('https://github.com/z2586300277')">@优雅永不过时</el-link>
        </div>
    </div>
</template>

<script setup>
const openUrl = (url) => window.open(url)
</script>

<style lang="less" scoped>
.info {
    position: fixed;
    bottom: 5px;
    z-index: 9999;
    opacity: 0.6;
    margin-left: 2px;
    .link {
        display: flex;
        margin-bottom: 2px;
        justify-content: space-between;
    }
    .text {
        font-size: 11px;
        font-weight: bold;
    }
    .flexAuthor {
        display: flex;
        float: bottom;
        align-items: center;
    }
}
</style>