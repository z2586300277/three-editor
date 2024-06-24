export default

    `import { ThreeEditor, THREE } from '/three-editor/dist/js/index.js'

// draco 路径地址
ThreeEditor.dracoPath = '/three-editor/dist/draco/' 

// 初始化场景系列操作
const threeEditor = new ThreeEditor(document.getElementById('box'))

// 模型地址
const url = 'https://z2586300277.github.io/three-editor/dist/files/resource/car.glb' 

// 导入GLTF模型
threeEditor.modelCore.insertModel({ type: 'GLTF', url }).loaderService.complete = mesh => animate(mesh)

// 快速创建一个基础环境光
threeEditor.setLight('AmbientLight', { color: 0xffffff, intensity: 3 })

// 窗口大小变化
window.onresize = () => threeEditor.renderSceneResize() 

// 获取场景和相机
const { scene, camera } = threeEditor

// 设置相机位置
camera.position.set(30, 30, 30)

// 创建一个曲线
const curve = new THREE.CatmullRomCurve3([

    new THREE.Vector3(0, 0, 0),

    new THREE.Vector3(20, 15, 0),

    new THREE.Vector3(15, 0, 20),

    new THREE.Vector3(5, 15, -5),

    new THREE.Vector3(10, 0, -10)

])

// 创建曲线几何
const geometry = new THREE.BufferGeometry().setFromPoints(curve.getPoints(500))

// 创建曲线材质
const material = new THREE.LineBasicMaterial({ color: 0xffffff })

// 创建曲线
const curveMesh = new THREE.Line(geometry, material)

// 添加曲线到场景
scene.add(curveMesh)

// 定义时间
let t = 0

// 动画函数
function animate(mesh) {

    t += 0.0002

    const point = curve.getPointAt(t % 1) // 获取当前点

    mesh.position.set(point.x, point.y, point.z) // 设置位置

    mesh.lookAt(curve.getPointAt((t + 0.01) % 1)) // 朝向下一个点

    requestAnimationFrame(() => animate(mesh)) // 递归调用

}

`