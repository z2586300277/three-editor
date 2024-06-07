import{_ as P,C as B,f as C,i as L,r as j,o as s,c as l,b as o,e as m,w as c,u as I,F as p,a as u,d as R,t as f,l as F,n as M,p as D,g as G,h as O}from"./index-CxjmQ3CK.js";const $=`import { ThreeEditor } from '/three-editor/dist/js/index.js'

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
`,U=`import { ThreeEditor } from '/three-editor/dist/js/index.js'

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
`,q=`import { ThreeEditor } from '/three-editor/dist/js/index.js'

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
`,A=`import { ThreeEditor } from '/three-editor/dist/js/index.js'

ThreeEditor.dracoPath = '/three-editor/dist/draco/' // draco 路径地址

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
`,J=`import { ThreeEditor } from '/three-editor/dist/js/index.js'

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

    type: 'OBJ', // 模型类型

    url: 'https://z2586300277.github.io/three-editor/dist/files/other/obj/house.obj' // 模型地址

})

threeEditor.setLight() // 快速创建一个基础环境光

window.onresize = () => threeEditor.renderSceneResize() // 窗口大小变化
`;function n(a){return new URL(a,import.meta.url).href}const N=[{name:"快速开始",key:"quickStart",children:[{name:"创建场景",key:"createEditor",code:$,image:n("./quickStart/createEditor.jpg")},{name:"加载参数",key:"loadParams",code:U,image:n("./quickStart/loadParams.jpg")}]},{name:"模型加载",key:"loadModel",children:[{name:"加载GLTF模型",key:"loadGltf",code:q,image:n("./loadModel/loadGltf.jpg")},{name:"加载FBX模型",key:"loadFbx",code:A,image:n("./loadModel/loadFbx.jpg")},{name:"加载OBJ模型",key:"loadObj",code:J,image:n("./loadModel/loadObj.jpg")}]}];var V={doc:"https://z2586300277.github.io/three-editor/docs/dist/",example:"https://z2586300277.github.io/three-editor/dist/#/example",editor:"https://z2586300277.github.io/three-editor/dist/#/editor",github:"https://z2586300277/three-editor",author:"https://github.com/z2586300277"};const k=a=>(D("data-v-4a91d5e8"),a=a(),G(),a),X={class:"main"},H={class:"top"},K=k(()=>o("img",{class:"logo",src:O,alt:"logo",width:"36px",height:"36px"},null,-1)),Q=k(()=>o("div",{class:"top-title-text"},"3D Examples",-1)),W=[K,Q],Y={class:"center"},Z={class:"nav"},ee={class:"examples"},te={class:"examples-item"},oe=["onClick"],re=["src"],ie={__name:"example",setup(a){const S=B(),T=e=>window.open(V[e]),d=C({exampleList:[],activeList:[]}),g=[{name:"Three-Editor案例",path:"threeEditor",list:N},{name:"Three.js案例",path:"threejs",list:[]},{name:"Cesium.js案例",path:"cesiumjs",list:[]}],_=e=>{d.exampleList=g.find(r=>r.path===e).list,localStorage.setItem("example_path",e),h(0)},x=L(0),h=e=>{var r;d.activeList=(r=d.exampleList[e])==null?void 0:r.children,x.value=e,localStorage.setItem("example_active",e)},y=e=>{const r=S.resolve({name:"codeMirror"}).href;localStorage.setItem("viewCode",e.code),window.open(`${r}`)},E=localStorage.getItem("example_path")||"threeEditor",z=localStorage.getItem("example_active")||0;return _(E),h(z),(e,r)=>{const w=j("el-menu-item"),v=j("el-menu");return s(),l("div",X,[o("div",H,[o("div",{class:"top-title",onClick:r[0]||(r[0]=t=>T("author"))},W),m(v,{class:"menu",style:{border:"none"},"default-active":I(E),mode:"horizontal",ellipsis:!1,"active-text-color":"#fff","text-color":"#fff","default-openeds":["0"]},{default:c(()=>[(s(),l(p,null,u(g,(t,i)=>m(w,{key:i,index:String(t.path),onClick:b=>_(t.path)},{default:c(()=>[R(f(t.name),1)]),_:2},1032,["index","onClick"])),64))]),_:1},8,["default-active"])]),o("div",Y,[o("div",Z,[m(v,{class:"menu",style:{border:"none"},"default-active":"0",ellipsis:!1,"text-color":"#fff","active-text-color":"#71a5ee"},{default:c(()=>[(s(!0),l(p,null,u(d.exampleList,(t,i)=>(s(),F(w,{class:M({menuItem:i==x.value}),key:i,index:String(i),onClick:b=>h(i,t)},{default:c(()=>[R(f(t.name),1)]),_:2},1032,["class","index","onClick"]))),128))]),_:1})]),o("div",ee,[(s(!0),l(p,null,u(d.activeList,(t,i)=>(s(),l("div",te,[o("div",{class:"box",onClick:b=>y(t)},[o("img",{src:t.image},null,8,re),o("div",null,f(t.name),1)],8,oe)]))),256))])])])}}},se=P(ie,[["__scopeId","data-v-4a91d5e8"]]);export{se as default};
