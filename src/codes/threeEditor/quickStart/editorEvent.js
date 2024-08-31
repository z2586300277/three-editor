export default

    `import { ThreeEditor, dat } from 'three-editor-cores'

// draco 路径地址
ThreeEditor.dracoPath = '/three-editor/dist/draco/' 

// 元素
const DOM = document.getElementById('box')

// 初始化场景系列操作
const threeEditor = new ThreeEditor(DOM)

// 窗口大小变化
window.onresize = () => threeEditor.renderSceneResize() 

// 模型地址
const url = 'https://z2586300277.github.io/three-editor/dist/files/resource/car.glb' 

// 导入GLTF模型
threeEditor.modelCore.insertModel({ type: 'GLTF', url })

// 快速创建一个基础环境光
threeEditor.setLight() 

// 添加点光源
threeEditor.setLight('PointLight', { color: 0xffffff, intensity: 2 }).position.set(0, 100, 10)

// 事件
DOM.addEventListener('click', e => threeEditor.getSceneEvent(e, info => console.log(info)))

// 控制面板
const GUI = new dat.GUI()

GUI.add({ '打开内置所有功能': () => threeEditor.openControlPanel() }, '打开内置所有功能')

GUI.add(threeEditor.handler, 'mode', ['选择', '根选择', '变换', '场景绘制', '点击信息']).name('模式')

GUI.add({ '网格': true }, '网格').onChange(value => threeEditor.handler.setHandlerOption('grid', value))

GUI.add({ '辅助线': true }, '辅助线').onChange(value => threeEditor.handler.setHandlerOption('axes', value))

GUI.add({ '帧率': false }, '帧率').onChange(value => threeEditor.handler.setHandlerOption('stats', value))

`