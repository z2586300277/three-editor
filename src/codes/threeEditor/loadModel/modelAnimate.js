export default

    `import { ThreeEditor, dat } from '/three-editor/dist/js/index.js'

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

`