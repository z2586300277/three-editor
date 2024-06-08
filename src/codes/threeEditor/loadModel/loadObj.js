export default

    `import { ThreeEditor } from '/three-editor/dist/js/index.js'

const threeEditor = new ThreeEditor( 
    
    document.getElementById('box'), // 容器

    {

        fps: null, // fps

        pixelRatio: window.devicePixelRatio * 1, // 像素比

        webglRenderParams: { antialias: true, alpha: true, logarithmicDepthBuffer: true }, // webgl 渲染参数

    }

)

threeEditor.modelCore.insertModel({

    type: 'OBJ', // 模型类型

    url: 'https://z2586300277.github.io/three-editor/dist/files/other/obj/house.obj' // 模型地址

})

threeEditor.setLight() // 快速创建一个基础环境光

window.onresize = () => threeEditor.renderSceneResize() // 窗口大小变化
`