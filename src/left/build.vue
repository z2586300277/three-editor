<template>
    <div class="build">
        <div class="back" v-for="i in data.list">
            <div class="item">
                <el-link @click="load(i.name)">
                    {{ i.name }}
                </el-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Config, fetchResource } from '../config'
import { shallowReactive } from 'vue';
import { getObjectViews, createGsapAnimation } from 'three-editor-cores'
import { ElMessage } from 'element-plus'

const props = defineProps(['emitEditor'])

function load(url) {

    url = Config.buildUrl + url

    const type = url.split('.').pop().toUpperCase()

    if (!type) return

    if (!['FBX', 'GLB', 'GLTF', 'OBJ'].includes(type)) return

    const { loaderService } = props.emitEditor.threeEditor.modelCore.insertModel({ url, type: type === 'GLB' ? 'GLTF' : type })

    props.emitEditor.loading = true

    setTimeout(() => {

        if (props.emitEditor.loading) {

            props.emitEditor.loading = false

            ElMessage.error('网络较差,加载比较缓慢')

        }

    }, 8000)

    loaderService.complete = m => {

        props.emitEditor.loading = false

        const { transformControls, camera, controls } = props.emitEditor.threeEditor

        const { maxView, target } = getObjectViews(m)

        Promise.all([createGsapAnimation(camera.position, maxView), createGsapAnimation(controls.target, target)]).then(() => {

            props.emitEditor.threeEditor.setOutlinePass([m])

            controls.target.copy(target)

            transformControls.attach(m)

        })

    }


}

const data = shallowReactive({ list: [] })

fetchResource(Config.buildUrl).then(res => data.list = res?.map(i => ({ name: i, url: Config.buildUrl + i })))

</script>

<style lang="less" scoped>
.build {
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
