<template>
    <router-view />
    <div class="info">
        <div class="link">
            <el-link class="text" @click="openUrl('doc')">-文档</el-link>
            <el-link class="text" @click="openUrl('example')">-案例</el-link>
            <el-link class="text" @click="openUrl('editor')">-编辑器</el-link>
        </div>
        <div>
            <el-link class="text" @click="openUrl('author')">-QQ 2586300277</el-link>
        </div>
        <div class="flexAuthor">
            <img class="logo" src="/site.png" alt="logo" width="20px" height="20px"> &nbsp;
            <el-link class="text" @click="openUrl('author')">@优雅永不过时</el-link>
        </div>
    </div>
</template>

<script setup>

const openUrl = (k) => window.open(__SITE_URLS__[k])

</script>

<style lang="less" scoped>
.info {
    position: fixed;
    bottom: 5px;
    z-index: 200;
    opacity: 0.6;
    margin-left: 2px;
    font-size: 11px;

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