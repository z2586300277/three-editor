export default

    `import { ThreeEditor } from '/three-editor/dist/js/index.js'

// draco 路径地址
ThreeEditor.dracoPath = '/three-editor/dist/draco/' 

// 初始化场景系列操作
const threeEditor = new ThreeEditor(document.getElementById('box'))

// 模型地址
const url = 'https://z2586300277.github.io/three-editor/dist/files/resource/car.glb' 

// 导入GLTF模型
threeEditor.modelCore.insertModel({ type: 'GLTF', url })

// 快速创建一个基础环境光
threeEditor.setLight() 

// 窗口大小变化
window.onresize = () => threeEditor.renderSceneResize() 
`