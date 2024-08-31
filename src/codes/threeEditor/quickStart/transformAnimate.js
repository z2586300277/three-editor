export default

    `import { ThreeEditor, gsap } from 'three-editor-cores'

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
loaderService.complete = group => {

    group.scale.set(0.01, 0.01, 0.01) 

    animate(group) // 动画

}

// 环境光
threeEditor.setLight('AmbientLight', { color: 0xffffff, intensity: 6 })

// 窗口大小变化
window.onresize = () => threeEditor.renderSceneResize() 

// 动画
function animate(mesh) {

    const position = mesh.position.clone()
    
    position.y += 50 // 位置向上移动100

    const rotation = mesh.rotation.clone()

    rotation.y += Math.PI / 4 // 旋转45度

    const scale = mesh.scale.clone()
    
    scale.z *= 2 // 缩放z轴2倍

    scale.x *= 2 // 缩放x轴2倍

    // 组合参数
    const transformInfo_ = { position, rotation, scale } 

    // 执行
    const promises_gsap = ['position', 'rotation', 'scale'].map(i => {

        return new Promise(resolve => {
    
            gsap.to(mesh[i], {
    
                x: transformInfo_[i].x,
    
                y: transformInfo_[i].y,
    
                z: transformInfo_[i].z,
    
                //间隔时间
                duration: 3,
    
                //动画参数名
                ease: 'none',
    
                //重复次数
                repeat: 0,
    
                //往返移动
                yoyo: false,
    
                yoyoEase: true,
    
                onComplete: resolve
    
            })
    
        })
    
    })
    
    Promise.all(promises_gsap).then(() => console.log('动画完成'))

}
`

