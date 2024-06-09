---
outline: deep
---

# 创建一个场景

```md
<script>
    
const container =  document.querySelector('#threeBox')

const initParams = {

    fps: null, // 最大帧率

    pixelRatio: window.devicePixelRatio, //像素比

    webglRenderParams: { antialias: true, alpha: true, logarithmicDepthBuffer: true } // 抗锯齿等

}

const sceneParams = null // 或保存得场景参数

const threeEditor = new ThreeEditor(containor, initParams, sceneParams)

</script>
```

<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()
</script>


### 通用引入形式 API 或 对象

- 使用方式 import { API } from '源'

```js

/**
 * 创建mesh 对象
 * 
 * 参数一 几何 默认值 { type: '平面', parameters: 对应几何体的参数对象 }
 * 
 * 参数二 材质 默认值 { type: '基础材质', parameters: 对应材质的参数对象 }
 * 
 * 参数三 贴图 默认值 { type: '图片', url: '路径' } 
 */

createMesh({ type: '平面', parameters: { width: 20 } }, { type: '基础材质' })

createMesh({ parameters: { width: 10 } }, { parameters: { color: 'red' } })

createMesh({ type: '平面' }, undefined, { url: '' })

/**
 * 补间动画 例如: 对camera.position 视角补间 , controls.target 视角中心补间
 * 
 * vector3 旧的三维向量, vector3_ 更改后的三维向量 可以是对象 { x: 0, y: 0, z: 0 }
 * 
 * gsapQuery { duration: 3, ease: 'none', repeat: 0, yoyo: false ， onUpdate: () => {}, onComplete: () =>{} }
 * 
 * duration 动画时间
 * 
 * ease 缓动函数
 * 
 * repeat 重复次数
 * 
 * yoyo 往返播放
 * 
 * onUpdate 动画更新回调
 * 
 * onComplete 动画完成回调
 * 
 * return gsapControl 动画对象 用于控制动画 gsapControl.pause() gsapControl.play() gsapControl.kill()
*/

createGsapAnimation(vector3, vector3_, gsapQuery)

/**
 * 克隆材质将object 所有材质克隆到自身
 * 
 * mesh.originMaterial 为自身
 */

cloneObjectMaterial(cloneObjectMaterial)

```

### threeEditor 核心属性 与 方法API

- 核心属性 GUI-控板 scene camera controls renderer stats-性能 handler-操作 modelCore-模型核心 drawCore-绘制核心 chartsMapCore-地图核心 ...

```js

threeEditor.openControlPanel()  // 打开控制板

threeEditor.saveSceneEdit() // 返回场景编辑参数

threeEditor.renderSceneResize() // 窗口改变大小调用

threeEditor.resetEditorStorage(sceneParams) //根据参数重置场景

threeEditor.destroySceneRender() // 场景销毁调用

threeEditor.shaderLibrary:Object // 场景对应的着色器列表对象

/**
 * type = '类型' parameters = '对应光源参数'
 * 
 * 设置光源
 */

threeEditor.setLight('PointLight')

/**
 * 设置对象混合着色
 * 
 * 参数 object, shaderProgramsCodeName = '水波纹', uvType = 'material'
 */

const mesh = createMesh({ type: '平面' }, { parameters: { color: '#ffffff' } });

['水波纹', '彩虹光', '火焰燃烧', '晶片着色'].forEach((i, k) => setTimeout(() => threeEditor.setObjectBlendShader(mesh, i), k * 1000))

/**
 * e DOM click/dblclick/mousemove/mouseup/mousedown 事件  
 * 
 * info 返回点击相关信息
 */

threeEditor.getSceneEvent(e, (info) => ())

/**
 * 原生未处理事件 
 * 
 * return { raycaster, getIntersects }
 * 
 * getIntersects(e, list) e为鼠标事件  list 需要射线检测的列表
 */

threeEditor.getRawSceneEvent()

/**
 * 场景截图
 * 
 * 例 params = ['image/jpeg', 0.9]  => toDataURL(...params) 
 */

threeEditor.getSceneEditorImage(params)

/**
 * 设置轮廓光选中
 * 
 * model 模型对象 数组形式
 * 
 * 清空传 []
 */

threeEditor.setOutlinePass([model])

/**
 * 设置二维DOM 元素
 * 
 * DOM 传入的dom元素
 * 
 * point 传入的坐标点
 * 
 * return mesh  属性 destroy() 销毁方法  更新重新调用 setCss2dDOM
 * 
 * 注：移除事件 生成完毕 => dom.style.pointerEvents = 'none'
 */

const mesh = threeEditor.setCss2dDOM(document.querySelector('#your_dom'),point) 

mesh.destroy() 

/**
 * 设置三维DOM 元素
 * 
 * DOM 传入的dom元素
 * 
 * point 传入的坐标点
 * 
 * return mesh  属性 destroy() 销毁方法  更新重新调用 setCss3dDOM
 * 
 * 注：移除事件 生成完毕 => dom.style.pointerEvents = 'none'
 */
 
const mesh = threeEditor.setCss3dDOM(document.querySelector('#your_dom'),point)

mesh.destroy()

/**
 * 根据参数播放模型动画
 *  
 * 参数 mesh => 加载的模型对象  模型如果存在动画 则mesh 会携带以下属性
 * 
 * animations => 模型动画列表
 * 
 * animationPlayParams => 模型动画播放参数 与GUI一致 修改会进行保存 如下 可自行修改
 * 
 * { initPlay: false, speed: 0.5, actionIndexs: [animations.length], startTime: 0, loop: true, frameCallback: () => { } }
 * 
 * initPlay 是否初始化播放 speed 播放速度 actionIndexs: [需要播放得动画 bool] startTime 播放开始时间 loop 是否循环播放 frameCallback 每一帧回调
 * 
 * return { mixer: 播放器, actions:播放列表 }   暂停/继续 actions.forEach(i => i.paused = !i.paused)  停止:i.stop()  播放:i.play() 
 */

const model = threeEditor.currentInfo?.currentRootModel

const _actions = Math.random() > 0.5 ? [1, 3, 5, 7] : [2, 4, 6, 8]

model.animationPlayParams.actionIndexs.forEach((_, k, arr) => arr[k] = _actions.includes(k))

const { mixer, actions } = threeEditor.setModelAnimationPlay(model)

mixer.addEventListener('finished', (e) => console.log(123))

```

### 属性 stats

```js

stats.setOffset(top,left) //设置偏移量

```

### 属性 scene 与 scene API

```js

scene.setSceneBackground(urls) // 设置天空 urls 为天空盒6张图

scene.setEnvBackground(urls) // 设置环境贴图 同上

```

### 下挂属性 handler 与 handler API

```js

handler.mode = '选项' //'选择', '根选择', '变换', '场景绘制', '点击信息'

handler.setHandlerOption(key, value) // key = grid || axes || openKey || stats  : value = true || false

```

### 下挂属性transformControls

```js

transformControls[key] = value // 设置控制器相关属性

transformControls.dragChangeCallback = (v) => {} // 控制器拖拽回调

```

### 模型核心 modelCore 与下挂API

```js

/**
 * 模型加载进度控制
 * 
 * loaderService = { progress, complete }
 */

modelCore.progressList.forEach(i => i.loaderService.progress = e => {}) 

/**
 * { type: 'GLTF/OBJ/GLB/FBX', url: 'HOST/yCar.glb' },
 *
 * 根据传参 插入模型
 * 
 * return { loaderService, type }
 */

const { loaderService, rootInfo } = threeEditor.modelCore.insertModel({ type: 'GLTF', url: 'HOST/yCar.glb' })

loaderService.progress = e => console.log(e) // 单一进度回调

loaderService.complete = (model) => console.log('加载完成') // 单一加载完成回调

```

### 地图 chartsMapCore 与下挂API

```js

chartsMapCore.progressList // [promise] 列表 promise.then 返回地图对应的group 对象


