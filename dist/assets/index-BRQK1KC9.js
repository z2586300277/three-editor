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
`,i=`import { ThreeEditor } from '/three-editor/dist/js/index.js'

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
`,r=`import { ThreeEditor } from '/three-editor/dist/js/index.js'

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
`,t=`import { ThreeEditor } from '/three-editor/dist/js/index.js'

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
`,m=[{name:"快速开始",key:"quickStart",children:[{name:"创建场景",key:"createEditor",code:A,image:new URL("data:image/jpeg;base64,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",import.meta.url).href,meta:{title:"使用three-editor",keywords:"three-editor使用",description:"使用three-editor创建一个场景"}},{name:"加载参数",key:"loadParams",code:e,image:new URL("data:image/jpeg;base64,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",import.meta.url).href,meta:{title:"三维地图",keywords:"three.js 地图",description:"基于three.js创建的三维可视化地图"}}]},{name:"模型加载",key:"loadModel",children:[{name:"加载GLTF模型",key:"loadGltf",code:i,image:new URL("data:image/jpeg;base64,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",import.meta.url).href,meta:{title:"加载GLTF模型",keywords:"three.js GLTF模型",description:"使用three.js加载GLTF模型"}},{name:"加载FBX模型",key:"loadFbx",code:r,image:new URL("data:image/jpeg;base64,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",import.meta.url).href,meta:{title:"加载FBX模型",keywords:"three.js FBX模型",description:"使用three.js加载FBX模型"}},{name:"加载OBJ模型",key:"loadObj",code:t,image:new URL("data:image/jpeg;base64,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",import.meta.url).href,meta:{title:"加载OBJ模型",keywords:"three.js OBJ模型",description:"使用three.js加载OBJ模型"}}]}],o=`
import { ThreeEditor, THREE, dat } from '/three-editor/dist/js/index.js'

/* 使用ThreeEditor 简化 three.js 初始化场景系列操作 */
const DOM = document.getElementById('box')

const threeEditor = new ThreeEditor( 
    
    DOM, // 容器

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

const { scene } = threeEditor

/* 立方体 */
const geometry = new THREE.BoxGeometry(4, 4, 4);

const material = new THREE.MeshBasicMaterial({ color: 0xffffff });

const mesh = new THREE.Mesh(geometry, material);

const ambientLight = new THREE.AmbientLight(0xffffff, 5);

scene.add(ambientLight);

scene.add(mesh);

// GUI 对象
const GUI = new dat.GUI()

const fileList = [

    '/three-editor/dist/glsl/0.frag',

    '/three-editor/dist/glsl/1.frag',

    '/three-editor/dist/glsl/2.frag',

    '/three-editor/dist/glsl/3.frag',

    '/three-editor/dist/glsl/4.frag',

    '/three-editor/dist/glsl/5.frag'

]

GUI.add({url: fileList[0]}, 'url', fileList).onChange((url) => changeShader(url))

changeShader(fileList[0])

let shader = null

animate()

/* 渲染 */
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

`,E=`
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
`,w=[{name:"着色器",key:"learnShader",children:[{name:"着色器切换",key:"changeShader",code:o,image:new URL("data:image/jpeg;base64,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",import.meta.url).href,meta:{title:"着色器切换",keywords:"three.js,着色器",description:"使用three.js创建的更换着色器"}},{name:"围栏着色器",key:"fenceShader",code:E,image:new URL("data:image/jpeg;base64,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",import.meta.url).href,meta:{title:"围栏着色器",keywords:"three.js 着色器,区域围栏着色器",description:"使用three.js创建的围栏着色器"}}]}],a=`import { Cesium } from '/three-editor/dist/cesium/index.js'

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

`,B=`import { Cesium, CesiumEditor } from '/three-editor/dist/cesium/index.js'

// 使用封装类简化创建cesium代码
const { viewer } = new CesiumEditor({ DOM: document.getElementById('box'), viewerParams: { baseLayer: false } })
 
viewer.imageryLayers.addImageryProvider(

    new Cesium.UrlTemplateImageryProvider({

        url: 'https://webrd02.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=2&style=8&x={x}&y={y}&z={z}',

        maximumLevel: 18

    })

)

`,Q=`import { Cesium, CesiumEditor } from '/three-editor/dist/cesium/index.js'

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

`,s=`import { Cesium, CesiumEditor } from '/three-editor/dist/cesium/index.js'

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

`,g=`import { Cesium, CesiumEditor } from '/three-editor/dist/cesium/index.js'

// 使用封装类简化创建cesium代码
const { viewer } = new CesiumEditor({ DOM: document.getElementById('box'), viewerParams: { baseLayer: false } })

const url = 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'
 
const layer = Cesium.ImageryLayer.fromProviderAsync(

    Cesium.ArcGisMapServerImageryProvider.fromUrl(url)

)

viewer.imageryLayers.add(layer)

`,l=`import { Cesium, CesiumEditor } from '/three-editor/dist/cesium/index.js'

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

`,n=`import { Cesium, CesiumEditor } from '/three-editor/dist/cesium/index.js'

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

`,h=[{name:"图层",key:"layer",children:[{name:"创建cesium",key:"defaultLayer",code:a,image:new URL("data:image/jpeg;base64,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",import.meta.url).href,meta:{title:"cesium初始化",keywords:"cesium, cesium初始化",description:"cesium初始化"}},{name:"高德地图",key:"gaodeLayer",code:B,image:new URL("data:image/jpeg;base64,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",import.meta.url).href,meta:{title:"高德地图",keywords:"cesium, 高德地图",description:"加载高德地图"}},{name:"百度地图",key:"baiduLayer",code:Q,image:new URL("data:image/jpeg;base64,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",import.meta.url).href,meta:{title:"百度地图",keywords:"cesium, 百度地图",description:"加载百度地图"}},{name:"天地图",key:"tiandituLayer",code:s,image:new URL("data:image/jpeg;base64,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",import.meta.url).href,meta:{title:"天地图",keywords:"cesium, 天地图",description:"加载天地图"}},{name:"arcgis地图",key:"arcgisLayer",code:g,image:new URL("data:image/jpeg;base64,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",import.meta.url).href,meta:{title:"arcgis地图",keywords:"cesium, arcgis地图",description:"加载arcgis地图"}},{name:"地形",key:"terrainLayer",code:l,image:new URL("data:image/jpeg;base64,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",import.meta.url).href,meta:{title:"地形",keywords:"cesium, 地形",description:"加载地形"}},{name:"地图滤镜-高德",key:"mapfilterLayer",code:n,image:new URL("data:image/jpeg;base64,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",import.meta.url).href,meta:{title:"地图滤镜",keywords:"高德, 地图滤镜",description:"高德地图滤镜"}}]}];export{h as C,m as T,w as a};
