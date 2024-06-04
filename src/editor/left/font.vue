<template>
    <div class="fontL">
        <div class="back" v-for="i, k in data.list">
            <div class="item">
                <img src="/vite.svg" />
                <el-link @click="load(i)">
                    {{ sl(i) }}
                </el-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue';
import { Config, fetchResource } from '../config'
import { ElMessage } from 'element-plus'

const data = reactive({ list: [] })

const props = defineProps(['emitEditor'])

function sl(v) {
    return v.replace(/.json/g, '')
}

function copyToClipboard(text) {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}

function load(url) {
    copyToClipboard(Config.fontUrl + url)
    ElMessage.success('已复制' + Config.fontUrl + url)
}

fetchResource(Config.fontUrl).then(res => data.list = res)
</script>

<style lang="less" scoped>
.fontL {
    padding: 4px;
    box-sizing: border-box;
    display: grid;
    grid-template-rows: repeat(auto-fit, 80px);
    grid-template-columns: repeat(2, 1fr);
    overflow: scroll;
    height: 100%;
    justify-items: center;
    width: calc(100% - 60px);

    .back {
        height: 70px;
        width: 90px;
        border-radius: 6px;
        border: 1px solid #676768;
        display: flex;
        padding: 5px;
        box-sizing: border-box;
    }

    .item {
        position: relative;

        img {
            position: absolute;
            z-index: -1;
            width: 50px;
            height: 50px;
            opacity: 0.25;
        }

        border: 1px solid #3d3d3d;
        border-radius: 3px;
        height: 100%;
        width: 100%;
        word-wrap: break-word;
        word-break: break-all;
        font-size: 12px;
        display: flex;
        overflow-wrap: break-word;
        text-align: center;
        justify-content: center;
        align-content: center;
        justify-items: center;
        align-items: center;
        padding: 4px;
        box-sizing: border-box;
    }

}
</style>
