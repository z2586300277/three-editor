export default

    `import { ThreeEditor } from '/three-editor/dist/js/index.js'

// 初始化场景系列操作
const threeEditor = new ThreeEditor(document.getElementById('box'))

// 相机
const { camera } = threeEditor

// 设置相机位置
camera.position.set(0, 400, 400) 

// 模型地址
const url = 'https://z2586300277.github.io/three-editor/dist/files/resource/aroundBuilding.FBX'

// 导入FBX模型
const { loaderService } = threeEditor.modelCore.insertModel({ type: 'FBX', url })

// 模型加载完成
loaderService.complete = group => group.scale.set(0.01, 0.01, 0.01) 

// 环境光
threeEditor.setLight('AmbientLight', { color: 0xffffff, intensity: 6 })

// 窗口大小变化
window.onresize = () => threeEditor.renderSceneResize() 
`