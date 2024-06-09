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

const sceneParams = await fetch('https://z2586300277.github.io/three-editor/dist/files/editorJson/地图.json').then(res => res.json())

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
`,E=`import { ThreeEditor } from '/three-editor/dist/js/index.js'

ThreeEditor.dracoPath = '/three-editor/dist/draco/' // draco 路径地址

const threeEditor = new ThreeEditor( 
    
    document.getElementById('box'), // 容器

    {

        fps: null, // fps

        pixelRatio: window.devicePixelRatio * 1, // 像素比

        webglRenderParams: { antialias: true, alpha: true, logarithmicDepthBuffer: true }, // webgl 渲染参数

    }

)

threeEditor.modelCore.insertModel({

    type: 'GLTF', // 模型类型

    url: 'https://z2586300277.github.io/three-editor/dist/files/resource/car.glb' // 模型地址

})

threeEditor.setLight() // 快速创建一个基础环境光

window.onresize = () => threeEditor.renderSceneResize() // 窗口大小变化
`,o=`import { ThreeEditor } from '/three-editor/dist/js/index.js'

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
`,i=`import { ThreeEditor } from '/three-editor/dist/js/index.js'

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
`,r=[{name:"快速开始",key:"quickStart",children:[{name:"创建场景",key:"createEditor",code:A,image:new URL("data:image/jpeg;base64,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",import.meta.url).href,meta:{title:"使用three-editor",keywords:"three-editor使用",description:"使用three-editor创建一个场景"}},{name:"加载参数",key:"loadParams",code:e,image:new URL("data:image/jpeg;base64,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",import.meta.url).href,meta:{title:"三维地图",keywords:"three.js 地图",description:"基于three.js创建的三维可视化地图"}}]},{name:"模型加载",key:"loadModel",children:[{name:"加载GLTF模型",key:"loadGltf",code:E,image:new URL("data:image/jpeg;base64,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",import.meta.url).href,meta:{title:"加载GLTF模型",keywords:"three.js GLTF模型",description:"使用three.js加载GLTF模型"}},{name:"加载FBX模型",key:"loadFbx",code:o,image:new URL("data:image/jpeg;base64,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",import.meta.url).href,meta:{title:"加载FBX模型",keywords:"three.js FBX模型",description:"使用three.js加载FBX模型"}},{name:"加载OBJ模型",key:"loadObj",code:i,image:new URL("data:image/jpeg;base64,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",import.meta.url).href,meta:{title:"加载OBJ模型",keywords:"three.js OBJ模型",description:"使用three.js加载OBJ模型"}}]}],t=`
import { ThreeEditor, THREE } from '/three-editor/dist/js/index.js'

/* 使用ThreeEditor 简化 three.js 初始化场景系列操作 */
const threeEditor = new ThreeEditor( 
    
    document.getElementById('box'), // 容器

    {

        fps: null, // fps

        pixelRatio: window.devicePixelRatio * 1, // 像素比

        webglRenderParams: { 
            
            antialias: true,
            
            alpha: true,
            
            logarithmicDepthBuffer: true 
        
        }, // webgl 渲染参数

    }

)

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

    if (custMaterial1) {

        custMaterial1.uniforms.time.value += 0.03;

    }

    requestAnimationFrame(animate)

}
`,Q=[{name:"着色器",key:"learnShader",children:[{name:"围栏着色器",key:"fenceShader",code:t,image:new URL("data:image/jpeg;base64,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",import.meta.url).href,meta:{title:"围栏着色器",keywords:"three.js 着色器,区域围栏着色器",description:"使用three.js创建的围栏着色器"}}]}],B=`import { Cesium } from '/three-editor/dist/cesium/index.js'

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

`,a=[{name:"图层",key:"layer",children:[{name:"创建cesium",key:"defaultLayer",code:B,image:new URL("data:image/jpeg;base64,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",import.meta.url).href,meta:{title:"cesium初始化",keywords:"cesium, cesium初始化",description:"cesium初始化"}}]}];export{a as C,r as T,Q as a};
