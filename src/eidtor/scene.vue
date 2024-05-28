<template>
    <div class="threeBox" ref="threeBox" @dblclick="e => getEvent(e)"></div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { ThreeEditor, getDistanceScalePoint, createGsapAnimation } from 'three-editor-cores';

ThreeEditor.dracoPath = '/three-editor/dist/draco/';

const threeBox = ref(null)

const props = defineProps(['emitEditor', 'options'])

onMounted(() => (props.emitEditor.sceneName !== '') && createScene())

function getEvent(e) {

    props.emitEditor.threeEditor.getSceneEvent(e, info => {

        props.emitEditor.info = info

        if (info.mode === '点击信息') {

            const { camera, controls } = props.emitEditor.threeEditor

            const p = getDistanceScalePoint(camera.position, info.point, 0.9)

            createGsapAnimation(camera.position, p)

            createGsapAnimation(controls.target, info.point)

        }

    })

}

function createScene(sceneParams) {

    if (!sceneParams) {

        const params = localStorage.getItem(props.emitEditor.sceneName)

        if (params) sceneParams = JSON.parse(params)


        function getIndexDBUrl(i, name) {

            const { IndexDBList } = props.emitEditor

            const item = IndexDBList.find(i => i.name === name)

            if (item) i.rootInfo.url = URL.createObjectURL(item.blob)

            else sceneParams.modelList.splice(sceneParams.modelList.indexOf(i), 1)

        }

        sceneParams?.modelList?.forEach(i => {

            if (i.rootInfo.indexDBNameUrl) {

                const [_, name] = i.rootInfo.indexDBNameUrl.split(':')

                getIndexDBUrl(i, name)

            }

            else if (i.rootInfo.url.indexOf('IndexDB:') === 0) {

                const [_, name] = i.rootInfo.url.split(':')

                i.rootInfo.indexDBNameUrl = i.rootInfo.url

                getIndexDBUrl(i, name)

            }

        })


    }

    const threeEditor = new ThreeEditor(threeBox.value,

        {

            fps: null,

            pixelRatio: window.devicePixelRatio * 1,

            webglRenderParams: { antialias: true, alpha: true, logarithmicDepthBuffer: true },

        },

        sceneParams

    )

    const ishaveLight = threeEditor.scene.children.every(i => !i.isLight)

    ishaveLight && threeEditor.setLight()

    const { mode } = threeEditor.handler

    const { transformControls } = threeEditor

    if (mode == '选择') props.emitEditor.mode = '选中'

    else if (mode == '根选择') props.emitEditor.mode = '根级'

    else if (mode == '变换') {

        if (transformControls.mode == 'translate') props.emitEditor.mode = '平移'

        else if (transformControls.mode == 'rotate') props.emitEditor.mode = '旋转'

        else if (transformControls.mode == 'scale') props.emitEditor.mode = '缩放'

    }

    else if (mode == '场景绘制') props.emitEditor.mode = '绘制'

    else if (mode == '点击信息') props.emitEditor.mode = '预览'

    props.emitEditor.openKey = threeEditor.handler.openKey

    props.emitEditor.selectPanelEnable = threeEditor.handler.selectPanelEnable

    props.emitEditor.threeEditor = threeEditor


    window.onresize = () => threeEditor.renderSceneResize()
}

onUnmounted(() => props.emitEditor.threeEditor?.destroySceneRender())

props.emitEditor.createScene = createScene

</script>

<style lang="less" scoped>
.threeBox {
    height: 100%;
    width: 100%;
}
</style>
