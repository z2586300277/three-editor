const A=`import { ThreeEditor } from '/three-editor/dist/js/index.js'

/* three.js 初始化场景系列操作 */
const threeEditor = new ThreeEditor( 
    
    document.getElementById('box'), // 容器

    {

        fps: null, // fps

        pixelRatio: window.devicePixelRatio * 1, // 像素比

        webglRenderParams: { antialias: true, alpha: true, logarithmicDepthBuffer: true }, // webgl 渲染参数

    }

)

window.onresize = () => threeEditor.renderSceneResize() // 窗口大小变化
`,e=`import { ThreeEditor } from '/three-editor/dist/js/index.js'

// 参数地址
const url = 'https://z2586300277.github.io/three-editor/dist/files/editorJson/地图.json'

// 获取参数
const sceneParams = await fetch(url).then(res => res.json())

// 初始化场景系列操作
const threeEditor = new ThreeEditor(document.getElementById('box'), { sceneParams })

// 窗口大小变化
window.onresize = () => threeEditor.renderSceneResize() 
`,i=`import { ThreeEditor } from '/three-editor/dist/js/index.js'

// draco 路径地址
ThreeEditor.dracoPath = '/three-editor/dist/draco/' 

// 初始化场景系列操作
const threeEditor = new ThreeEditor(document.getElementById('box'))

// 模型地址
const url = 'https://z2586300277.github.io/three-editor/dist/files/resource/car.glb' 

// 导入GLTF模型
threeEditor.modelCore.insertModel({ type: 'GLTF', url })

// 快速创建一个基础环境光
threeEditor.setLight() 

// 窗口大小变化
window.onresize = () => threeEditor.renderSceneResize() 
`,t=`import { ThreeEditor } from '/three-editor/dist/js/index.js'

// 初始化场景系列操作
const threeEditor = new ThreeEditor(document.getElementById('box'))

// 相机
const { camera } = threeEditor

// 设置相机位置
camera.position.set(0, 400, 400) 

// 模型地址
const url = 'https://z2586300277.github.io/three-editor/dist/files/resource/aroundBuilding.FBX'

// 导入FBX模型
const { loaderService } = threeEditor.modelCore.insertModel({ type: 'FBX', url })

// 模型加载完成
loaderService.complete = group => group.scale.set(0.01, 0.01, 0.01) 

// 环境光
threeEditor.setLight('AmbientLight', { color: 0xffffff, intensity: 6 })

// 窗口大小变化
window.onresize = () => threeEditor.renderSceneResize() 
`,o=`import { ThreeEditor } from '/three-editor/dist/js/index.js'

// 初始化场景系列操作
const threeEditor = new ThreeEditor(document.getElementById('box'))

// 模型地址
const url = 'https://z2586300277.github.io/three-editor/dist/files/other/obj/house.obj' 

// 插入模型
threeEditor.modelCore.insertModel({ type: 'OBJ', url })

// 快速创建一个基础环境光
threeEditor.setLight() 

// 窗口大小变化
window.onresize = () => threeEditor.renderSceneResize() 
`,r=`import { ThreeEditor, dat } from '/three-editor/dist/js/index.js'

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

`,a=`import { ThreeEditor, dat } from '/three-editor/dist/js/index.js'

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

// 截图
GUI.add({ '截图': () => {

    const base64 = threeEditor.getSceneEditorImage(['image/png', '0.8'])

    const link = document.createElement('a');

    link.href = base64;

    link.download = 'myImage.png';

    link.click();

} }, '截图')

// 保存场景参数
GUI.add({ '@保存场景参数': () => localStorage.setItem('threeEditor_sceneParams', JSON.stringify(threeEditor.saveSceneEdit())) }, '@保存场景参数')

// 销毁
GUI.add({ '销毁': () => threeEditor.destroySceneRender()  }, '销毁')

`,E=`import { ThreeEditor,THREE, dat } from '/three-editor/dist/js/index.js'

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
`,s=`import { ThreeEditor,THREE, dat } from '/three-editor/dist/js/index.js'

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
`,B=`import { ThreeEditor, createGsapAnimation, dat } from '/three-editor/dist/js/index.js'

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

`,n=`import { ThreeEditor, dat } from '/three-editor/dist/js/index.js'

// draco 路径地址
ThreeEditor.dracoPath = '/three-editor/dist/draco/' 

// 初始化场景系列操作
const threeEditor = new ThreeEditor(document.getElementById('box'))

// 窗口大小变化
window.onresize = () => threeEditor.renderSceneResize() 

// 模型地址
const url = 'https://z2586300277.github.io/three-editor/dist/files/resource/Soldier.glb' 

// 导入GLTF模型
const { loaderService } = threeEditor.modelCore.insertModel({ type: 'GLTF', url })

// 创建一个点光源
threeEditor.setLight('PointLight', { color: 0xffffff, intensity: 5 }).position.set(10, 10, 0)

// GUI
const GUI = new dat.GUI()

// 模型加载完成
loaderService.complete = model => {

    model.animations.forEach((_, k) => {
        
        GUI.add({ fn: () =>  {

            model.animationPlayParams.actionIndexs.forEach((_, _k, arr) =>  arr[_k] = _k === k )

            threeEditor.setModelAnimationPlay(model)

        }}, 'fn').name(\`单动画\${k}\`)

    });

    // 多动画
    GUI.add({ fn: () =>  {

        const _actions = [1, 2] // 同时播放 第三个和第四个动画

        model.animationPlayParams.loop = true // 循环播放

        model.animationPlayParams.actionIndexs.forEach((_, k, arr) => arr[k] = _actions.includes(k))

        const { actions } = threeEditor.setModelAnimationPlay(model)

        setTimeout(() => actions.forEach((v => v.stop())), 8000)
        
   }}, 'fn').name('1, 2动画同时播放')

}

`,Q=`import { ThreeEditor,THREE, createMesh, dat } from '/three-editor/dist/js/index.js'

// 元素
const DOM = document.getElementById('box')

// 初始化场景系列操作
const threeEditor = new ThreeEditor(DOM)

// 窗口大小变化
window.onresize = () => threeEditor.renderSceneResize()

// 模型地址
const url = 'https://z2586300277.github.io/three-editor/dist/files/resource/Soldier.glb' 

// 导入GLTF模型
const { loaderService } = threeEditor.modelCore.insertModel({ type: 'GLTF', url })

// 创建一个点光源
threeEditor.setLight('AmbientLight', { color: 0xffffff, intensity: 10 })

// 模型的着色器
loaderService.complete = model => ['流光闪电', '晶片着色', '彩虹光', '绚烂线条', '水波纹'].forEach((i, k) => {

    setTimeout(() => threeEditor.setObjectBlendShader(model, i), k * 1000)
    
})

// 取出scene
const { scene } = threeEditor

// 创建一个球体
const mesh = createMesh({ type: '球体', parameters: { radius: 0.5 }})

mesh.position.y += 4

scene.add(mesh);

// 球着色器
['水波纹', '彩虹光', '火焰燃烧', '晶片着色', '绚烂线条'].forEach((i, k) => {

    setTimeout(() => threeEditor.setObjectBlendShader(mesh, i), k * 1500)
    
})

`,c=`import { ThreeEditor, dat } from '/three-editor/dist/js/index.js'

// draco 路径地址
ThreeEditor.dracoPath = '/three-editor/dist/draco/' 

// 场景列表
const sceneList = ['智慧城市扫光', '天空和环境', '地图', '自定义3d组件镜子']

// 获取场景参数
const getParams = value => fetch('/three-editor/dist/files/editorJson/' + value + '.json').then(res => res.json())

// 获取第一场景
const sceneParams = await getParams(sceneList[0])

// 初始化场景系列操作
const threeEditor = new ThreeEditor(document.getElementById('box'), { sceneParams })

// GUI 
const GUI = new dat.GUI()

// 切换场景
GUI.add({ scene: '智慧城市扫光' }, 'scene', sceneList).onChange((value) => {

    getParams(value).then(json => {

        threeEditor.resetEditorStorage(json) // 重置编辑器存储

    })

})

// 窗口大小变化
window.onresize = () => threeEditor.renderSceneResize() 
`,Y=[{name:"快速开始",key:"quickStart",children:[{name:"创建场景",key:"createEditor",code:A,image:new URL("data:image/jpeg;base64,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",import.meta.url).href,meta:{title:"使用three-editor",keywords:"three-editor使用",description:"使用three-editor创建一个场景"}},{name:"加载参数",key:"loadParams",code:e,image:new URL("data:image/jpeg;base64,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",import.meta.url).href,meta:{title:"三维地图",keywords:"three.js 地图",description:"基于three.js创建的三维可视化地图"}},{name:"事件和操作",key:"editorEvent",code:r,image:new URL("data:image/jpeg;base64,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",import.meta.url).href,meta:{title:"编辑器事件",keywords:"three-editor 事件",description:"three-editor的事件系统"}},{name:"加载和保存",key:"loadAndSave",code:a,image:"/three-editor/dist/files/channels/loadAndSave.gif",meta:{title:"加载和保存",keywords:"three-editor 加载 保存",description:"three-editor的加载和保存"}},{name:"场景切换",key:"sceneChange",code:c,image:"/three-editor/dist/files/channels/sceneChange.gif",meta:{title:"场景切换",keywords:"three-editor,场景切换",description:"three-editor的场景切换"}},{name:"天空盒和环境贴图",key:"skyAndEnv",code:E,image:new URL("data:image/jpeg;base64,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",import.meta.url).href,meta:{title:"天空盒和环境贴图",keywords:"three-editor 天空盒 环境贴图",description:"three-editor的天空盒和环境贴图"}},{name:"加载CSS和DOM",key:"loadCssDom",code:s,image:new URL("data:image/jpeg;base64,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",import.meta.url).href,meta:{title:"加载CSS和DOM",keywords:"three-editor CSS DOM",description:"three-editor的CSS和DOM加载"}},{name:"视角动画",key:"gsapAnimate",code:B,image:new URL("data:image/jpeg;base64,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",import.meta.url).href,meta:{title:"视角动画",keywords:"gsap,动画",description:"three-editor的视角动画"}}]},{name:"模型加载",key:"loadModel",children:[{name:"加载GLTF模型",key:"loadGltf",code:i,image:new URL("data:image/jpeg;base64,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",import.meta.url).href,meta:{title:"加载GLTF模型",keywords:"three.js GLTF模型",description:"使用three.js加载GLTF模型"}},{name:"加载FBX模型",key:"loadFbx",code:t,image:new URL("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAB8VFxsXEx8bGRsjIR8kLk0yLioqLl5DRzhNb2J1c21ibGp7irGWe4OnhGpsmtGcp7a8xsjGd5TZ6NfA5rHCxr7/2wBDASEjIy4oLloyMlq+f2x/vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr6+vr7/wgARCACTAMgDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAHxAFIUiwKIUllIsCiFIsCiAUBCgAJQlABCkKAAlAAAJQlCUBCgSwssLLCygACFIoiiLA3DOlJNwjQxNQhSFIUgKgVBYFg6ZsKuDTOioJNZJZSWCywoJYKgsCoFlOmNZJbTMojWRAqCwAFgWCwLLBrOi3IqBZCsiwLAWACwFgAsBrI0yKgWACwFgAqAUiwFIAsBRKIUgCiALABQgFCAsAAAAAACwAP/xAAgEAABBAIBBQAAAAAAAAAAAAABABBAQRExAiAyQmBw/9oACAEBAAEFAvkOHw1wMOUWpGEW5bVVZgjbHouGZAVBFtmJ4jtLXeYdUWMbPuX/xAAUEQEAAAAAAAAAAAAAAAAAAABw/9oACAEDAQE/AQL/xAAUEQEAAAAAAAAAAAAAAAAAAABw/9oACAECAQE/AQL/xAAZEAACAwEAAAAAAAAAAAAAAAABcAAQIVD/2gAIAQEABj8CeO8w0IF3/8QAIxAAAwACAQMEAwAAAAAAAAAAAAERITFAQVFxEGGBkWBw4f/aAAgBAQABPyH9QuFsaglT+CIanBdGRqLYjRHtEq34J9SV/HUSPg3syMQ+Rg2nRaZ9O2vYTu+DGnYe8G79DV0kFcbFrZan0NZ4RHU0VTWR+4tdS7vE2LuYmG2ajpWu5gZvuNXSG70nBR4GwvFFpYx5JJG4+KbLGhuuzgoaiM8jc0kJGVrhrqN1FSDyVyfmH//aAAwDAQACAAMAAAAQ8440w4o0w40w8gEAAIIQEEAAIAAAgggEAUUUQAA4ww0wsU444448Mkss4cYkoosUAsMcMsk4oEcMc8sscUosckMccs8cs8c888s8cs8M404804Q48w808g8g8c888888c8//xAAUEQEAAAAAAAAAAAAAAAAAAABw/9oACAEDAQE/EAL/xAAUEQEAAAAAAAAAAAAAAAAAAABw/9oACAECAQE/EAL/xAAjEAACAgEEAwEBAQEAAAAAAAAAAREhMRBBUWFxgaEgkTDB/9oACAEBAAE/EP8AVf8AP967K7K7K7K7KjcrsrsqNyuxRLyV2V2OE9yo3K7HHZXZXZXZXZXekbwXx8L4+F8fC+PhcY+F8fBzx8FPHwvj4XCr4KZx8FMuvhcOvhfHwc8fBTOPhfHwuMfC+Pg54+F4j4Xx8LzHwSP4RBBG1CXg/glvRHgiiPA14ErWBLOMEU8EeCKRHgavYS8EEUR4I3o/h/CPB7IjgjwRC2I8DW1EeBq8oi9h52Er2Eu1gSzgjwRWxHgitiPA1vR7Q140jtEMhkEMSIYlZDErIYk5IYkxJ34EmQxJ2QxJ2QxJ4IZDwQyH+dtNvOm2mzLCD6IUynK2LnS4E9NtQ2IZubUd8k0tFkdPR6PSWS8ksTJZLG7JYnaoTbwPU2jngaItTI7ew224MHKkkbSiURgWWbb+WO2lCtsHXxamhtySxt0SyXHglibwSyFyVyVyViSuRRyVyJJtKSLbeJb7i1NhWN1CTl0UZeFtsLHu2hHRCZQs23MuX/SWpLKFwNUNLe64HFWVyVGSuRROSOyuRxnVavjTkZGbKFuGTnhREITLgSUKwNkc5kjTqkv+jPJEmnCkSsb5WKUmblPBsUKJK4KHGShRgno9De0HoXgno9E0qPQ0NUVmNQ1XY4STLc5JZRy+RsYDjRmxu8E9Gzo9HobvB6FxBPR60XOu2rzojdIotAS9vAl4xKvJOZtuiqjp6EMQnDxBDOkwJRUOORDKMGu2r09DjEHoy8Dc7HoXg9HodKXDnaCfBOUxobDzyNBUtLdiZmk4DoOYyIwLgSJkY2C8JPZ6PQvB6PRtg9C512121jFx7G0HakiMkPYRpJi7lbjUhOZUudhmdTmUJyU7ajV51edFkY0QQNEEDRBBNKERFj0qvECRQnUK8DuExg4KMkDWCCCMEEEUiCCK1XOqz+Hl6vXZa7a7PVa7a7PVZ/DzrstVvqs/iGJMhvYhkMadEMhiTshkMhjTlkMhkOCGQxJyQyGQxpkMh6LD/Dzrs/w8vXbVZ/G2v//Z",import.meta.url).href,meta:{title:"加载FBX模型",keywords:"three.js FBX模型",description:"使用three.js加载FBX模型"}},{name:"加载OBJ模型",key:"loadObj",code:o,image:new URL("data:image/jpeg;base64,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",import.meta.url).href,meta:{title:"加载OBJ模型",keywords:"three.js OBJ模型",description:"使用three.js加载OBJ模型"}},{name:"模型动画",key:"modelAnimate",code:n,image:new URL("data:image/jpeg;base64,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",import.meta.url).href,meta:{title:"模型动画",keywords:"模型动画",description:"使用three.js模型动画"}},{name:"对象和着色器",key:"objectAndShader",code:Q,image:new URL("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQCAwMDAgQDAwMEBAQEBQkGBQUFBQsICAYJDQsNDQ0LDAwOEBQRDg8TDwwMEhgSExUWFxcXDhEZGxkWGhQWFxb/2wBDAQQEBAUFBQoGBgoWDwwPFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhb/wgARCAC5AMgDASIAAhEBAxEB/8QAGwABAQEAAwEBAAAAAAAAAAAAAAECBAUGBwP/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAB+PAAAAAbxuZwLoAAAAAAAAAABvG5nAugAAAAAAAAAAG+z7v0a8c5/A4QJAAAAAAAAAAPW87xnO9mv16TePLAzAAAAAAAAAAG8bmcC6AAAAAAAAAAA7ji/v8AS88fj7u+kvYKAAAAAAAAAAdr1Xq7w8tkncAAAAAAAAAALFhbFzqLECwAAAAAALAAlAAWJbFWLLkAAALAoM0AAAAABYlKWC5AAAAAAAAAAAAqJooguQAAAAAAAAAAAP/EAB8QAAEEAgMBAQAAAAAAAAAAAAMBAgRABTIAEhMwgP/aAAgBAQABBQL5rpYXSwulhdLC6V8dGQjfMasng8SVsL1JHf15l3JXjmIB6zSdHuc91ddLC6Vz4uaOKaOQcSviphIsrNrAlgzWLk4w1eXxHORtdzWnh/gf/8QAIBEAAgIBBAMBAAAAAAAAAAAAAREAMAIDEjFBICEyUf/aAAgBAwEBPwHxPVp6tGnuhCsGShLNh6tzyRFur9Y3MHmEK0FT0Yla4nxc3zNv5d//xAAeEQACAgEFAQAAAAAAAAAAAAABEQACMAQSMUBRIf/aAAgBAgEBPwHv001rV3OWqalHJTU1FEZe26z7P2AvIDkS5hLxL2PzEBGuMjfa/8QAKRAAAQMCBgEDBQEAAAAAAAAAAgEDEQBAEhMhIkGBMSNgYQQwMlBxUv/aAAgBAQAGPwL7Y93I93I93I93I93GaaSKcVhVsY/lbfxLxbi3PMLFbUjSgDnzb4m1/vzSKgpK1iJZVbge7ke7hr6nKzGX5yzbXFMU26UYSVefFwCo6SNzvTiF86V6wNgBxluBpu/0tIDytmJJIuNFiFbgXA27YjFPFYUJYXibhzLQGiwSq4/TWNYT5/a6XWvtHS619nf/xAAjEAEAAQMEAwADAQAAAAAAAAABEQAhQDFBYcFRcaEwUIGR/9oACAEBAAE/Ifx/d0yfu6ZP3dMn7umT93TIQShBsfdM4HhUAZeRtxjm2LOFKXs0lcDZArfmokhBVj2zV0OntQgGS97U5VqFyPu6ZP3dMgFBADL1WLkQ6lEdBCLl4TbIs/F1dF7oqZktsv7u3K7FDKXEW85DlCidwQ1Q/wB0pCRrCx/mOMM+Klw8REUKS+22SLVnikTXJGLbeKgemVPtUbl8qR1/2kjJFNKs8NJGuSO2pUT0ypny5pNy5klqs625/Z//2gAMAwEAAgADAAAAEAAAAAFQAAAAAAAAAAAFQAAAAAAAAAAAHQgAAAAAAAAAABggAAAAAAAAAAFQAAAAAAAAAAAJQgAAAAAAAAAAGoAAAAAAAAAAG4MigAAAAAAD8wAAEhgQAABeQAAAAAAM5gAIgAAAAAAAAAJjgAAAAAAAAAAAAP/EACgRAAECAwYGAwAAAAAAAAAAAAEAESEwMSBBcZHB4VFhgaHR8BCx8f/aAAgBAwEBPxCzXi0M2vFoZpmF2RCYzIIFRiZXi0M1nH9u1muca/xMd6IOC4quQHjt4yRYrpD8E3GwShNQge23XNEiY2HTPWQDAYxHuSbo37+w+Wl43nfv1zTjU/b7nf/EAB4RAQACAgIDAQAAAAAAAAAAAAEAESEwIDFBUcEQ/9oACAECAQE/EOL2bXs2iqD1EPYbARZMS+2Xs2qEsuALNlA6wVolPhEFeJk6g6CucI41hwS5k4o58Sn0i3l51Lrv9V2116l+93//xAAoEAEAAQMDAwQCAwEAAAAAAAABEQAhMUBBUTBhgXGR0fAgsVChweH/2gAIAQEAAT8Q6f1HOpfUc6l9RzqX1HOpe6/ZqCSeRxz2cHZokV3IoDtBan8RKLlmZb6dKKFICyQ825xREAlWass8LE2tVwAIGYIg/wB9tPYhgCkhmBvfzUTvrJEILHmketO41H1HOpfUc6cXYqUMh4yOSuIMNDEjwto7pQLDctMTqJsvEW0IYSGSGxerp1hPAwVCIlThtRN8/AJIII9kJLkmncUi4CCBxIkCIM5FwTFQ2OnCLE4MaeAgMphJGjuCPsPO0Kla0DRcnTAtSGL96FhYmYbntXn/ANPxSECNGE4qxm7Sz+CjB5MVvF+WfHNIjCQmgiM+1LaCx0CZAhzueabVYGeT1OqFpbFTGPfpijIom5Wxw8D9lOJYRwmHogtWMXpu36zF2cmzUY/ScPxSKBD+JdtVjN+1KuiUJBwO3pxUckvLP/fwXYsabaHoZPmliTuG3qbalKkUeSpxpcC3k+P5P//Z",import.meta.url).href,meta:{title:"对象和着色器",keywords:"着色器",description:"使用three.js对象和着色器"}}]}],m=`
import { ThreeEditor, THREE, dat } from '/three-editor/dist/js/index.js' 

const DOM = document.getElementById('box') // 获取DOM

const threeEditor = new ThreeEditor(DOM) // 使用ThreeEditor 简化 three.js 初始化场景系列操作

window.onresize = () => threeEditor.renderSceneResize() // 窗口大小变化

const { scene } = threeEditor

// 立方体 
const geometry = new THREE.BoxGeometry(4, 4, 4);

const material = new THREE.MeshBasicMaterial({ color: 0xffffff });

const mesh = new THREE.Mesh(geometry, material);

const ambientLight = new THREE.AmbientLight(0xffffff, 5);

scene.add(ambientLight);

scene.add(mesh);

// GUI 对象
const GUI = new dat.GUI()

const fileList = new Array(6).fill().map((_, i) => \`/three-editor/dist/glsl/\${i}.frag\`)

GUI.add({url: fileList[0]}, 'url', fileList).onChange((url) => changeShader(url))

changeShader(fileList[0])

let shader = null

animate()

// 渲染 
function animate() {

    shader && (shader.uniforms.u_time.value += 0.02)

    requestAnimationFrame(animate)

}

async function changeShader(url) {

    const str = await fetch(url).then(res => res.text())

    // 使用 shader 库中的phong材质 进行修改
    shader = {
        
        uniforms: THREE.UniformsUtils.merge([

            THREE.ShaderLib['phong'].uniforms,

            {

                u_resolution: {

                    type: 'v2',

                    value: new THREE.Vector2(DOM.clientWidth, DOM.clientHeight)

                },

                u_time: {

                    type: 'f',

                    value: 0.0

                },

                u_mouse: {

                    type: 'v2',

                    value: new THREE.Vector2(0, 0)

                }

            }

        ]),

        side: THREE.DoubleSide,

        vertexShader: \`
            varying vec2 vUv;
            void main() {
                vUv = uv;
                vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
                gl_Position = projectionMatrix * mvPosition;
            }
        \`,

        fragmentShader: str,

    }

    shader.fragmentShader = shader.fragmentShader.replace(/gl_FragCoord/, 'vUv * u_resolution.xy')

    shader.fragmentShader = shader.fragmentShader.replace(/uniform float u_time;/, \`
        uniform float u_time;
        varying vec2 vUv;
    \`)

    const material = new THREE.ShaderMaterial(shader);

    mesh.material.dispose()

    mesh.material = material

}

`,l=`
import { ThreeEditor, THREE } from '/three-editor/dist/js/index.js'

// 使用ThreeEditor 简化three.js 创建场景系列操作
const threeEditor = new ThreeEditor(document.getElementById('box'))

window.onresize = () => threeEditor.renderSceneResize() // 窗口大小变化

const { scene, camera } = threeEditor // 场景

camera.position.set(0, 40, 40) // 相机位置

/* 顶点着色器 */
const vertexs = \`varying vec2 vUv;
void main() {
  vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}\`

/* 片元着色器 */
const fragments = \`
uniform float time;
uniform float opacity;
uniform vec3 color;
uniform float num;
uniform float hiz;
varying vec2 vUv;
void main() {
  vec4 fragColor = vec4(0.);
  float sin = sin((vUv.y - time * hiz) * 10. * num);
  float high = 0.92;
  float medium = 0.4;
  if (sin > high) {
    fragColor = vec4(mix(vec3(.8, 1., 1.), color, (1. - sin) / (1. - high)), 1.);
  } else if(sin > medium) {
    fragColor = vec4(color, mix(1., 0., 1.-(sin - medium) / (high - medium)));
  } else {
    fragColor = vec4(color, 0.);
  }
  vec3 fade = mix(color, vec3(0., 0., 0.), vUv.y);
  fragColor = mix(fragColor, vec4(fade, 1.), 0.85);
  gl_FragColor = vec4(fragColor.rgb, fragColor.a * opacity * (1. - vUv.y));
}\`

// 自定义材质
const custMaterial1 = new THREE.ShaderMaterial({
    uniforms: {
      time: {
        type: "pv2",
        value: 0,
      },
      color: {
        type: "uvs",
        value: new THREE.Color("#FF4127"),
      },
      opacity: {
        type: "pv2",
        value: 1.0,
      },
      num: {
        type: "pv2",
        value: 10,
      },
      hiz: {
        type: "pv2",
        value: 0.03,
      },
    },
    vertexShader: vertexs,
    fragmentShader: fragments,
    blending: THREE.AdditiveBlending,
    transparent: !0,
    depthWrite: !1,
    depthTest: !0,
    side: THREE.DoubleSide,
});

let c = [0,0, 10, 0, 10, 10, 0, 10, 0, 0]

let posArr = [];

let uvrr = [];

let h = 10; //围墙拉伸高度

for (let i = 0; i < c.length - 2; i += 2) {

  // 矩形的三角形1
  posArr.push(c[i], c[i + 1], 0, c[i + 2], c[i + 3], 0, c[i + 2], c[i + 3], h);

  // 矩形的三角形2
  posArr.push(c[i], c[i + 1], 0, c[i + 2], c[i + 3], h, c[i], c[i + 1], h);

  // 注意顺序问题，和顶点位置坐标对应
  uvrr.push(0, 0, 1, 0, 1, 1);

  uvrr.push(0, 0, 1, 1, 0, 1);

}

const geometry = new THREE.BufferGeometry(); //声明一个空几何体对象

// 设置几何体attributes属性的位置position属性
geometry.attributes.position = new THREE.BufferAttribute(new Float32Array(posArr), 3);

// 设置几何体attributes属性的位置uv属性
geometry.attributes.uv = new THREE.BufferAttribute(new Float32Array(uvrr), 2);

geometry.computeVertexNormals()

const custMaterial = new  THREE.MeshLambertMaterial({

  color: 0X049ef4,

  side : THREE.DoubleSide

})

let mesh = new THREE.Mesh(geometry, custMaterial1); //网格模型对象Mesh

mesh.rotation.x = -Math.PI / 2;

scene.add(mesh);

animate()

/* 渲染函数 */
function animate() {

    if (custMaterial1) custMaterial1.uniforms.time.value += 0.03;

    requestAnimationFrame(animate)

}

`,d=`import { THREE, ThreeEditor } from '/three-editor/dist/js/index.js'

/* 使用ThreeEditor 简化 three.js 初始化场景系列操作 */
const threeEditor = new ThreeEditor( document.getElementById('box'))

window.onresize = () => threeEditor.renderSceneResize() // 窗口大小变化

/* 使用简化的后方式导入 FBX */
const { loaderService } = threeEditor.modelCore.insertModel({ type: 'FBX', url: '/three-editor/dist/files/resource/aroundBuilding.FBX' })

// 模型加载完成回调
loaderService.complete = group => {

    group.scale.set(0.005, 0.005, 0.005) // 缩小

    group.traverse(i => i.material = material) // 设置材质

    animate() // 动画

}

const uniforms = {

    innerCircleWidth: { value: 0 },

    circleWidth: { value: 300 },

    diff: { value: new THREE.Color(0.2, 0.2, 0.2) },

    color: { value: new THREE.Color(0.0, 0.0, 1.0) },

    opacity: { value: 0.3 },

    center: { value: new THREE.Vector3(0, 0, 0) }

}

function animate() {

    if (uniforms.innerCircleWidth.value < 1000) uniforms.innerCircleWidth.value += 3
    
    else uniforms.innerCircleWidth.value = 0

    requestAnimationFrame(animate)

}

const material = new THREE.ShaderMaterial({

    uniforms,

    vertexShader: \`
        varying vec2 vUv;
        varying vec3 v_position;
        void main() {
            vUv = uv;
            v_position = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    \`,

    fragmentShader: \`
        varying vec2 vUv;
        varying vec3 v_position;

        uniform float innerCircleWidth;
        uniform float circleWidth;
        uniform float opacity;
        uniform vec3 center;
        
        uniform vec3 color;
        uniform vec3 diff;

        void main() {
            float dis = length(v_position - center);
            if(dis < (innerCircleWidth + circleWidth) && dis > innerCircleWidth) {
                float r = (dis - innerCircleWidth) / circleWidth;
            
                gl_FragColor = mix(vec4(diff, 0.1), vec4(color, opacity), r);
            }else {
                gl_FragColor = vec4(diff, 0.1);
            }

        }
    \`,

})

`,g=`
import { ThreeEditor, THREE, dat } from '/three-editor/dist/js/index.js' 

const DOM = document.getElementById('box') // 获取DOM

const threeEditor = new ThreeEditor(DOM) // 使用ThreeEditor 简化 three.js 初始化场景系列操作

window.onresize = () => threeEditor.renderSceneResize() // 窗口大小变化

const { scene } = threeEditor // 获取场景

const amibientLight = new THREE.AmbientLight(0xffffff, 4) // 环境光

scene.add(amibientLight) // 添加环境光

const geometry = new THREE.BoxGeometry(5, 5, 5) // 立方体

const video = document.createElement('video')

video.crossOrigin = 'anonymous' // 跨域

video.src = 'http://vjs.zencdn.net/v/oceans.mp4'

video.loop = true // 循环播放

video.muted = true // 静音

video.play()

const texture = await new Promise(r => video.onloadeddata = () => r(new THREE.VideoTexture(video))) // 创建视频纹理

// 使用 shader 库中的phong材质 进行修改
const shader = {
    
    uniforms: THREE.UniformsUtils.merge([

        THREE.ShaderLib['phong'].uniforms,

        {
            r: {
                type: 'v2',
                value: new THREE.Vector2(DOM.clientWidth, DOM.clientHeight)
            },
            t: {
                type: 'f',
                value: 0.0
            },
            colorTexture: { value: texture },
            calcType: {
                value: 2
            }
        }

    ]),

    vertexShader: THREE.ShaderLib['phong'].vertexShader,

    fragmentShader: THREE.ShaderLib['phong'].fragmentShader,

}

// GUI 切换混合运算类型
const GUI = new dat.GUI()

GUI.add(shader.uniforms.calcType, 'value', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).name('混合运算类型');

// 动画
(function animate() {

    shader.uniforms.t.value += 0.1

    requestAnimationFrame(animate)

})()

shader.vertexShader = shader.vertexShader.replace(/#include <common>/, \`
    varying vec2 vUv;
    #include <common>    
\`)

shader.vertexShader = shader.vertexShader.replace('void main() {', \`
    void main() {
    vUv = uv; 
\`)

shader.fragmentShader = shader.fragmentShader.replace(/#include <common>/, \`
    precision highp float;
    varying vec2 vUv;
    uniform vec2 r;
    uniform float t;
    uniform float calcType;
    uniform sampler2D colorTexture;
    #include <common> 
\`)

shader.fragmentShader = shader.fragmentShader.replace('vec4 diffuseColor = vec4( diffuse, opacity );', \`
   vec3 c;
    float l,z=t;
    for(int i=0;i<3;i++) {
        vec2 uv,p=gl_FragCoord.xy/r/2.0;
        uv=p +  2.0 * vUv;
        p-=.5;
        p.x*=r.x/r.y;
        z+=.07;
        l=length(p);
        uv+=p/l*(sin(z)+1.)*abs(sin(l*9.-z-z));
        c[i]=.01/length(mod(uv,1.)-.5);
    }
  vec3 color = texture2D( colorTexture, vUv ).rgb;
  vec3 mixedColor;
  if (calcType == 0.0)  mixedColor = max(color, c);
  else if(calcType == 1.0) mixedColor = min(color, c);
  else if(calcType == 2.0) mixedColor = mix(color, c, 0.5);
  else if(calcType == 3.0) mixedColor = mod(color, c);
  else if(calcType == 4.0) mixedColor = pow(color, c);
  else if(calcType == 5.0) mixedColor = step(color, c);
  else if(calcType == 6.0) mixedColor = color + c;
  else if(calcType == 7.0) mixedColor = color - c;
  else if(calcType == 8.0) mixedColor = c  - color;
  else if(calcType == 9.0) mixedColor = color + c - vec3(1.0) * c * color;
  else mixedColor = color;
  vec4 diffuseColor = vec4( diffuse * mixedColor, opacity );
\`)

const material = new THREE.ShaderMaterial(shader)

material.lights = true // 光照影响

const mesh = new THREE.Mesh(geometry, material)

scene.add(mesh)

`,h=`import { THREE, ThreeEditor } from '/three-editor/dist/js/index.js'

// draco 路径地址
ThreeEditor.dracoPath = '/three-editor/dist/draco/' 

const DOM = document.getElementById('box')

// threeEditor 简化 three.js 初始化场景系列操作
const threeEditor = new ThreeEditor(DOM)

// 模型地址
const url = 'https://z2586300277.github.io/three-editor/dist/files/resource/car.glb' 

// 简化后的导入GLTF模型
threeEditor.modelCore.insertModel({ type: 'GLTF', url }).loaderService.complete = model => {

    const materials = []
    
    model.traverse(c => c.isMesh && materials.push(c.material))

    materialsBlendShader([... new Set(materials)])
    
}

// 窗口大小变化
window.onresize = () => threeEditor.renderSceneResize() 

const ambientLight = new THREE.AmbientLight(0xffffff, 3) 

threeEditor.scene.add(ambientLight)

/* 混合着色 */
function materialsBlendShader(matarials) {

    const uniforms = {

        iResolution: {
            type: 'v2',
            value: new THREE.Vector2(DOM.clientWidth, DOM.clientHeight)
        },

        iTime: {
            type: 'f',
            value: 1.0
        }

    }

    render()
    
    function render() {
        
        uniforms.iTime.value += 0.02
        
        requestAnimationFrame(render)
        
    }

    /* 遍历材质 */
    matarials.forEach(material => {

        // 材质加工
        material.onBeforeCompile = (shader, renderer) => {

            shader.uniforms.iResolution = uniforms.iResolution

            shader.uniforms.iTime = uniforms.iTime

            /* 注意 如果使用原本自身的着色器进行部分替换  vUv 是已经存在的不用重新传递 */
            shader.fragmentShader = shader.fragmentShader.replace(/#include <common>/, \`
                uniform vec2 iResolution;
                uniform float iTime;
                #include <common> 
            \`)

            shader.fragmentShader = shader.fragmentShader.replace('vec4 diffuseColor = vec4( diffuse, opacity );', \`
                vec3 c;
                float l,z=iTime;
                for(int i=0;i<3;i++) {
                    vec2 uv,p=gl_FragCoord.xy/iResolution/2.0;
                    uv=p +  2.0;
                    p-=.5;
                    p.x*=iResolution.x/iResolution.y;
                    z+=.07;
                    l=length(p);
                    uv+=p/l*(sin(z)+1.)*abs(sin(l*9.-z-z));
                    c[i]=.01/length(mod(uv,1.)-.5);
                }
                vec4 diffuseColor = vec4( diffuse * c  * vec3(20.,20.,20.), opacity );
            \`)

        }

        material.needsUpdate = true

    })

}
`,W=[{name:"着色器",key:"learnShader",children:[{name:"着色器切换",key:"changeShader",code:m,image:new URL("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUEBAUEAwUFBAUGBgUGCA4JCAcHCBEMDQoOFBEVFBMRExMWGB8bFhceFxMTGyUcHiAhIyMjFRomKSYiKR8iIyL/2wBDAQYGBggHCBAJCRAiFhMWIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiL/wgARCACjAMgDASIAAhEBAxEB/8QAHAABAAEFAQEAAAAAAAAAAAAAAAQCAwUGBwEI/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAEDAgT/2gAMAwEAAhADEAAAAeYgAAAAArorokC0AAAAAAAAAACuiuiQLQAAAAAAGZw3XU1CX2fG68cmr3yPvlplG21dc6ruufzvk31fXuiW+e+Ma52PC+nDkFH0B8/ebf0SgAE8QEsROl8/3qOo3tVlRseMv+dyJKm12SKYtrHuRAqwHTZsTIn6cWPmv6J4Hx3CTVkJLqISYI6hLWoFe+8/6AbxRKuc2bkIc5blmV7ZE8uUSWNc2PB1kMzi8rWB+ePoL57sqULK1ArUAJQHROd9DjrFdOA042a/ojTjd7+FweWm62MHmuOvIGSsS3a9Ki+nDOfPnZ+MY6hKAAAA23Uti746RbtUe/x3I/lFiRjKTI7do8/HXpOo5TVctLcC/jPZ5aucbVqvi9QYbgAAAM5g1nWrfLZnq8/QbWmyNM9js4i7rnO8sXdMsrkMFIz1kYLCYfzbz4B5fQE6AAAAAAAAVUiVG8WBKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//8QALhAAAgIBAgQEBQQDAAAAAAAAAQIAAwQFEQYSExQhIjAxEBUWQEIgIzM0JjVg/9oACAEBAAEFAvU/H7j8fuPx+4/H7HD0zKz1+nc6JwzltPp60N9PkQ6HWs+UUiJpVLnG4awgnyHTQMrhzC3yeHHrNumZVUZWT1OEPHGsp5lNFiod40aU47XNiYa0n2m8tq6iXqUss3aDGFWh+nwu5VFym5upva9VfJ2auTp3lxMY0z2Jj+FVVxBatbKBhMt+pHl0r9XaWztLJ27zt3nbvOHwaQbvMmSARlowW9QwvQTrpDkpv3Vcsya+n1hz15SGpMmvbUb1fTe1tna2ztrZ29k7aydvZOac05pzznnDZ5ndIo8agItYMFYldJBZBz8ksX9t18cYeXpzVvLo+/x3m4m4/Vwx/OwMRCYikRd1gec0ZpzGPzFWDFqamgG41lANF9PhT+81O8WvaBl5j7LD7Ge0PivS84KpOZVmtsG0H0+Ev9nfkLSpy2nUlV5rsOWoq+cOtleqq784cAeF9oprvuLtlXHIpy3/AMX9PQLTVqBcsd4TCZ1GU8ncKlRqOFeGHsMu/q2uZ1em+Zmb6X6ejnbP3m8Jg8WYxbSkXKlGWFusyVswyY5lh82X/V9PS25c7ebwmbwn477Si9ucmOZfk11S7Ja31Q7LFzMhYNSvEGqGDUazBmUmC1G+FH8+RmVUS/ULbftgSIMi1f8Ar//EACQRAAICAQMEAgMAAAAAAAAAAAABAhEDIDAxEBITITJRQVBh/9oACAEDAQE/AdS3VtNtHkkd83wYovmRL+DytC497HYmKEU7F0cEx6KKKKKO3Q9csiiLMPJFciknwN0eYTtXqn8eql9mOcVwZpfgbowSco+9TVqh4GPDMeOf0O0QuQsF/IjFRVLbSS/Qf//EACYRAAICAQEIAgMAAAAAAAAAAAECABEDIQQQEyAwMTJBElEUQFD/2gAIAQIBAT8B/dCqZwVnDQDWZHXsoiV7gwqYaBodDiMIcrEUd4yMNIOjcAlbhU0ly+RMJbWHZ4MLntGQr3iizU/HhHxNc2PyG8r9TIhYazAnswC5tChX05lNG4NoH1BnSDKh9wUY9LG2mvGMxY2emST3/gf/xAA4EAABAgEIBggFBQEAAAAAAAABAAIRAwQSISIxQZIQMDJCgZEgQFFScXKhsRMjYWPBNENTYIJi/9oACAEBAAY/AtZx6zx6zx6zx6k501YHBpgYugrQkh/tVysgOJUHS8nwBVc45MVcu8/5Vb5RUWh5j9V8+TLnecr9IzmV8v4knHsdFfJnDXx7wgq5KPlMVaaR4jWTsf8AY9tFLofRRhXorVSh2aJzTFp0m4+msnUDi1WtFbVZuRga8Fa0uUIoUr+1SbrxFTqH8Tvbp7mcLczhXszhXszhXszhTmljDZrWPJY8lapZSrNKHlW/lK38pW9lW/kKO3lKx5Ki6llW9lKnQbGJk3YK4ZgtkZgrhmCwzBXNzBbuYK4K5vJXN5K5vJXNyqdeDbtGKx5rHmsU4vMY6TpFqEFPCT+2VcrlcrlcrvXpToDuD3V3qrvVbK2Stkq53JRg7kthyNkc1gtr0W07mp52/DOOsnI+3+dMI6i0QFWRWp2WGIofnWS4+1+Ue92aK1fUoisq1JiioQslVaAcUSmBt7MFPBiAPcax5bjJqJ6EQVEVFGkqOKrRhsi7RFTqT74HvrD5D0qlaQME+ia4aSnayvunU0cDprMT2BQub2a2y5w8CqpV3FV0TwVqTHAqtrgtuHiFU9vPQ1W3Wu6L1Bthv06tUSqpR3P+3//EACoQAAIBAgMIAwADAQAAAAAAAAABESExQVFhEDBxgZGxwfBAoeEgYNHx/9oACAEBAAE/Id4r+Dz8lX8Hn5Kv4PPyVfwefhTKTKIPmQuOKnBV1PA+vEiBKvTUSdARCarOaXglOGxKi27NHYnEmcX+RqfLp0YlxCSlO+pLnLmoNId8DeJpzfsWq46I7KxWl3JZlSKKpmJzk9iwgnNiuJqODH93OBkhJVc0GOlvkqcUCst3L0q30yMUGTU8LQNtUQ64fehTqoL2bHAaTpA12oIs5FkNdj0NBO8MP5ez/cab+rj/AAEEEkKmqcteQhSX2CC8OsjCRgu5EMCFpiiaW5x5Ho0GFqqCapqjiMAC1Q0kub9rE11MpdYanpHk9Q8jVf2NTQ9mp7l5Gq69WpP8dmT/AAkvwkvwDEqJTURixDePUjv6hlX6mxhi9mpXwlEsDMLCVXkUrti/QhwbJNxaSbKokoM4ZfslZerJWXqQydWehmoFMimX2U1KalNSUTNWom2CrEgu6oeo4eX+kq8I6bQlj7UmVOZC8lkFMfyQ2nk2JK9cEJSXxwdh01hUbPLeV4BqzdQZWhYqRJpaEOYWDQeRZkosbRRMWJCiTUlisjL1wbxuI8YkJTjQMzLJy5NyJLloGN9CyFXLLCjOHQeKKnsDFhohgndjAHlu41suVz57woQNi+0OLZbHtuik1a5NwGk9hMwhtPbQiomCKImet4gkSiVjWG84g8Gw9ltpKjRd1ByeNFpLQeX/AENozQWk7XvvFJklKKvYewONtg2NiZpTH0d7SJxddhO4rLb379RF0XUd++yceApnkwRcoL2KOZ2JtScSJmr4XPn8ayzgy1cNy5d3/bv/2gAMAwEAAgADAAAAEPPPPPPFvPPPPPPPPPPPFvPPPPPPPK43IADjtPPPOPLx9nerEYOMMPvubIJZvqATfffPL3beb6sdfPPPPLdzzz581/PPPPPmMRAmfn/PPPPPPPPHDPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP//EACQRAQACAQMEAQUAAAAAAAAAAAEAETEgIfAQMEFRgVBhcZHR/9oACAEDAQE/ENXl3fLssWxtGVmlB2lsLUJJUahFOo6OUSkCeUYnbnSp75+p+Rz4h9xL8ZflRV8/sClGPS03lSupmIVBuklbaZlCFsrvRKLUSJIsu2oA1hES0tAYj7iXn21XXtPAYDBCZUCb7RFWWPuXxKA0dpLzMAV9A//EACERAAMAAgEEAwEAAAAAAAAAAAABESExURAgMEFQcYFh/9oACAECAQE/EO5eVeFS5F28i4TPIONxIeoEqaYrLKl3PRWLXY3BnIhbGu1SjeClFCaGPKFyaEkvfSvAjg+nV6EfoNlTLMaNEg2Q9c/Zd4dyJqfIkSZGPOw+Rkm3uWBGDP7Au6PwPbDe3Pw1SjaHSqvCFYL+spmvxJzRtF+A/8QAKhABAAIBAgMIAwEBAQAAAAAAAQARITFBUWHwMHGBkaGxwdEQQPHhIGD/2gAIAQEAAT8Q7TpnD9l0zh+y6Zw/ZdM4fhTw/QGj4LoWGWcSuQvCfYYau5Bd6SgIRy+4VOpY75IqDt8kzFP5RAJu0Zd+Bzg7EtAjzEvjEq2PWTiDoKB7l95m27HurQi2saLB4DfpFJk0jZePaJsA3j9BHdFCO+4TchDttm2PG1klkXaULFcwiABs5SkjUW5qzLlCIFqIcOMVwKG0lXKhK0BuspJZ9RN5wnojswOhwHemOoQ3Cok7bORXCOAXamEhZEufgQ3uHVsTDBXQiabf7kYa5l13mU8m4BdInZIE3bMHiBY8FfcQJpnjA7v+3A7pO9hJpB6t50V8zor5hLdWnRM7yrXeYITq2l07rifEKMKmPoi4Cbl/zmQyrfUTSTruUaRhR4pylrEQClmFl8ROnVcJbDBoXPlMfGLzRVWVnqsLQBrqzHh+78CANYziwUazgpcNX0r5v4Vvt5GcORzbq4Tp34jZCYDnTtUvI+dHMaOT+4Xu01/tLpFLxUXyosZzJyC7RtneGBWrw4nKP3qd31DkbacH1K7DfcfULpHRwfUuBV4MCnGnFjBBUiFOKrBzlj8v2nF6jnP6v7lOx3S5jzz+8l/1l8SL4fN/k7vmJ1YjYC7B1ojnxh8/D/xDNV5Cbs+X3TbKbKgQryT8za0OeKEVBMWbcog2HpZi91Oa9lMvEu3yCABsO297gmYCfwEpQlhRd8TFbcvZlrbTeA+4YzJyjgsHNKUV9c4IFVatmVYzrFVch2NYBIG0YZIHA1RwHAwQ5LYiPWlDAvu4y8aG7DcXV7Na2jr4fbLGRxWecXS5Kje7ozHiT1tpKErYyLKUaoqRPaYC2ZnzCAOIS8QVtaSpJbo8sxVTUnKouAF7iw5a1e0zq9mmtjPjxhqrVfwcycBluFaIuGKDLuTlwVQ/LTVO5A4CZWIJL0vd8ZmZmdO2KcAIDY9+k37OocN6qP5wC6DC2xixgY0mZtHoFt3NStiuL2ShxVRvomvmZM6XmGzFJCPz/a7RrFvgDQfiNizJxPzrK1TLrz+YviHlGHoo+BfxMLmW3ETB0y+Lh4x+KI6i1pb2nfGrYOkGU4MbIPqMoLD3T6JGarm57jNXXkB7zQbHb4iU2f2DBpeRxMxWOmUFHpxkO828aiu0Ftlz+lTVV1f1KHUi1q889oMmBSxXTziIiparav8A67//2Q==",import.meta.url).href,meta:{title:"着色器切换",keywords:"three.js,着色器",description:"使用three.js创建的更换着色器"}},{name:"围栏着色器",key:"fenceShader",code:l,image:new URL("data:image/jpeg;base64,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",import.meta.url).href,meta:{title:"围栏着色器",keywords:"three.js 着色器,区域围栏着色器",description:"使用three.js创建的围栏着色器"}},{name:"模型扫光",key:"modelLightScan",code:d,image:new URL("data:image/jpeg;base64,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",import.meta.url).href,meta:{title:"模型扫光",keywords:"three.js 着色器,模型扫光",description:"使用three.js创建的模型光线扫描"}},{name:"视频着色器",key:"videoShader",code:g,image:new URL("data:image/jpeg;base64,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",import.meta.url).href,meta:{title:"视频着色器",keywords:"three.js 着色器,视频着色器",description:"使用three.js创建的视频着色器"}},{name:"模型混合着色器",key:"modelBlendShader",code:h,image:new URL("data:image/jpeg;base64,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",import.meta.url).href,meta:{title:"模型混合着色器",keywords:"three.js 着色器,模型混合着色器",description:"使用three.js创建的模型混合着色器"}}]}],w=`import { Cesium } from '/three-editor/dist/cesium/index.js'

const viewer = new Cesium.Viewer(document.getElementById('box'), {

    animation: false,//是否创建动画小器件，左下角仪表    

        baseLayerPicker: false,//是否显示图层选择器，右上角图层选择按钮

        fullscreenButton: false,//是否显示全屏按钮，右下角全屏选择按钮

        geocoder: false,//是否显示geocoder小器件，右上角查询按钮    

        homeButton: false,//是否显示Home按钮，右上角home按钮 

        sceneMode: Cesium.SceneMode.SCENE3D,//初始场景模式

        sceneModePicker: false,//是否显示3D/2D选择器，右上角按钮 

        navigationHelpButton: false,//是否显示右上角的帮助按钮  

        selectionIndicator: false,//是否显示选取指示器组件   

        timeline: false,//是否显示时间轴    

        infoBox: false,//是否显示信息框   

        scene3DOnly: true,//如果设置为true，则所有几何图形以3D模式绘制以节约GPU资源  

        orderIndependentTranslucency: false, //是否启用无序透明

        contextOptions: { webgl: { alpha: true } },

        skyBox: new Cesium.SkyBox({ show: false }),

        fxaa: false

})

viewer.scene.postProcessStages.fxaa.enabled = false;

viewer.scene.globe.maximumScreenSpaceError = 4 / 3;

viewer.scene.sun.show = false

viewer.scene.moon.show = false

viewer.scene.skyBox.show = false

viewer.scene.backgroundColor = new Cesium.Color(0.0, 0.0, 0.0, 0.0)

viewer._cesiumWidget._creditContainer.style.display = "none"

`,C=`import { Cesium, CesiumEditor } from '/three-editor/dist/cesium/index.js'

// 使用封装类简化创建cesium代码
const { viewer } = new CesiumEditor({ DOM: document.getElementById('box'), viewerParams: { baseLayer: false } })
 
viewer.imageryLayers.addImageryProvider(

    new Cesium.UrlTemplateImageryProvider({

        url: 'https://webrd02.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=2&style=8&x={x}&y={y}&z={z}',

        maximumLevel: 18

    })

)

`,u=`import { Cesium, CesiumEditor } from '/three-editor/dist/cesium/index.js'

// 使用封装类简化创建cesium代码
const { viewer } = new CesiumEditor({ DOM: document.getElementById('box'), viewerParams: { baseLayer: false } })
 
/* 百度 影像服务 */
class BaiduImageryProvider {

    constructor(options) {

        // 创建错误事件对象
        this._errorEvent = new Cesium.Event()

        // 定义瓦片宽度和高度
        this._tileWidth = 256

        this._tileHeight = 256

        // 定义最大和最小级别
        this._maximumLevel = 18

        this._minimumLevel = 1

        // 定义瓦片范围的南西角和东北角坐标
        let southwestInMeters = new Cesium.Cartesian2(-33554054, -33746824)

        let northeastInMeters = new Cesium.Cartesian2(33554054, 33746824)

        // 创建 WebMercatorTilingScheme 对象
        this._tilingScheme = new Cesium.WebMercatorTilingScheme({

            rectangleSouthwestInMeters: southwestInMeters,

            rectangleNortheastInMeters: northeastInMeters

        })

        // 获取瓦片范围
        this._rectangle = this._tilingScheme.rectangle

        // 创建资源对象
        this._resource = Cesium.Resource.createIfNeeded(options.url)

        // 设置其他属性的初始值
        this._tileDiscardPolicy = undefined

        this._credit = undefined

        this._readyPromise = undefined

    }

    // 定义属性访问器
    get url() {

        return this._resource.url

    }

    get proxy() {

        return this._resource.proxy

    }

    get tileWidth() {

        if (!this.ready) throw new Cesium.DeveloperError('tileWidth must not be called before the imagery provider is ready.')

        return this._tileWidth
    }

    get tileHeight() {

        if (!this.ready) throw new Cesium.DeveloperError('tileHeight must not be called before the imagery provider is ready.')

        return this._tileHeight

    }

    get maximumLevel() {

        if (!this.ready) throw new Cesium.DeveloperError('maximumLevel must not be called before the imagery provider is ready.')

        return this._maximumLevel

    }

    get minimumLevel() {

        if (!this.ready) throw new Cesium.DeveloperError('minimumLevel must not be called before the imagery provider is ready.')

        return this._minimumLevel

    }

    get tilingScheme() {

        if (!this.ready) throw new Cesium.DeveloperError('tilingScheme must not be called before the imagery provider is ready.')

        return this._tilingScheme

    }

    get tileDiscardPolicy() {

        if (!this.ready) throw new Cesium.DeveloperError('tileDiscardPolicy must not be called before the imagery provider is ready.')

        return this._tileDiscardPolicy

    }

    get rectangle() {

        if (!this.ready) throw new Cesium.DeveloperError('rectangle must not be called before the imagery provider is ready.')

        return this._rectangle

    }

    get errorEvent() {

        return this._errorEvent

    }

    get ready() {

        return this._resource

    }

    get readyPromise() {

        return this._readyPromise

    }

    get credit() {

        if (!this.ready) {

            throw new Cesium.DeveloperError('credit must not be called before the imagery provider is ready.')

        }

        return this._credit

    }

    // 请求影像数据
    requestImage(x, y, level, request) {

        let xTileCount = this._tilingScheme.getNumberOfXTilesAtLevel(level)

        let yTileCount = this._tilingScheme.getNumberOfYTilesAtLevel(level)

        // 构建请求 URL
        let url = this.url

            .replace("{x}", x - xTileCount / 2)

            .replace("{y}", yTileCount / 2 - y - 1)

            .replace("{z}", level)

            .replace("{s}", Math.floor(10 * Math.random()))

        // 加载影像数据
        return Cesium.ImageryProvider.loadImage(this, url)

    }

}

viewer.imageryLayers.addImageryProvider(

    new BaiduImageryProvider({

        url: 'https://maponline0.bdimg.com/tile/?qt=vtile&x={x}&y={y}&z={z}&styles=pl&scaler=1&udt=20210709'

    })

)

`,I=`import { Cesium, CesiumEditor } from '/three-editor/dist/cesium/index.js'

// 使用封装类简化创建cesium代码
const { viewer } = new CesiumEditor({ DOM: document.getElementById('box'), viewerParams: { baseLayer: false } })
 
// 天地图影像图层
viewer.imageryLayers.addImageryProvider(

    new Cesium.WebMapTileServiceImageryProvider({

        url: "https://t0.tianditu.gov.cn/img_w/wmts?tk=c4e3a9d54b4a79e885fff9da0fca712a&service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles",

        layer: "tdtImgBasicLayer",

        style: "default",

        format: "image/jpeg",

        tileMatrixSetID: "GoogleMapsCompatible"

    })

)

// 天地图注记图层
viewer.imageryLayers.addImageryProvider(

    new Cesium.WebMapTileServiceImageryProvider({

        url: "https://t0.tianditu.gov.cn/cva_w/wmts?tk=c4e3a9d54b4a79e885fff9da0fca712a&service=wmts&request=GetTile&version=1.0.0&LAYER=cva&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles",

        layer: "tdtAnnoLayer",

        style: "default",

        format: "image/jpeg",

        tileMatrixSetID: "GoogleMapsCompatible"

    })

)

`,M=`import { Cesium, CesiumEditor } from '/three-editor/dist/cesium/index.js'

// 使用封装类简化创建cesium代码
const { viewer } = new CesiumEditor({ DOM: document.getElementById('box'), viewerParams: { baseLayer: false } })

const url = 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'
 
const layer = Cesium.ImageryLayer.fromProviderAsync(

    Cesium.ArcGisMapServerImageryProvider.fromUrl(url)

)

viewer.imageryLayers.add(layer)

`,x=`import { Cesium, CesiumEditor } from '/three-editor/dist/cesium/index.js'

// 使用封装类简化创建cesium代码
const { viewer } = new CesiumEditor({ DOM: document.getElementById('box'), viewerParams: { baseLayer: false } })

// arcgis 蓝色地图
const layer = Cesium.ImageryLayer.fromProviderAsync(

    Cesium.ArcGisMapServerImageryProvider.fromUrl('https://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetPurplishBlue/MapServer')

)

viewer.imageryLayers.add(layer)

// 加载地形
viewer.terrainProvider = await Cesium.CesiumTerrainProvider.fromIonAssetId(3957, {

    requestWaterMask: true,

    requestVertexNormals: true

})

`,F=`import { Cesium, CesiumEditor } from '/three-editor/dist/cesium/index.js'

// 使用封装类简化创建cesium代码
const { viewer } = new CesiumEditor({ DOM: document.getElementById('box'), viewerParams: { baseLayer: false } })
 
viewer.imageryLayers.addImageryProvider(

    new Cesium.UrlTemplateImageryProvider({

        url: 'https://webrd02.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=2&style=8&x={x}&y={y}&z={z}',

        maximumLevel: 18

    })

)

setViewerTheme(viewer) // 设置主题

function setViewerTheme(viewer, options = {}) {

    const baseLayer = viewer.imageryLayers.get(0)

    if (!baseLayer) return

    baseLayer.brightness = options.brightness ?? 0.6

    baseLayer.contrast = options.contrast ?? 1.8

    baseLayer.gamma = options.gamma ?? 0.3

    baseLayer.hue = options.hue ?? 1

    baseLayer.saturation = options.saturation || 0

    const baseFragShader = (viewer.scene.globe)._surfaceShaderSet.baseFragmentShaderSource.sources

    for (let i = 0; i < baseFragShader.length; i++) {

        const strS = 'color = czm_saturation(color, textureSaturation);\\n#endif\\n'

        let strT = 'color = czm_saturation(color, textureSaturation);\\n#endif\\n'

        if (!options.invertColor) {

            strT += \`
                color.r = 1.0 - color.r;
                color.g = 1.0 - color.g;
                color.b = 1.0 - color.b;
            \`
            
        }

        strT += \`
            color.r = color.r * \${options.filterRGB_R ?? 100}.0/255.0;
            color.g = color.g * \${options.filterRGB_G ?? 138}.0/255.0;
            color.b = color.b * \${options.filterRGB_B ?? 230}.0/255.0;
        \`

        baseFragShader[i] = baseFragShader[i].replace(strS, strT)

    }

    viewer.scene.requestRender();

}

`,D=`import { Cesium, CesiumEditor, loadGaodeLayer, setViewerTheme } from '/three-editor/dist/cesium/index.js'

// 使用封装类简化创建cesium代码
const { viewer } = new CesiumEditor({ DOM: document.getElementById('box'), viewerParams: { baseLayer: false } })

loadGaodeLayer(viewer) // 简化后的的加载高德地图

setViewerTheme(viewer) // 简化后的设置主题

// 添加点击事件监听器
viewer.screenSpaceEventHandler.setInputAction(function (event) {

    const object = viewer.scene.pick(event.position)

    const cartesian = viewer.scene.pickPosition(event.position)

    if (Cesium.defined(cartesian)) {

        const cartographic = Cesium.Cartographic.fromCartesian(cartesian)

        const longitude = Cesium.Math.toDegrees(cartographic.longitude)

        const latitude = Cesium.Math.toDegrees(cartographic.latitude)

        const height = cartographic.height

        console.log('经度：', longitude, '纬度：', latitude, '高度：', height)

    }

    if (Cesium.defined(object)) {

        const { id } = object

        alert('点击到的对象：' + id.name + '-----id：'+ id.id)
        
    }

}, Cesium.ScreenSpaceEventType.LEFT_CLICK)

// 视角定位到中国
viewer.camera.flyTo({

    destination: Cesium.Cartesian3.fromDegrees(116.39, 39.9, 10000000)

})

// 测试点
const point = viewer.entities.add({

    name: '测试点',

    id: '点-id',

    position: Cesium.Cartesian3.fromDegrees(116.39, 39.9),

    point: {

        pixelSize: 10,

        color: Cesium.Color.RED,

        outlineColor: Cesium.Color.WHITE,

        outlineWidth: 2

    }

})

// 测试面
const polygon = viewer.entities.add({

    name: '测试多边形',

    id: '多边形-id',

    polygon: {

        hierarchy: Cesium.Cartesian3.fromDegreesArray([

            90.38, 30.91,

            80.38, 30.89,

            100.4, 39.89,

            105.4, 39.91

        ]),

        material: Cesium.Color.RED.withAlpha(0.5)

    }

})

// 测试线
const polyline = viewer.entities.add({

    name: '测试线段',

    id: '线段-id',

    polyline: {

        positions: Cesium.Cartesian3.fromDegreesArray([

            116.41, 36.91,

            100.41, 30.89

        ]),

        width: 20,

        material: new Cesium.PolylineGlowMaterialProperty({

            glowPower: 0.1,

            color: Cesium.Color.YELLOW

        })

    }

})

`,R=`import { Cesium, CesiumEditor, loadGaodeLayer, setViewerTheme } from '/three-editor/dist/cesium/index.js'

// 使用封装类简化创建cesium代码
const { viewer } = new CesiumEditor({ DOM: document.getElementById('box'), viewerParams: { baseLayer: false } })

loadGaodeLayer(viewer) // 简化后的的加载高德地图

setViewerTheme(viewer) // 简化后的设置主题

// 设置一个视角
viewer.camera.setView({

    destination: Cesium.Cartesian3.fromRadians(2.100117282185777, 0.6195146302793972, 104244.23864046125),

    orientation: {

        direction: new Cesium.Cartesian3(0.5153454276260272, -0.7794098602398831, 0.3562855034741005),

        up: new Cesium.Cartesian3(-0.1511548595883593, 0.326557215595639, 0.9330126437327882)

    }

})

// 添加点击事件监听器
viewer.screenSpaceEventHandler.setInputAction(function (event) {

    const object = viewer.scene.pick(event.position)

    console.log(object.id)

},Cesium.ScreenSpaceEventType.LEFT_CLICK)

const billboards = new Cesium.BillboardCollection(); //  创建billboard集合对象

viewer.scene.primitives.add(billboards); //  添加billboard集合对象到场景中

const color = () => new Cesium.Color(Math.random(), Math.random(), Math.random(), 1); // 随机颜色

//  生成64800个点，每个经度、纬度值各生成一个点，高度为0（贴地表）
for (var longitude = -180; longitude < 180; longitude++) {

    for (var latitude = -90; latitude < 90; latitude++) {

        billboards.add({

            position: Cesium.Cartesian3.fromDegrees(longitude, latitude),

            image: '/three-editor/dist/site.png', // 图标

            scale: 0.1, // 调整图标的大小

            color: color(), // 随机颜色

            id: 'billboard' + '-' + longitude + '-' + latitude

        })

    }

}
`,p=`import { Cesium, CesiumEditor, loadGaodeLayer, setViewerTheme } from '/three-editor/dist/cesium/index.js'

// 使用封装类简化创建cesium代码
const { viewer } = new CesiumEditor({ DOM: document.getElementById('box'), viewerParams: { baseLayer: false } })

loadGaodeLayer(viewer) // 简化后的的加载高德地图

setViewerTheme(viewer) // 简化后的设置主题

setFaceCollection(viewer)

// 创建大量面和线段
function setFaceCollection(viewer, callback) {

    const lineCollection = {

        instances: [],

        add({ positions, color = '#fff', id = '', width = 1.0, opacity = 1 }) {

            if (!positions) return

            this.instances.push(new Cesium.GeometryInstance({

                geometry: new Cesium.PolylineGeometry({

                    positions: Cesium.Cartesian3.fromDegreesArray(positions),

                    width: width * 3,

                    vertexFormat: Cesium.PolylineColorAppearance.VERTEX_FORMAT

                }),

                attributes: {

                    color: Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.fromCssColorString(color).withAlpha(opacity))

                },

                id

            }))

        }

    }

    const faceCollection = {

        instances: [],

        add({ positions, color = '#fff', id = '', opacity = 1 }) {

            if (!positions) return

            this.instances.push(new Cesium.GeometryInstance({

                geometry: new Cesium.PolygonGeometry({

                    polygonHierarchy: new Cesium.PolygonHierarchy(Cesium.Cartesian3.fromDegreesArray(positions)),

                    height: 0,

                    vertexFormat: Cesium.PerInstanceColorAppearance.VERTEX_FORMAT

                }),

                attributes: {

                    color: Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.fromCssColorString(color).withAlpha(opacity))

                },

                id

            }))

        }

    }

    if (callback) callback(faceCollection, lineCollection)

    else for (var i = 0; i < 10000; i++) {

        var longitude = Math.random() * 360 - 180;

        var latitude = Math.random() * 180 - 90;

        var positions = [longitude, latitude, longitude + Math.random(), latitude, longitude, latitude + Math.random()];

        faceCollection.add({ positions, color: i % 2 == 0 ? 'red' : 'green', id: 'face' + i, opacity: 1 })

        lineCollection.add({ positions, color: '#fff', id: 'line' + i, width: 1.0, opacity: 0.5 })

    }

    // 增加面集合到场景中
    viewer.scene.primitives.add(

        new Cesium.Primitive({

            geometryInstances: faceCollection.instances,

            appearance: new Cesium.PerInstanceColorAppearance({

                closed: true

            })

        })

    )

    // 增加线集合到场景中
    viewer.scene.primitives.add(new Cesium.Primitive({

        geometryInstances: lineCollection.instances,

        appearance: new Cesium.PolylineColorAppearance()

    }))

}

`,U=`import { Cesium, CesiumEditor, loadGaodeLayer, setViewerTheme } from '/three-editor/dist/cesium/index.js'

// 使用封装类简化创建cesium代码
const { viewer } = new CesiumEditor({ DOM: document.getElementById('box'), viewerParams: { baseLayer: false } })

loadGaodeLayer(viewer) // 简化后的的加载高德地图

setViewerTheme(viewer) // 简化后的设置主题

// 经纬度坐标5个点
const points = [116.405285, 39.904989, 121.472644, 31.231706, 113.280637, 23.125178, 114.057868, 22.543099, 120.153576, 30.287459] 

const getColor = () => '#' + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, '0') // 随机16进制颜色

setCurveCollection(viewer, curveCollection => {

    curveCollection.add({ positions: points, color: getColor(), width: 2, opacity: 0.5, id: 'curve1', multiplier: 1 }) // 添加一条曲线
    
    // 随机生成 300 个曲线
    for (let i = 0; i < 300; i++) {
        
        const positions = Array.from({ length: 10 }, () => Math.random() * 360 - 180).reduce((acc, cur) => acc.concat(cur), [])

        curveCollection.add({ positions, color: getColor(), width: 2, opacity: 0.5, id: i, multiplier: 20 })
        
    }

})

/* 创建曲线合集 */
function setCurveCollection(viewer, callback) {

    /* 曲线算法 */
    function generateCurvePoints(flattenedPoints, multiplier = 30) {

        const numOfPoints = flattenedPoints.length / 2 * multiplier

        // 将一维数组转换为二维数组
        const points = [];

        for (let i = 0; i < flattenedPoints.length; i += 2) {

            points.push([flattenedPoints[i], flattenedPoints[i + 1]])

        }

        const times = points.map((_, index) => index / (points.length - 1))

        const cartesianPoints = points.map(point => Cesium.Cartesian3.fromDegrees(point[0], point[1]))

        const spline = new Cesium.CatmullRomSpline({

            times: times,

            points: cartesianPoints

        });

        const curvePoints = [];

        for (let i = 0; i < numOfPoints; i++) {

            const time = i / (numOfPoints - 1)

            curvePoints.push(spline.evaluate(time))

        }

        return curvePoints;

    }

    const curveCollection = {

        instances: [],

        add({ positions, color = '#fff', id = '', width = 1.0, opacity = 1, multiplier = 10 }) {

            if (!positions) return

            this.instances.push(new Cesium.GeometryInstance({

                geometry: new Cesium.PolylineGeometry({

                    positions: generateCurvePoints(positions, multiplier),

                    width,

                    vertexFormat: Cesium.PolylineColorAppearance.VERTEX_FORMAT

                }),

                attributes: {

                    color: Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.fromCssColorString(color).withAlpha(opacity))

                },

                id

            }))

        }

    }

    if (callback) callback(curveCollection)

    // 增加线集合到场景中
    viewer.scene.primitives.add(new Cesium.Primitive({

        geometryInstances: curveCollection.instances,

        appearance: new Cesium.PolylineColorAppearance()

    }))

}


`,y=` // npm i supercluster 自行引入 Supercluster 类
import { Cesium, Supercluster, CesiumEditor, loadGaodeLayer, setViewerTheme } from '/three-editor/dist/cesium/index.js' 

// 使用封装类简化创建cesium代码
const { viewer } = new CesiumEditor({ DOM: document.getElementById('box'), viewerParams: { baseLayer: false } })

loadGaodeLayer(viewer) // 简化后的的加载高德地图

setViewerTheme(viewer) // 简化后的设置主题

viewer.camera.setView({ destination: Cesium.Cartesian3.fromDegrees(116.3974, 39.9093, 18000000) }) // 设置视角

const citys = await fetch('/three-editor/dist/files/other/city.json').then(res => res.json()) // 获取城市数据

const points = Object.values(citys).map((val, k) => ({ type: 'Feature', pid: k + '-' + val[0] + '-' + val[1], geometry: { coordinates: val } }))

// 建立聚合
setClusterCollection(viewer, points, (billboards, data) => {

    const [longitude, latitude] = data.geometry.coordinates

    const { pid } = data

    billboards.add({

        position: Cesium.Cartesian3.fromDegrees(longitude, latitude),

        image: '/three-editor/dist/site.png', // 你的图片路径

        scale: 0.05,

        eyeOffset: new Cesium.Cartesian3(0, 0, 150), // 偏移高度

        id: pid

    })

})

/* 聚合方法 */
function setClusterCollection(viewer, points, callback = () => { }, options = {}) {

    // 创建聚合
    const supercluster = new Supercluster({ radius: 40, extent: 512, minZoom: 0, maxZoom: 16, ...options }) // 密集程度 radius, 切片大小 extent, 最小层级 minZoom, 最大层级 maxZoom

    supercluster.load(points)

    // 初始化聚合
    const clusters = supercluster.getClusters([-180, -85, 180, 85], 2)

    // 获取当前视角的边界
    const getBounds = () => {

        const bbox = viewer.camera.computeViewRectangle()

        return [bbox.west, bbox.south, bbox.east, bbox.north].map(i => Cesium.Math.toDegrees(i))  // minx, miny, maxx, maxy westLng, southLat, eastLng, northLat

    }

    // 获取当前视角的层级
    const getLevel = () => {

        var tileRender = viewer.scene.globe._surface._tilesToRender;

        if (tileRender && tileRender.length > 0) {

            return tileRender[0]._level

        }

    }

    // 创建billboard集合对象
    const billboards = viewer.scene.primitives.add(new Cesium.BillboardCollection())

    const setBillboards = arr => arr.forEach((cluster) => {

        let returnCluster = cluster

        // 判断聚合点
        if (cluster?.properties?.cluster) {

            const clusterId = cluster.properties.cluster_id

            const clusterCoordinates = cluster.geometry.coordinates

            const leaves = supercluster.getLeaves(clusterId, Infinity, 0)

            // 初始化最小距离和最接近的点
            let minDistance = Infinity

            let closestPoint = null

            // 遍历所有原始点
            for (const leaf of leaves) {

                // 计算原始点与聚合点的距离
                const leafCoordinates = leaf.geometry.coordinates

                const distance = Cesium.Cartesian3.distance(

                    Cesium.Cartesian3.fromDegrees(...clusterCoordinates),

                    Cesium.Cartesian3.fromDegrees(...leafCoordinates)

                )

                // 如果这个距离小于当前的最小距离，更新最小距离和最接近的点
                if (distance < minDistance) {

                    minDistance = distance

                    closestPoint = leaf

                }

            }

            returnCluster = closestPoint

        }

        callback(billboards, returnCluster)

    })

    setBillboards(clusters)

    // 动态更新聚合
    viewer.camera.changed.addEventListener(function () {

        const level = getLevel()

        if (!level) return

        const clusters = supercluster.getClusters(getBounds(), level);

        billboards.removeAll()

        setBillboards(clusters)

    })

    return supercluster

}

`,f=`import { Cesium, CesiumEditor, loadGaodeLayer, setViewerTheme } from '/three-editor/dist/cesium/index.js'

// 使用封装类简化创建cesium代码
const { viewer } = new CesiumEditor({ DOM: document.getElementById('box'), viewerParams: { baseLayer: false } })

loadGaodeLayer(viewer) // 简化后的的加载高德地图

setViewerTheme(viewer) // 简化后的设置主题

viewer.camera.flyTo({ destination: Cesium.Cartesian3.fromDegrees(116.46, 39.92, 8000000) }) // 设置相机位置

const citys = await fetch('/three-editor/dist/files/other/city.json').then(res => res.json()) // 获取城市数据

const updateCanvasText = createCanvasText({ dpr: 1.4 }) // 创建canvas

const billboards = new Cesium.BillboardCollection() // 创建合集

viewer.scene.primitives.add(billboards) // 添加图层

const getColor = () => '#' + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0') // 随机颜色

for (const key in citys) {

    const [longitude, latitude] = citys[key]

    billboards.add({

        position: Cesium.Cartesian3.fromDegrees(longitude, latitude),

        image: updateCanvasText({ text: key, color: getColor() }),

        scale: 0.5
        
    })
    
}

// 创建canvas文字方法
function createCanvasText(params) {

    const defaultParams = { dpr: 1, maxWidth: 100, fontSize: 20, color: 'white', fontFamily: 'serif', align: 'center', border: false, ...params } // 默认参数

    const { dpr, border, maxWidth, fontSize, align } = defaultParams

    const devicePixelRatio = window.devicePixelRatio * dpr

    // 准备 cnvas
    const canvas = document.createElement('canvas')

    canvas.width = maxWidth * devicePixelRatio

    canvas.height = fontSize * devicePixelRatio

    // 获取 2d 上下文
    const ctx = canvas.getContext('2d')

    ctx.imageSmoothingQuality = 'high'

    ctx.scale(devicePixelRatio, devicePixelRatio)

    // 创建边框
    function createBorder() {

        ctx.strokeStyle = '#fff'

        // 创建宽度为10px的边框
        ctx.lineWidth = 1 * devicePixelRatio;

        ctx.strokeRect(

            ctx.lineWidth / 2,

            ctx.lineWidth / 2,

            canvas.width / devicePixelRatio - ctx.lineWidth,

            canvas.height / devicePixelRatio - ctx.lineWidth

        )

    }

    // 创建文字
    const createText = ({ text, color, fontSize, fontFamily }) => {

        // 参数设定
        ctx.fillStyle = color || defaultParams.color

        ctx.font = fontSize || defaultParams.fontSize + 'px ' + fontFamily || defaultParams.fontFamily

        // 文本长度计算
        let textMaxNum = 0

        let totalWidth = 0

        for (let i = 0; i < text.length; i++) {

            const metrics = ctx.measureText(text[i])

            totalWidth += metrics.width;

            if (totalWidth > maxWidth) break

            textMaxNum++

        }

        text = text.slice(0, textMaxNum)

        // 文字 绘制
        const metrics = ctx.measureText(text) // 文本尺寸

        const actualHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent // 实际文字高度

        const textFillHeight = (canvas.height / devicePixelRatio - actualHeight) / 2 + metrics.actualBoundingBoxAscent

        let textLeftOffset = 0

        if (align === 'center') textLeftOffset = (canvas.width / devicePixelRatio - metrics.width) / 2

        ctx.fillText(text, textLeftOffset, textFillHeight, canvas.width / devicePixelRatio)

    }

    return (parameters) => {

        ctx.clearRect(0, 0, canvas.width, canvas.height)  // 清空  canvas 文字 

        if (border) createBorder() // 创建边框

        createText(parameters) // 创建文字

        return canvas.toDataURL()

    }

}
`,T=`import { Cesium, CesiumEditor, loadGaodeLayer, setViewerTheme, setCesiumHeatmap } from '/three-editor/dist/cesium/index.js'

// 使用封装类简化创建cesium代码
const { viewer } = new CesiumEditor({ DOM: document.getElementById('box'), viewerParams: { baseLayer: false } })

loadGaodeLayer(viewer) // 简化后的的加载高德地图

setViewerTheme(viewer) // 简化后的设置主题

// 模拟数值
const points = new Array(50).fill('').map(() => {

    return {

        x: 116.46 + Math.random() * 10,

        y: 39.92 + Math.random() * 10,

        value: Math.random()

    }
    
})

// 创建热力图
new setCesiumHeatmap(viewer, {

    points,

    viewToLayer: true, 

    heatmapDataOptions: { max: 1, min: 0 },

    heatmapOptions: {

        radius: 100,

        maxOpacity: 0.5,

        minOpacity: 0

    }

})

`,L=`import { Cesium, CesiumEditor, EchartsLayer, loadGaodeLayer, setViewerTheme } from '/three-editor/dist/cesium/index.js'

// 使用封装类简化创建cesium代码
const { viewer } = new CesiumEditor({ DOM: document.getElementById('box'), viewerParams: { baseLayer: false } })

loadGaodeLayer(viewer) // 简化后的的加载高德地图

setViewerTheme(viewer) // 简化后的设置主题

// 看向中国
viewer.camera.flyTo({ destination: Cesium.Cartesian3.fromDegrees(104.07, 30.67, 4000000) })

// 创建echarts 飞线
const echartsLayer = new EchartsLayer(viewer, {

    animation: false,

    GLMap: {},

    series: [
        {
            type: 'lines',
            coordinateSystem: 'GLMap',
            zlevel: 2,
            effect: { show: true, period: 6, trailLength: 0.1, symbol: 'arrow', symbolSize: 5 },
            lineStyle: { normal: { color: '#60ff44', width: 1, opacity: 0.4, curveness: 0.2 } },
            data: [{ fromName: '北京', toName: '无锡', coords: [[116.4551, 40.2539], [120.3442, 31.5527],], }, { fromName: '上海', toName: '无锡', coords: [[121.4648, 31.2891], [120.3442, 31.5527],], }, { fromName: '广州', toName: '无锡', coords: [[113.5107, 23.2196], [120.3442, 31.5527],], }, { fromName: '大连', toName: '无锡', coords: [[122.2229, 39.4409], [120.3442, 31.5527],], }, { fromName: '青岛', toName: '无锡', coords: [[120.4651, 36.3373], [120.3442, 31.5527],], }, { fromName: '石家庄', toName: '无锡', coords: [[114.4995, 38.1006], [120.3442, 31.5527],], }, { fromName: '南昌', toName: '无锡', coords: [[116.0046, 28.6633], [120.3442, 31.5527],], }, { fromName: '合肥', toName: '无锡', coords: [[117.29, 32.0581], [120.3442, 31.5527],], }, { fromName: '呼和浩特', toName: '无锡', coords: [[111.4124, 40.4901], [120.3442, 31.5527],], }, { fromName: '宿州', toName: '无锡', coords: [[117.5535, 33.7775], [120.3442, 31.5527],], }, { fromName: '曲阜', toName: '无锡', coords: [[117.323, 35.8926], [120.3442, 31.5527],], }, { fromName: '杭州', toName: '无锡', coords: [[119.5313, 29.8773], [120.3442, 31.5527],], }, { fromName: '武汉', toName: '无锡', coords: [[114.3896, 30.6628], [120.3442, 31.5527],], }, { fromName: '深圳', toName: '无锡', coords: [[114.5435, 22.5439], [120.3442, 31.5527],], }, { fromName: '珠海', toName: '无锡', coords: [[113.7305, 22.1155], [120.3442, 31.5527],], }, { fromName: '福州', toName: '无锡', coords: [[119.4543, 25.9222], [120.3442, 31.5527],], }, { fromName: '西安', toName: '无锡', coords: [[109.1162, 34.2004], [120.3442, 31.5527],], }, { fromName: '赣州', toName: '无锡', coords: [[116.0046, 25.6633], [120.3442, 31.5527],], },],
        },
        {
            type: 'effectScatter',
            coordinateSystem: 'GLMap',
            zlevel: 2,
            rippleEffect: { brushType: 'stroke' },
            label: { normal: { show: true, position: 'right', formatter: '{b}' } },
            itemStyle: { normal: { color: '#60ff44' } },
            data: [{ name: '北京', value: [116.4551, 40.2539, 100] }, { name: '上海', value: [121.4648, 31.2891, 30] }, { name: '广州', value: [113.5107, 23.2196, 20] }, { name: '大连', value: [122.2229, 39.4409, 10] }, { name: '青岛', value: [120.4651, 36.3373, 20] }, { name: '石家庄', value: [114.4995, 38.1006, 20] }, { name: '南昌', value: [116.0046, 28.6633, 10] }, { name: '合肥', value: [117.29, 32.0581, 30] }, { name: '呼和浩特', value: [111.4124, 40.4901, 10] }, { name: '宿州', value: [117.5535, 33.7775, 10] }, { name: '曲阜', value: [117.323, 35.8926, 10] }, { name: '杭州', value: [119.5313, 29.8773, 10] }, { name: '武汉', value: [114.3896, 30.6628, 10] }, { name: '深圳', value: [114.5435, 22.5439, 10] }, { name: '珠海', value: [113.7305, 22.1155, 10] }, { name: '福州', value: [119.4543, 25.9222, 20] }, { name: '西安', value: [109.1162, 34.2004, 60] }, { name: '赣州', value: [116.0046, 25.6633, 10] },],
        },
    ],

})

// 点击事件
echartsLayer._chart.on('click', params => {

    alert(params.data.name)

})

window.onresize = () => echartsLayer.resize() // 监听窗口变化

`,v=`import { Cesium, CesiumEditor, loadGaodeLayer, setViewerTheme } from '/three-editor/dist/cesium/index.js'

// 使用封装类简化创建cesium代码
const { viewer } = new CesiumEditor({ DOM: document.getElementById('box'), viewerParams: { baseLayer: false } })

loadGaodeLayer(viewer) // 简化后的的加载高德地图

setViewerTheme(viewer) // 简化后的设置主题

// 创建2dDOM
const DOM = document.createElement('div')

// 样式 
Object.assign(DOM.style, {

    width: '100px',

    height: '30px',
    
    border: '1px solid blue',

    color: 'white',

    fontSize: '20px',

    cursor: 'pointer'

})

DOM.innerHTML = '2dDOM'

setCss2dDom(viewer, DOM, [116.46, 39.92, 0]) // 设置2dDOM 移动

viewer.entities.add({ position: Cesium.Cartesian3.fromDegrees(116.46, 39.92), point: { pixelSize: 10 } }) // 创建测试点

viewer.camera.flyTo({ destination: Cesium.Cartesian3.fromDegrees(116.46, 39.92, 10000000) }) // 定位

/* 设置2dDOM 移动 */
function setCss2dDom(viewer, DOM, position) {

    if (!position) return

    if (!(position instanceof Cesium.Cartesian3))  position = Cesium.Cartesian3.fromDegrees(...position)

    Object.assign(DOM.style, {

        pointerEvents: 'all',

        zIndex: 'auto',

    })

    const { offsetHeight } = DOM

    const { camera, scene } = viewer

    viewer.css2dContainer.appendChild(DOM)

    const destroy = viewer.scene.postRender.addEventListener(() => {

        const windowCoord = Cesium.SceneTransforms.wgs84ToWindowCoordinates(viewer.scene, position)

        if (windowCoord) {

            DOM.style.transform = \`translate(\${windowCoord.x}px, \${windowCoord.y - offsetHeight}px)\`

        }

        const maxDistance = scene.globe.ellipsoid.cartesianToCartographic(camera.position).height + scene.globe.ellipsoid.maximumRadius

        Cesium.Cartesian3.distance(camera.position, position) > maxDistance ? DOM.style.display = 'none' : DOM.style.display = 'block'

    })

    return () => {

        viewer.css2dContainer.removeChild(DOM)

        destroy()

    }

}

`,H=`import { Cesium, CesiumEditor, loadGaodeLayer, setViewerTheme } from '/three-editor/dist/cesium/index.js'

// 使用封装类简化创建cesium代码
const { viewer } = new CesiumEditor({ DOM: document.getElementById('box'), viewerParams: { baseLayer: false } })

loadGaodeLayer(viewer) // 简化后的的加载高德地图

setViewerTheme(viewer) // 简化后的设置主题

// 加载geojson数据
const dataSource = setGeoPolygon(viewer, '/three-editor/dist/files/font/guangdong.json')

// 看向geojson数据
viewer.flyTo(dataSource)

// 点击变色
viewer.screenSpaceEventHandler.setInputAction((event) => {

    const pickedObject = viewer.scene.pick(event.position)

    if (Cesium.defined(pickedObject) && pickedObject.id) {

        pickedObject.id.polygon.material = Cesium.Color.fromCssColorString('yellow').withAlpha(0.5)

    }

}, Cesium.ScreenSpaceEventType.LEFT_CLICK)

// 创建 面
async function setGeoPolygon(viewer, source, params = {}) {

    const dataSource = await Cesium.GeoJsonDataSource.load(source, {

        stroke: Cesium.Color.fromCssColorString(params.strokeColor || 'red').withAlpha(params.strokeOpacity || 0.5), // 边界

        fill: Cesium.Color.fromCssColorString(params.fillColor || 'blue').withAlpha(params.fillOpacity || 0.5), // 填充

        strokeWidth: params.strokeWidth || 3,

        markerSymbol: '?',

        ...params

    })

    dataSource.changeMaterial = (params) => dataSource.entities.values.forEach(entity => {

        entity.polygon.material = Cesium.Color.fromCssColorString(params.fillColor || 'blue').withAlpha(params.fillOpacity || 0.5)

        entity.polygon.outlineColor = Cesium.Color.fromCssColorString(params.strokeColor || 'red').withAlpha(params.strokeOpacity || 0.5)

        entity.polygon.outlineWidth = params.strokeWidth || 3

    })

    viewer.dataSources.add(dataSource)

    return dataSource

}

`,P=[{name:"图层",key:"layer",children:[{name:"创建cesium",key:"defaultLayer",code:w,image:new URL("data:image/jpeg;base64,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",import.meta.url).href,meta:{title:"cesium初始化",keywords:"cesium, cesium初始化",description:"cesium初始化"}},{name:"高德地图",key:"gaodeLayer",code:C,image:new URL("data:image/jpeg;base64,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",import.meta.url).href,meta:{title:"高德地图",keywords:"cesium, 高德地图",description:"加载高德地图"}},{name:"百度地图",key:"baiduLayer",code:u,image:new URL("data:image/jpeg;base64,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",import.meta.url).href,meta:{title:"百度地图",keywords:"cesium, 百度地图",description:"加载百度地图"}},{name:"天地图",key:"tiandituLayer",code:I,image:new URL("data:image/jpeg;base64,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",import.meta.url).href,meta:{title:"天地图",keywords:"cesium, 天地图",description:"加载天地图"}},{name:"arcgis地图",key:"arcgisLayer",code:M,image:new URL("data:image/jpeg;base64,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",import.meta.url).href,meta:{title:"arcgis地图",keywords:"cesium, arcgis地图",description:"加载arcgis地图"}},{name:"地形",key:"terrainLayer",code:x,image:new URL("data:image/jpeg;base64,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",import.meta.url).href,meta:{title:"地形",keywords:"cesium, 地形",description:"加载地形"}},{name:"地图滤镜-高德",key:"mapfilterLayer",code:F,image:new URL("data:image/jpeg;base64,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",import.meta.url).href,meta:{title:"地图滤镜",keywords:"高德, 地图滤镜",description:"高德地图滤镜"}}]},{name:"功能",key:"basic",children:[{name:"点击事件",key:"clickEvent",code:D,image:new URL("data:image/jpeg;base64,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",import.meta.url).href,meta:{title:"cesium点击事件",keywords:"cesium, 点击事件",description:"点击事件"}},{name:"GeoJson面",key:"geojsonFace",code:H,image:new URL("data:image/jpeg;base64,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",import.meta.url).href,meta:{title:"cesium GeoJson 区域面",keywords:"地图, geoJson",description:"通过cesium geoJson 生成区域"}},{name:"大量点",key:"multPoint",code:R,image:new URL("data:image/jpeg;base64,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",import.meta.url).href,meta:{title:"cesium大量点",keywords:"地图, 大量点, 经纬度点",description:"通过cesium 在地图上生成大量点"}},{name:"大量面线",key:"multFaceLine",code:p,image:new URL("data:image/jpeg;base64,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",import.meta.url).href,meta:{title:"cesium大量面线",keywords:"地图, 大量面,线",description:"通过cesium 在地图上生成大量面线"}},{name:"大量曲线",key:"multCurve",code:U,image:new URL("data:image/jpeg;base64,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",import.meta.url).href,meta:{title:"cesium大量曲线",keywords:"地图, 大量曲线",description:"通过cesium 在地图上生成大量曲线"}},{name:"大量点聚合",key:"multPointCluster",code:y,image:new URL("data:image/jpeg;base64,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",import.meta.url).href,meta:{title:"cesium大量点聚合",keywords:"地图, 大量点聚合",description:"通过cesium 在地图上生成大量点聚合"}},{name:"大量文字",key:"multText",code:f,image:new URL("data:image/jpeg;base64,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",import.meta.url).href,meta:{title:"cesium大量文字",keywords:"地图, 大量文字",description:"通过cesium 在地图上生成大量文字"}},{name:"热力图",key:"heatMap",code:T,image:new URL("data:image/jpeg;base64,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",import.meta.url).href,meta:{title:"cesium热力图",keywords:"地图, 热力图",description:"通过cesium 在地图上生成热力图"}},{name:"echarts结合飞线",key:"flyCharts",code:L,image:new URL("data:image/jpeg;base64,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",import.meta.url).href,meta:{title:"cesium echarts结合飞线",keywords:"地图, echarts, 飞线",description:"通过cesium 在地图上生成echarts结合飞线"}},{name:"Css 2D弹窗",key:"css2dEelement",code:v,image:new URL("data:image/jpeg;base64,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",import.meta.url).href,meta:{title:"cesium 2d元素",keywords:"地图, 2d元素",description:"通过cesium 在地图上生成css2dEelement"}}]}];export{P as C,Y as T,W as a};
