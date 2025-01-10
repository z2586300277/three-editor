export default

    `import { ThreeEditor, dat } from 'three-editor-cores'

// draco 路径地址
ThreeEditor.dracoPath = '/three-editor/dist/draco/' 

// 场景列表
const sceneList = ['智慧城市扫光', '天空和环境', '地图', '自定义3d组件镜子']

// 获取场景参数
const getParams = value => fetch('/three-editor/dist/files/editorJson/' + value + '.json').then(res => res.json())

// 获取第一场景
const sceneParams = await getParams(sceneList[0])

// 初始化场景系列操作
const threeEditor = new ThreeEditor(document.getElementById('box'), { sceneParams })

// GUI 
const GUI = new dat.GUI()

// 切换场景
GUI.add({ scene: '智慧城市扫光' }, 'scene', sceneList).onChange((value) => {

    getParams(value).then(json => {

        threeEditor.resetEditorStorage(json) // 重置编辑器存储

    })

})

// 窗口大小变化
window.onresize = () => threeEditor.renderSceneResize() 
`