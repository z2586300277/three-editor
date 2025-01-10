<template>
    <router-view />
    <div v-show="isShow">
        <div class="info">
            <div><el-link class="textc" @click="openUrl('community')">- 新 3D 案例社区</el-link></div>
            <div class="link">
                <el-link class="text" @click="openUrl('doc')">-文档</el-link>
                <el-link class="text" @click="openUrl('example')">-案例</el-link>
                <el-link class="text" @click="openUrl('editor')">-编辑器</el-link>
            </div>
            <div>
                <el-link class="text" @click="openUrl('author')">-QQ：2586300277</el-link>
            </div>
            <div>
                <el-link class="text" @click="openUrl('author')">-微信：z2586300277</el-link>
            </div>
            <div class="flexAuthor">
                <img class="logo" src="/site.png" alt="logo" width="20px" height="20px"> &nbsp;
                <el-link class="text" @click="openUrl('blog')">@优雅永不过时</el-link>
            </div>
        </div>
        <div class="pay">
            <div class="text1" @click="openUrl('wxPay')">为爱发电</div>
            <div><el-link class="text" @click="openUrl('wxPay')">赞助我</el-link></div>
            <img class="logo" @click="openUrl('wxPay')" src="/wx_pay.jpg" alt="logo" width="40px" height="40px">
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const isShow = ref(!localStorage.getItem('hide_author_info'))

const openUrl = (k) => window.open(__SITE_URLS__[k])

</script>

<style lang="less" scoped>
.textc {
    font-weight: bold;
    margin-bottom: 4px;
    font-size:12px ;
}
.info {
    position: fixed;
    bottom: 5px;
    z-index: 200;
    opacity: 0.8;
    margin-left: 2px;
    font-size: 12px;

    .link {
        display: flex;
        margin-bottom: 2px;
        justify-content: space-between;
    }

    .text {
        font-size: 12px;
        font-weight: bold;
    }

    .flexAuthor {
        display: flex;
        float: bottom;
        align-items: center;
    }
}

.pay {
    position: fixed;
    bottom: 5px;
    z-index: 200;
    opacity: 0.9;
    right: 0px;
    margin-right: 2px;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        margin-top: 2px;
        object-fit: contain;
        cursor: pointer;
    }

    .link {
        display: flex;
        margin-bottom: 2px;
        justify-content: space-between;
    }

    .text1 {
        cursor: pointer;
        color: #cfd3dc;
        font-weight: bold;
    }

    .text {
        font-size: 12px;
        font-weight: bold;
    }

}
</style>