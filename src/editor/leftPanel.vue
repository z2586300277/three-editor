<template>
    <transition name="el-zoom-in-left">
        <div class="left" v-show="expand">
            <div class="list">
                <div class="iconotem" v-for="i, k in data" @click="setActive(k)">
                    <el-button :class="active == k ? 'active' : 'btn'" link :icon="i.icon" :title="i.title" />
                    <span :style="active == k ? 'color:rgb(182, 211, 244);font-weight:bold' : ''">{{ i.title }}</span>
                </div>
            </div>
            <component :emitEditor="emitEditor" :is="data[active].component" />
        </div>
    </transition>
    <div class="lico" :style="{ left: expand ? '287px' : '0px' }">
        <el-icon class="icon" @click="expand = !expand">
            <Expand v-if="!expand" />
            <Fold v-else />
        </el-icon>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Sky from './left/sky.vue';
import Build from './left/build.vue';
import List from './left/list.vue';
import Font from './left/font.vue';
import Image from './left/image.vue';
import Video from './left/video.vue';

defineProps(['emitEditor']);

const expand = ref(true)

const data = [

    { icon: 'set-up', title: '配置案例', component: List },

    { icon: 'office-building', title: '建筑', component: Build },

    { icon: 'partly-cloudy', title: '天空盒', component: Sky },

    { icon: 'Picture', title: '图片', component: Image },

    { icon: 'edit-pen', title: '字体', component: Font },

    { icon: 'video-play', title: '视频', component: Video },

]

let act = localStorage.getItem('active')

if(!act) {

    act = 0

}

if (act >= data.length) {

    act = 0

}

const active = ref(act);

function setActive(k) {

    localStorage.setItem('active', k);

    active.value = k;

}
</script>

<style lang="less" scoped>
.left {
    width: 287px;
    height: calc(100% - 50px); // 50px是顶部导航栏的高度
    background-color: #181818;
    position: fixed;
    top: 50px;
    left: 0;
    z-index: 100;
    display: flex;

    .list {
        height: 100%;
        display: grid;
        grid-template-rows: repeat(auto-fill, 62px);
        border-right: 1px solid #4a4a4a;
        justify-items: center;
        align-items: center;
        box-sizing: border-box;

        .btn {
            font-size: 30px;
        }

        .active {
            font-size: 36px;
            color: rgb(182, 211, 244);
            font-weight: 800;
            transition: all 0.3s;
        }
    }
}

.iconotem {
    width: 60px;
    height: 62px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    cursor: pointer;
    border-bottom: 1px solid #3e3e3e;
    user-select: none;
}

.lico {
    position: absolute;
    bottom: 30px;
    background-color: #181818;
    left: 287px;
    bottom: calc(100% - 50px- 40px);
    height: 30px;
    border-radius: 0px 3px 3px 0px;

    .icon {
        font-size: 30px;
        color: #fff;
        cursor: pointer;
        transition: all 0.8s;

        &:hover {
            transform: rotate(180deg);
        }
    }
}
</style>
