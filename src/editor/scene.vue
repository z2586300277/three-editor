<template>
    <div class="threeBox" ref="threeBox" @dblclick="e => getEvent(e)"></div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { ThreeEditor, getDistanceScalePoint, createGsapAnimation } from 'three-editor-cores';

ThreeEditor.dracoPath = '/three-editor/dist/draco/'

const threeBox = ref(null)

const props = defineProps(['emitEditor', 'options'])

onMounted(() => (props.emitEditor.sceneName !== '') && createScene())

/**
 * 清理与指定对象相关的交互反馈
 * 当对象被隐藏或移除时调用，确保 transformControls 和 outlinePass 不保留无效引用
 */
function clearInteractionForObject(threeEditor, targetObject) {
    if (!threeEditor || !targetObject) return

    const { handler, transformControls, effectComposer } = threeEditor
    if (!handler) return

    const { currentInfo } = handler
    if (!currentInfo) return

    const { currentModel, currentRootModel } = currentInfo

    // 检查目标对象是否是当前选中的对象或其祖先
    const isTargetCurrent = targetObject === currentModel || targetObject === currentRootModel
    const isAncestorOfCurrent = currentModel && isAncestor(targetObject, currentModel)

    if (isTargetCurrent || isAncestorOfCurrent) {
        // 清理 transformControls
        if (transformControls?.object) {
            transformControls.detach()
        }

        // 清理 outlinePass
        if (effectComposer?.effectPass?.outlinePass) {
            effectComposer.effectPass.outlinePass.selectedObjects = []
        }

        // 清理 handler 中的 currentInfo
        handler.currentInfo = null
        threeEditor.currentInfo = null
    }
}

/**
 * 检查 ancestor 是否是 object 的祖先节点
 */
function isAncestor(ancestor, object) {
    let parent = object.parent
    while (parent) {
        if (parent === ancestor) return true
        parent = parent.parent
    }
    return false
}

/**
 * 验证当前交互状态的有效性
 * 如果当前选中的对象已隐藏或已从场景中移除，清理相关交互反馈
 */
function validateInteractionState(threeEditor) {
    if (!threeEditor) return false

    const { handler, transformControls, effectComposer } = threeEditor
    if (!handler) return false

    const { currentInfo } = handler

    // 如果没有当前选中信息，无需处理
    if (!currentInfo) return true

    const { currentModel, currentRootModel } = currentInfo

    // 检查对象是否仍然有效（可见且在场景中）
    const isObjectValid = (obj) => {
        if (!obj) return false
        if (!obj.visible) return false

        // 检查对象是否还在场景中
        let parent = obj.parent
        while (parent) {
            if (parent === threeEditor.scene) return true
            parent = parent.parent
        }
        return false
    }

    const isCurrentModelValid = isObjectValid(currentModel)
    const isCurrentRootModelValid = isObjectValid(currentRootModel)

    // 如果当前选中的对象已无效，清理交互状态
    if (!isCurrentModelValid && !isCurrentRootModelValid) {
        if (transformControls?.object) {
            transformControls.detach()
        }
        if (effectComposer?.effectPass?.outlinePass) {
            effectComposer.effectPass.outlinePass.selectedObjects = []
        }
        handler.currentInfo = null
        threeEditor.currentInfo = null
        return false
    }

    return true
}

function getEvent(e) {
    const threeEditor = props.emitEditor.threeEditor
    if (!threeEditor) return

    // 在获取场景事件前，先验证并清理无效的交互状态
    // 这处理了以下情况：
    // 1. 节点被隐藏后，transformControls 仍附着在该节点上
    // 2. 节点被移除后，outlinePass 仍包含该节点
    validateInteractionState(threeEditor)

    threeEditor.getSceneEvent(e, info => {
        props.emitEditor.info = info

        if (info.mode === '点击信息') {
            const { camera, controls } = threeEditor
            const p = getDistanceScalePoint(camera.position, info.point, 0.6)
            createGsapAnimation(camera.position, p)
            createGsapAnimation(controls.target, info.point)
        }
    })
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
