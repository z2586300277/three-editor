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
                        <span ref="card"> 2D:<img class="logo" src="/site.png" alt="logo" width="25px"
                                height="25px"></span>
                        <span ref="card2"> 3D:<img class="logo" src="/site.png" alt="logo" width="25px"
                                height="25px"></span>
                    </div>
                    <template #footer>
                        <span style="display: flex;"> <el-button class="button" @click="useCss2D" text>Css2D</el-button>
                            <el-button class="button" @click="useCss3D" text>Css3D</el-button></span>
                    </template>
                </el-card>
                <br />
                <el-card class="box-card">
                    <template #header>
                        <div class="card-header">
                            <span>自定义物体动画</span>
                        </div>
                    </template>
                    <div>

                        <div v-if="a_data.transformAnimationList.length > 0">
                            <span class="text_a">物体:</span>
                            <span v-for="i, k in a_data.transformAnimationList" :key="k">
                                <el-button @click="useCustomAnimate(i)">{{ k }}</el-button>
                            </span>
                        </div>
                        <div v-else><span class="text_a">物体:</span> ——无——</div>
                        <div v-if="a_data.viewAngleList.length > 0">
                            <span class="text_a">视角:</span>
                            <span v-for="i, k in a_data.viewAngleList" :key="k">
                                <el-button @click="useControlsAnimate(i)">{{ k }}</el-button>
                            </span>
                        </div>
                        <div v-else> <span class="text_a">视角:</span> ——无——</div>
                    </div>
                    <template #footer>
                        <span style="display: flex;"> <el-button :disabled="a_data.transformAnimationList.length < 1"
                                class="button" @click="animatesPlay" text>动画连续播放</el-button></span>
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
import { ref, watch } from 'vue';
import { THREE, createGsapAnimation, setGsapMeshAction } from 'three-editor-cores'

const props = defineProps(['emitEditor']);

const card = ref(null);

const card2 = ref(null);

let a_data = ref({ transformAnimationList: [], transformAnimationMesh: null, viewAngleList: [] });

const useCss2D = () => props.emitEditor.threeEditor.setCss2dDOM(card.value, new THREE.Vector3(0, 0, 0))

const useCss3D = () => props.emitEditor.threeEditor.setCss3dDOM(card2.value, new THREE.Vector3(0, 0, 0)).scale.set(0.1, 0.1, 0.1)

const useCustomAnimate = (i) => setGsapMeshAction(a_data.value.transformAnimationMesh, i._transformInfo, i.transformInfo_, i.gsapParams)

const useControlsAnimate = i => {

    const { camera, controls } = props.emitEditor.threeEditor

    new Promise((resolve) => createGsapAnimation(camera.position, i.position, { duration: 2, onComplete: resolve }))

    new Promise((resolve) => createGsapAnimation(controls.target, i.target, { duration: 2, onComplete: resolve }))

}

const animatesPlay = () => {

    const { camera, controls } = props.emitEditor.threeEditor

    const arr1 = a_data.value.transformAnimationList

    arr1.reduce(async (prev, next) => {

        await prev

        return setGsapMeshAction(a_data.value.transformAnimationMesh, next._transformInfo, next.transformInfo_, next.gsapParams)

    }, Promise.resolve())

    const arr2 = a_data.value.viewAngleList

    arr2.reduce(async (prev, next) => {

        await prev

        return Promise.all([

            new Promise((resolve) => createGsapAnimation(camera.position, next.position, { duration: 2, onComplete: resolve })),

            new Promise((resolve) => createGsapAnimation(controls.target, next.target, { duration: 2, onComplete: resolve }))

        ])

    }, Promise.resolve())

}

watch(() => props.emitEditor.threeEditor, (val) => {

    if (val) {

        let is_a = false

        val.modelCore.progressList.forEach(i => {

            if (i.params.name === '动画测试') {

                is_a = true

                i.loaderService.complete = j => {

                    a_data.value.transformAnimationList = i.params.transformAnimationList

                    a_data.value.transformAnimationMesh = j

                    a_data.value.viewAngleList = val.controls.viewAngleList

                }

            }

        })

        if (!is_a) {

            a_data.value.transformAnimationList = []

            a_data.value.transformAnimationMesh = null

            a_data.value.viewAngleList = []

        }

    }

})


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

.text_a {
    line-height: 40px;
    font-size: 12px;
}
</style>
