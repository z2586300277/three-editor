export default

    `import { ThreeEditor,THREE, createMesh, dat } from '/three-editor/dist/js/index.js'

// 元素
const DOM = document.getElementById('box')

// 初始化场景系列操作
const threeEditor = new ThreeEditor(DOM)

// 窗口大小变化
window.onresize = () => threeEditor.renderSceneResize()

// 模型地址
const url = 'https://z2586300277.github.io/three-editor/dist/files/resource/Soldier.glb' 

// 导入GLTF模型
const { loaderService } = threeEditor.modelCore.insertModel({ type: 'GLTF', url })

// 创建一个点光源
threeEditor.setLight('AmbientLight', { color: 0xffffff, intensity: 10 })

// 模型的着色器
loaderService.complete = model => ['流光闪电', '晶片着色', '彩虹光', '绚烂线条', '水波纹'].forEach((i, k) => {

    setTimeout(() => threeEditor.setObjectBlendShader(model, i), k * 1000)
    
})

// 取出scene
const { scene } = threeEditor

// 创建一个球体
const mesh = createMesh({ type: '球体', parameters: { radius: 0.5 }})

mesh.position.y += 4

scene.add(mesh);

// 球着色器
['水波纹', '彩虹光', '火焰燃烧', '晶片着色', '绚烂线条'].forEach((i, k) => {

    setTimeout(() => threeEditor.setObjectBlendShader(mesh, i), k * 1500)
    
})

`