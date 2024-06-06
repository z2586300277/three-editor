export const defaultCode =
`import { ThreeEditor } from '/three-editor/dist/js/index.js'

ThreeEditor.dracoPath = '/three-editor/dist/draco/' // draco 路径地址

const threeEditor = new ThreeEditor( 
    
    document.getElementById('box'), // 容器

    {

        fps: null, // fps

        pixelRatio: window.devicePixelRatio * 1, // 像素比

        webglRenderParams: { antialias: true, alpha: true, logarithmicDepthBuffer: true }, // webgl 渲染参数

    }

)

window.onresize = () => threeEditor.renderSceneResize() // 窗口大小变化
`