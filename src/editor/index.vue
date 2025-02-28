<template>
    <div class="layout" v-loading="emitEditor.loading">
        <div class="header" v-show="!previewScene">
            <div class="header-box">
                <div class="header-left">
                    <el-select v-model="emitEditor.sceneName" class="m-2" placeholder="场景" size="large"
                        style="width: 200px">
                        <el-option v-for="item in options" :key="item.name" :label="item.name" :value="item.name"
                            style="color:rgb(255, 255, 255)">
                            <div style="width: 100%;display: flex;justify-content: space-between;">
                                <span>{{ item.name }} </span>
                                <span>
                                    <el-popconfirm title="确定删除？" @confirm="() => delScene(item)">
                                        <template #reference>
                                            <el-icon style="color: aliceblue;">
                                                <Close />
                                            </el-icon>
                                        </template>
                                    </el-popconfirm>
                                </span>
                            </div>
                        </el-option>
                    </el-select>
                    <el-button class="btn-add" link icon="plus" @click="dialogVisible = true">新建场景</el-button>
                    <el-upload class="upload" ref="myUpload" :auto-upload="false" action="" :on-change="uploadChange">
                        <el-button class="btn-add" link icon="plus">模型导入此场景</el-button></el-upload>
                    <el-dialog v-model="dialogVisible" title="命名场景" width="500">
                        <el-input v-model="inputSceneName" placeholder="请输入场景名称" />
                        <template #footer>
                            <div class="dialog-footer">
                                <el-button @click="dialogVisible = false">取消</el-button>
                                <el-button @click="createEditor">
                                    确认
                                </el-button>
                            </div>
                        </template>
                    </el-dialog>
                </div>
                <div class="title">
                    <el-link style="font-size: 17px;" @click="openUrl('home')">🏠主页</el-link>&nbsp;&nbsp;
                    <el-link style="font-size: 17px;" @click="openUrl('doc')">📘文档</el-link>&nbsp;&nbsp; - &nbsp;
                    <img class="logo" src="/site.png" alt="logo" width="18px" height="18px">
                    &nbsp;{{ emitEditor.sceneName || ' - - - - ' }}
                    -&nbsp;&nbsp;<el-link @click="openUrl('example')" style="font-size: 17px;">🍀案例</el-link>
                    &nbsp;&nbsp;<el-link @click="openUrl('github')" style="font-size: 17px;">🍁仓库</el-link>
                </div>
                <div class="header-right">
                    <el-button class="btn-add" link icon="Document" @click="exportTemplateJson">模板</el-button>
                    <el-button class="btn-add" link>|</el-button>
                    <el-button class="btn-add" link @click="exportFile" icon="Files">导出</el-button>
                    <el-button @click="pict" icon="camera"></el-button>
                    <el-button @click="() => emitEditor.threeEditor?.openControlPanel()">控制板</el-button>
                    <el-button @click="saveSceneList">保存</el-button>
                </div>
            </div>
        </div>
        <div v-show="!previewScene">
            <leftPanel :emitEditor="emitEditor" />
            <rightPanel :emitEditor="emitEditor" />
        </div>
        <div class="topl" v-show="!previewScene">
            <div
                style="pointer-events: auto;background-color: #181818;display: flex;align-items: center;border-radius: 3px;">
                <el-radio-group v-model="emitEditor.mode" size="small" fill="#181818" text-color="#a8d4fd">
                    <el-radio-button label="选中" value="选中" />
                    <el-radio-button label="根级" value="根级" />
                    <el-radio-button label="平移" value="平移" />
                    <el-radio-button label="旋转" value="旋转" />
                    <el-radio-button label="缩放" value="缩放" />
                    <el-radio-button label="绘制" value="绘制" />
                    <el-radio-button label="预览" value="预览" />
                </el-radio-group>
            </div>
        </div>
        <div class="bot">
            <div class="opt">
                <div>
                    <div>
                        <el-switch inactive-text="预览场景" v-model="previewScene" active-color="#a8d4fd" />
                    </div>
                    <div :style="{ opacity: previewScene ? 0 : 1 }">
                        <el-switch inactive-text="选中弹窗" v-model="emitEditor.selectPanelEnable" active-color="#a8d4fd"
                            @change="a => emitEditor.threeEditor.handler.selectPanelEnable = a" />
                    </div>
                    <div :style="{ opacity: previewScene ? 0 : 1 }"><el-switch inactive-text="按键操作" v-model="emitEditor.openKey" active-color="#a8d4fd"
                            @change="a => emitEditor.threeEditor.handler.setHandlerOption('openKey', a)" /></div>
                </div>
                <pre :style="{ opacity: previewScene ? 0 : 1 }">
            1:选择 2:根选择 3:变换 4:绘制 5:信息
            变换 [r:旋转 g:平移 t:缩放] [ q w e a s d] 方位微调
            tab : 切换模式 z:撤销 y: 反撤销 del: 删除 esc: 退出操作
        </pre>
            </div>
        </div>
        <div class="main">
            <Editor :emitEditor="emitEditor" :options="options" />
        </div>
    </div>
</template>

<script setup>
import { ref, shallowReactive, watch } from 'vue'
import { ElMessage } from 'element-plus'
import leftPanel from './leftPanel.vue'
import rightPanel from './rightPanel.vue'
import JSZip from 'jszip'
import { setIndexDB } from './indexDb'
import { createGsapAnimation, getObjectViews } from 'three-editor-cores'
import { defineAsyncComponent } from 'vue'
import sceneVue from './scene.vue'

const previewScene = ref(false)

const openUrl = (k) => window.open(__SITE_URLS__[k])

const Editor = defineAsyncComponent(() => {

    return setIndexDB().then(async res => {

        const { data } = await res.getAllRequest()

        emitEditor.IndexDBList = data

        emitEditor.IndexDB = res

        return sceneVue

    }).catch(() => sceneVue)

})

let emitEditor = shallowReactive({
    info: null,
    mode: '选择',
    loading: false,
    threeEditor: null,
    selectPanelEnable: false,
    openKey: false,
    IndexDB: null,
    IndexDBList: [],
    sceneName: localStorage.getItem('sceneName') || ''
});

const options = ref(JSON.parse(localStorage.getItem('sceneList')) || [{ name: '测试场景' }])

const dialogVisible = ref(false);

const inputSceneName = ref('');

const myUpload = ref(null);

// 检测option 中是否含有当前场景名称
if (!options.value.find(item => item.name === emitEditor.sceneName)) {

    if (options.value.length > 0) emitEditor.sceneName = options.value[0].name

    else emitEditor.sceneName = ''

}

const uploadChange = file => {

    if (!emitEditor.threeEditor) return ElMessage.error('请先创建场景')

    const [_, end] = file.name.split('.')

    myUpload.value.clearFiles()

    if (!['fbx', 'glb', 'FBX', 'GLB'].includes(end)) return ElMessage.error('请上传fbx或glb格式的模型')

    const url = URL.createObjectURL(file.raw)

    emitEditor.IndexDB.getRequest(file.name, url).then(res => {

        const rootInfo = { url: res.url, type: end.toLocaleUpperCase() === 'GLB' ? 'GLTF' : end.toLocaleUpperCase(), indexDBNameUrl: 'IndexDB:' + file.name }

        const { loaderService } = emitEditor.threeEditor.modelCore.insertModel(rootInfo)

        loaderService.complete = m => {

            const { transformControls, camera, controls } = emitEditor.threeEditor

            const { maxView, target } = getObjectViews(m)

            Promise.all([createGsapAnimation(camera.position, maxView), createGsapAnimation(controls.target, target)]).then(() => {

                emitEditor.threeEditor.setOutlinePass([m])

                controls.target.copy(target)

                transformControls.attach(m)

            })

        }

    })

}

function delScene(item) {

    const index = options.value.findIndex(i => i.name === item.name)

    if (index > -1) {

        options.value.splice(index, 1)

        localStorage.removeItem(item.name)

        saveLocal()

    }

}

watch(() => emitEditor.sceneName, (v, o) => {

    if (v) setTimeout(() => emitEditor.createScene(), 100)

    emitEditor?.threeEditor?.destroySceneRender?.()

})

watch(() => emitEditor.mode, (v, o) => {

    if (v == '选中') emitEditor.threeEditor.handler.mode = '选择'

    else if (v == '根级') emitEditor.threeEditor.handler.mode = '根选择'

    else if (v == '平移') {

        emitEditor.threeEditor.handler.mode = '变换'

        emitEditor.threeEditor.transformControls.setMode('translate')

    }

    else if (v == '旋转') {

        emitEditor.threeEditor.handler.mode = '变换'

        emitEditor.threeEditor.transformControls.setMode('rotate')

    }

    else if (v == '缩放') {

        emitEditor.threeEditor.handler.mode = '变换'

        emitEditor.threeEditor.transformControls.setMode('scale')

    }

    else if (v == '绘制') emitEditor.threeEditor.handler.mode = '场景绘制'

    else if (v == '预览') emitEditor.threeEditor.handler.mode = '点击信息'

})

function pict() {

    const base64 = emitEditor.threeEditor.getSceneEditorImage(['image/png', '0.8'])

    const link = document.createElement('a');

    link.href = base64;

    link.download = 'myImage.png';

    link.click();

}

function createEditor() {

    if (options.value.some(item => item.name === inputSceneName.value)) return ElMessage.error('场景名称已存在')

    options.value.push({ name: inputSceneName.value })

    emitEditor.sceneName = inputSceneName.value

    ElMessage.success(emitEditor.sceneName + '添加成功')

    saveLocal()

    dialogVisible.value = false

}

function saveLocal() {

    localStorage.setItem('sceneList', JSON.stringify(options.value))

    localStorage.setItem('sceneName', emitEditor.sceneName)

}

function saveSceneList() {

    if (options.value.find(item => item.name === emitEditor.sceneName)) {

        localStorage.setItem(emitEditor.sceneName, JSON.stringify(emitEditor.threeEditor.saveSceneEdit()))

    }

    else emitEditor.sceneName = ''

    ElMessage.success('保存成功')

    saveLocal()

}

function exportTemplateJson() {

    if (!emitEditor.threeEditor) return ElMessage.error('没有可导出的场景')

    const blob = new Blob([JSON.stringify(emitEditor.threeEditor.saveSceneEdit())], { type: 'application/json' })

    const link = document.createElement('a')

    link.href = URL.createObjectURL(blob)

    link.download = emitEditor.sceneName || Date.now() + '.json'

    link.click()

}

async function exportFile() {

    if (!emitEditor.threeEditor) return ElMessage.error('没有可导出的场景')

    let json = JSON.stringify(emitEditor.threeEditor.saveSceneEdit())

    const pattern = /http[s]?:\/\/(?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*\\(\\),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+/g; // 匹配url

    const urls = json.match(pattern) // 匹配结果

    const uniqueUrls = [...new Set(urls)] // 去重

    const blobs = await Promise.all(uniqueUrls.map(url => fetch(url).then(response => response.blob()))) // 获取资源

    const zip = new JSZip()

    // 资源file
    uniqueUrls.forEach((url, k) => {

        const name = k + '_' + url.substring(url.lastIndexOf('/') + 1)

        json = json.replace(new RegExp(url, 'g'), name)

        zip.file(name, blobs[k])

    })

    // 添加场景json file
    zip.file(uniqueUrls.length + '_scene.json', json)

    // 生成zip文件
    const content = await zip.generateAsync({ type: 'blob' })

    // 下载
    const downloadUrl = URL.createObjectURL(content)

    const a = document.createElement('a')

    a.href = downloadUrl

    a.download = emitEditor.sceneName || Date.now()

    document.body.appendChild(a)

    a.click()

    window.URL.revokeObjectURL(downloadUrl)

    document.body.removeChild(a)

}

</script>

<style lang="less" scoped>
.layout {
    background-color: #1f1f1f;
    height: 100vh;
    width: 100vw;
    color: #E5EAF3;

    .header {
        background-color: #181818;
        position: fixed;
        width: 100vw;
        height: 50px;
        padding: 2px;
        box-sizing: border-box;

        &-left {
            height: 100%;
            display: flex;
            align-items: center;
        }

        &-box {
            height: 100%;
            width: 100%;
            padding-left: 10px;
            padding-right: 10px;
            box-sizing: border-box;
            border-bottom: 1px solid #606267;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            align-items: center;
        }

        .title {
            color: #E5EAF3;
            font-size: 18px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        &-right {
            display: flex;
            justify-content: flex-end;

        }
    }

    .main {
        height: 100%;
        width: 100%;
    }
}

.bot {
    bottom: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    position: fixed;
    display: flex;
    pointer-events: none;

    .opt {
        display: flex;
        align-items: center;
        pointer-events: auto;
    }
}

.topl {
    width: 100%;
    position: fixed;
    top: 50px;
    pointer-events: none;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.btn-add {
    margin-left: 20px;
    color: #E5EAF3;
    border: none;
    background: none;
}

.upload {
    height: 100%;
    display: flex;
    align-items: center;
}

pre {

    line-height: 20px;
    padding-top: 10px;
}
</style>