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

const { camera } = threeEditor

camera.position.set(0, 400, 400) // 设置相机位置

const { loaderService } = threeEditor.modelCore.insertModel({

    type: 'FBX', // 模型类型

    url: 'https://z2586300277.github.io/three-editor/dist/files/resource/aroundBuilding.FBX' // 模型地址

})

loaderService.complete = group => group.scale.set(0.01, 0.01, 0.01) // 模型加载完成

threeEditor.setLight('AmbientLight', { color: 0xffffff, intensity: 6 }) // 环境光

window.onresize = () => threeEditor.renderSceneResize() // 窗口大小变化
`