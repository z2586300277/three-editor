export default 

`import { ThreeEditor } from '/three-editor/dist/js/index.js'

const sceneParams = await fetch('https://z2586300277.github.io/three-editor/dist/files/editorJson/地图.json').then(res => res.json())

ThreeEditor.dracoPath = '/three-editor/dist/draco/' // draco 路径地址

const threeEditor = new ThreeEditor( 
    
    document.getElementById('box'), // 容器

    {

        fps: null, // fps

        pixelRatio: window.devicePixelRatio * 1, // 像素比

        webglRenderParams: { antialias: true, alpha: true, logarithmicDepthBuffer: true }, // webgl 渲染参数

    },

    sceneParams

)

window.onresize = () => threeEditor.renderSceneResize() // 窗口大小变化
`