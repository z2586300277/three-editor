<template>
    <div class="imageL">
        <div class="back" v-for="i, k in data.list">
            <div class="item">
                <video :src="Config.videoUrl + i" autoplay muted />
                <el-link @click="load(i)">
                    {{ i }}
                </el-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import { Config, fetchResource } from '../config'
import { ElMessage } from 'element-plus'

const data = reactive({ list: [] })

const props = defineProps(['emitEditor'])

function copyToClipboard(text) {

    const el = document.createElement('textarea');

    el.value = text;

    document.body.appendChild(el);

    el.select();

    document.execCommand('copy');

    document.body.removeChild(el);

}

function load(url) {

    copyToClipboard(Config.videoUrl + url)

    ElMessage.success('已复制' + Config.videoUrl + url)

}

fetchResource(Config.videoUrl).then(res => data.list = res)

</script>

<style lang="less" scoped>
.imageL {
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

        video {
            position: absolute;
            margin-top: 0px;
            z-index: -1;
            width: 65px;
            height: 55px;
            opacity: 1;
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
