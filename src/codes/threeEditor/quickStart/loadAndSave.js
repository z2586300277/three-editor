export default

    `import { ThreeEditor, dat } from '/three-editor/dist/js/index.js'

// draco 路径地址
ThreeEditor.dracoPath = '/three-editor/dist/draco/' 

// 参数还原
const sceneParams = JSON.parse(localStorage.getItem('threeEditor_sceneParams'))

// 元素
const DOM = document.getElementById('box')

// 初始化场景系列操作
const threeEditor = new ThreeEditor(DOM, { sceneParams })

// 窗口大小变化
window.onresize = () => threeEditor.renderSceneResize() 

// 事件
DOM.addEventListener('dblclick', e => threeEditor.getSceneEvent(e))

const GUI = new dat.GUI()

GUI.add({ '打开内置所有功能': () => threeEditor.openControlPanel() }, '打开内置所有功能')

// 保存场景参数
GUI.add({ '@保存场景参数': () => localStorage.setItem('threeEditor_sceneParams', JSON.stringify(threeEditor.saveSceneEdit())) }, '@保存场景参数')

`