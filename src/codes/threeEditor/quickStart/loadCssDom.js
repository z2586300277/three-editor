export default

    `import { ThreeEditor,THREE, dat } from '/three-editor/dist/js/index.js'

// 元素
const DOM = document.getElementById('box')

// 初始化场景系列操作
const threeEditor = new ThreeEditor(DOM)

// 窗口大小变化
window.onresize = () => threeEditor.renderSceneResize()

for (let i = 0; i < 5; i++) {

    threeEditor.setCss2dDOM(createDom('2D' + i), { x: 0, y: 0, z: i * 2 }) // 2d dom

    threeEditor.setCss3dDOM(createDom('3D' + i), { x: 0, y: i * 2, z: 0 }).scale.multiplyScalar(0.02) // 3d dom

}

// 创建dom
function createDom(text) {

    const div = document.createElement('div')
    
    const img = document.createElement('img')

    img.src = '/three-editor/dist/site.png'

    img.style.width = '50px'

    img.style.height = '50px'

    div.appendChild(img)

    div.innerHTML += text

    div.style.color = 'white'

    return div

}
`