# three-editor-cores 是什么？

three-editor-cores 是一个[基于three.js开发的内核](https://www.npmjs.com/package/three-editor-cores),专为构建快速构建three.js 3D 项目的一个低代码npm 库。

## 不要让three-editor-cores 对你产生学习成本
  - 为了节省学习成本，你可以只看这一节的使用, 其他使用方式可以拒绝了解。
  - 只了解以下步骤就好了, 然后尽情的去写three.js 相关的东西吧。
```js
// npm i three-editor-cores
imoprt { ThreeEditor, THREE } from 'three-editor-cores'

let sceneParams = JSON.parse(localStorage.getItem('sceneParams'))

//初始化并加载参数
const threeEditor = new ThreeEditor(document.querySelector('#threeBox'), { sceneParams }) 

// 这就是所有的内置功能 然后 手动去配置使用吧
threeEditor.openControlPanel() 

// 生成存储参数
sceneParams = threeEditor.saveSceneEdit() 

// 存储到浏览器
localStorage.setItem('sceneParams', sceneParams)

const { scene, camera, renderer, controls, transformControls, ... } =  threeEditor

...... 尽情的去书写three.js 原始功能吧

```

## 了解创作理念

- **集成Three.js各功能**

  three-editor-core使用最简,最优,性能最佳的的流程,将three.js各个通用功能模块集成了进去。

```js
/* 如用一句代码 */
const threeEditor = new ThreeEditor(document.querySelector('#threeBox'))

// 实际上已经为你进行了 three.js 一系列功能的搭建
const scene = new THREE.Scene() // 创建场景

const camera = new THREE.PerspectiveCamera() // 创建相机

const renderer = new THREE.WebGLRenderer() // 创建渲染器

const controls = new THREE.OrbitControls() // 创建轨道控制

const transformControls = new THREE.TransformControls() // 创建变换控制

const effectComposer = new THREE.EffectComposer() // 创建后期渲染

const css3DRender = new THREE.CSS3DRenderer() // 创建Css3D渲染

const css2DRender = new THREE.CSS2DRenderer() // 创建Css2D渲染
// ............等完成了一系列功能操作
```

- **不影响正常three.js使用和扩展**

  three-editor-cores 就是将最优的three.js搭建架构进行规整,然后封装成了一个类，它并不影响你对其使用three.js的一系列相关后续操作。

```js
// 你可以 通过解构方式取出,然后对其使用 Three.js 的操作毫无影响
const { scene, camera, renderer, controls, transformControls, ... } =  threeEditor

const { scene, camera, renderer, controls, transformControls } =  threeEditor

const box = new THREE.Mesh(new THREE.BoxGeometry(), new THREE.MeshBasicMaterial())

scene.add(box)

camera.position.copy(new THREE.Vector3(0, 0, 10))

renderer.setClearColor(0x000000)

controls.enableDamping = true

transformControls.attach(box)

```
- **添加了GUI控制面板，存储，还原，操作系列业务功能**

  - 内置了场景相关的业务线, 创建, 编辑 , 保存, 还原, 销毁, 切换。

  - 内置了场景中物体, 几何, 材质, 动画, 着色器等信息的存储逻辑。

  - 增加了可以开启的GUI调试面板，将所有可调式的功能放到了上面。

  - 内置多种操作业务模式，可进行位置形状编辑, 选中, 绘制 等多种模式。

```js
// 动态的创建一个不影响页面元素, 且包含所有内置的控制板
threeEditor.openControlPanel()  

// 返回场景编辑参数json new ThreeEditor 可进行传递加载配置的场景
threeEditor.saveSceneEdit() 

// 窗口改变大小调用
threeEditor.renderSceneResize() 

//根据参数重置场景
threeEditor.resetEditorStorage(sceneParams) 

// 场景销毁调用
threeEditor.destroySceneRender() 

```