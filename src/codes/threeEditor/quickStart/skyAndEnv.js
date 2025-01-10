export default

    `import { ThreeEditor,THREE, dat } from 'three-editor-cores'

// 元素
const DOM = document.getElementById('box')

// 初始化场景系列操作
const threeEditor = new ThreeEditor(DOM)

// 窗口大小变化
window.onresize = () => threeEditor.renderSceneResize()

// 取出scene
const { scene } = threeEditor

// 文件地址
const urls = [0, 1, 2, 3, 4, 5].map(k => ('/three-editor/dist/files/scene/skyBox0/' + (k + 1) + '.png'));

// 设置天空
scene.setSceneBackground(urls)

// 开启环境贴图
scene.environmentEnabled = true

// 设置环境贴图
scene.setEnvBackground(urls)

// 创建测试物体
const mesh = new THREE.Mesh(new THREE.BoxGeometry(10, 10, 10), new THREE.MeshStandardMaterial({ roughness: 0, metalness: 1 }))

// 添加到场景
scene.add(mesh)
`