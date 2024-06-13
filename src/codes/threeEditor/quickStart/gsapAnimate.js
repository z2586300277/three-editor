export default

    `import { ThreeEditor, createGsapAnimation, dat } from '/three-editor/dist/js/index.js'

// draco 路径地址
ThreeEditor.dracoPath = '/three-editor/dist/draco/' 

// 参数地址
const url = 'https://z2586300277.github.io/three-editor/dist/files/editorJson/辅助工具配置.json'

// 获取参数
const sceneParams = await fetch(url).then(res => res.json())

// 初始化场景系列操作
const threeEditor = new ThreeEditor(document.getElementById('box'), { sceneParams })

// 窗口大小变化
window.onresize = () => threeEditor.renderSceneResize() 

// 获取相机 和 控制器
const { camera, controls } = threeEditor

// 创建一个相机动画
createGsapAnimation(camera.position, { x: 10, y: 10, z: 10 })

// 创建一个目标运动动画
createGsapAnimation(controls.target, { x: 5, y: 5, z: 5 })

`