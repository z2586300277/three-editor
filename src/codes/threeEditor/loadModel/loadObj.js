export default

    `import { ThreeEditor } from '/three-editor/dist/js/index.js'

// 初始化场景系列操作
const threeEditor = new ThreeEditor(document.getElementById('box'))

// 模型地址
const url = 'https://z2586300277.github.io/three-editor/dist/files/other/obj/house.obj' 

// 插入模型
threeEditor.modelCore.insertModel({ type: 'OBJ', url })

// 快速创建一个基础环境光
threeEditor.setLight() 

// 窗口大小变化
window.onresize = () => threeEditor.renderSceneResize() 
`