<template>
    <div class="threeBox" ref="threeBox" @dblclick="e => getEvent(e)"></div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, shallowReactive } from 'vue';
import { ThreeEditor, getDistanceScalePoint, createGsapAnimation } from 'three-editor-cores';

ThreeEditor.dracoPath = '/three-editor/dist/draco/'

const threeBox = ref(null)

const props = defineProps(['emitEditor', 'options'])

let transformControlsChangeHandler = null

let keyDownHandler = null

onMounted(() => (props.emitEditor.sceneName !== '') && createScene())

function updateInfoPanel(info) {
    if (!info) {
        props.emitEditor.info = null
        return
    }
    const newInfo = {
        currentModel: info.currentModel,
        currentRootModel: info.currentRootModel,
        point: info.point ? { x: info.point.x, y: info.point.y, z: info.point.z } : null,
        mode: info.mode
    }
    props.emitEditor.info = shallowReactive(newInfo)
}

function getEvent(e) {

    props.emitEditor.threeEditor.getSceneEvent(e, info => {

        updateInfoPanel(info)

        if (info.mode === '点击信息') {

            const { camera, controls } = props.emitEditor.threeEditor

            const p = getDistanceScalePoint(camera.position, info.point, 0.6)

            createGsapAnimation(camera.position, p)

            createGsapAnimation(controls.target, info.point)

        }

    })

}

function setupTransformControlsListener(threeEditor) {
    const { transformControls, handler } = threeEditor
    
    if (transformControlsChangeHandler) {
        transformControls.removeEventListener('objectChange', transformControlsChangeHandler)
    }
    
    transformControlsChangeHandler = () => {
        if (props.emitEditor.info && props.emitEditor.info.currentModel) {
            const currentModel = props.emitEditor.info.currentModel
            if (currentModel.parent === null) {
                updateInfoPanel(null)
                return
            }
            const point = currentModel.position
            updateInfoPanel({
                currentModel: currentModel,
                currentRootModel: props.emitEditor.info.currentRootModel,
                point: point,
                mode: props.emitEditor.info.mode
            })
        }
    }
    
    transformControls.addEventListener('objectChange', transformControlsChangeHandler)
}

function setupDeleteListener(threeEditor) {
    if (keyDownHandler) {
        document.removeEventListener('keydown', keyDownHandler)
    }
    
    keyDownHandler = (e) => {
        if (e.key === 'Delete' || e.key === 'Backspace') {
            if (props.emitEditor.info && props.emitEditor.info.currentModel) {
                const currentModel = props.emitEditor.info.currentModel
                if (currentModel.parent === null) {
                    updateInfoPanel(null)
                }
            }
        }
    }
    
    document.addEventListener('keydown', keyDownHandler)
}

function createScene(sceneParams) {

    if (!sceneParams) {

        const params = localStorage.getItem(props.emitEditor.sceneName + '-threeEditor')

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

        })

    }

    const threeEditor = new ThreeEditor(threeBox.value,

        {

            pixelRatio: window.devicePixelRatio * 1.5,

            webglRenderParams: { antialias: true, alpha: true, logarithmicDepthBuffer: true },

            sceneParams

        }

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
    
    setupTransformControlsListener(threeEditor)
    
    setupDeleteListener(threeEditor)

    window.onresize = () => threeEditor.renderSceneResize()

}

onUnmounted(() => {
    if (transformControlsChangeHandler && props.emitEditor.threeEditor?.transformControls) {
        props.emitEditor.threeEditor.transformControls.removeEventListener('objectChange', transformControlsChangeHandler)
    }
    if (keyDownHandler) {
        document.removeEventListener('keydown', keyDownHandler)
    }
    props.emitEditor.threeEditor?.destroySceneRender()
})

props.emitEditor.createScene = createScene

</script>

<style lang="less" scoped>
.threeBox {
    height: 100%;
    width: 100%;
}
</style>
