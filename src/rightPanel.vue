<template>
    <transition name="el-zoom-in-bottom">
        <div class="right" v-show="expandR">
            <div class="main">
                <el-card class="box-card">
                    <template #header>
                        <div class="card-header">
                            <span>名称：{{ sl(emitEditor.info?.currentModel?.name) }}</span>

                        </div>
                    </template>
                    <div class="text item" v-for="i in ['x', 'y', 'z']">{{ '坐标 ' + i + ' : ' +
            sl(emitEditor.info?.point[i])
                        }}</div>
                    <template #footer><el-button class="button"
                            @click="emitEditor.threeEditor.setLight('AmbientLight', { intensity: 3 })"
                            text>快速添加环境光</el-button></template>
                </el-card>
                <br />
                <el-card class="box-card">
                    <template #header>
                        <div class="card-header">
                            <span>Css2D/3D 使用 </span>
                        </div>
                    </template>
                    <div>测试DOM: 
                        <span ref="card"> 2D:<img class="logo" src="/site.png" alt="logo" width="25px"height="25px"></span>
                        <span ref="card2"> 3D:<img class="logo" src="/site.png" alt="logo" width="25px"height="25px"></span>
                    </div>
                    <template #footer>
                        <span style="display: flex;"> <el-button class="button" @click="useCss2D" text>Css2D</el-button>
                            <el-button class="button" @click="useCss3D" text>Css3D</el-button></span>
                    </template>
                </el-card>
            </div>
        </div>
    </transition>
    <div class="lico1" :style="{ right: !expandR ? '0px' : '287px' }">
        <el-icon class="icon" @click="expandR = !expandR">
            <Expand v-if="!expandR" />
            <Fold v-else />
        </el-icon>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { THREE } from 'three-editor-cores'

const props = defineProps(['emitEditor']);

const card = ref(null);
const card2 = ref(null);

const useCss2D = () => props.emitEditor.threeEditor.setCss2dDOM(card.value, new THREE.Vector3(0, 0, 0))

const useCss3D = () => props.emitEditor.threeEditor.setCss3dDOM(card2.value, new THREE.Vector3(0, 0, 0)).scale.set(0.1, 0.1, 0.1)


function sl(i) {

    if (!i) return '';

    if (typeof i === 'number') return i.toFixed(12)

    else return i.slice(0, 12);

}

const expandR = ref(true);


</script>

<style lang="less" scoped>
.right {
    width: 287px;
    height: calc(100% - 50px); // 50px是顶部导航栏的高度
    background-color: #181818;
    position: fixed;
    top: 50px;
    right: 0;
    z-index: 100;
    display: flex;

    .main {
        width: 100%;
        height: 100%;
        padding: 10px;
        box-sizing: border-box;
    }
}


.lico1 {
    position: absolute;
    bottom: 30px;
    z-index: 101;
    background-color: #181818;
    right: 287px;
    height: 30px;
    border-radius: 3px 0px 0px 3px;

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
