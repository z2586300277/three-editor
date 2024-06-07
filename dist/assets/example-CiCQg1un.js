import{_ as Y,C as U,f as M,i as S,r as D,o as a,c as s,b as t,e as E,w as h,u as f,F as n,a as B,d as u,t as c,l as v,n as L,p as b,g as T,h as P}from"./index-HPA3s0L-.js";const G=`import { ThreeEditor } from '/three-editor/dist/js/index.js'

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
`,z=`import { ThreeEditor } from '/three-editor/dist/js/index.js'

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
`,y=`import { ThreeEditor } from '/three-editor/dist/js/index.js'

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
`,N=`import { ThreeEditor } from '/three-editor/dist/js/index.js'

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
`,H=[{name:"快速开始",key:"quickStart",children:[{name:"创建场景",key:"createEditor",code:G,image:new URL("data:image/jpeg;base64,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",import.meta.url).href},{name:"加载参数",key:"loadParams",code:z,image:new URL("/three-editor/dist/assets/loadParams-BzBprk3p.jpg",import.meta.url).href}]},{name:"模型加载",key:"loadModel",children:[{name:"加载GLTF模型",key:"loadGltf",code:q,image:new URL("data:image/jpeg;base64,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",import.meta.url).href},{name:"加载FBX模型",key:"loadFbx",code:y,image:new URL("/three-editor/dist/assets/loadFbx-fcgZiDBH.jpg",import.meta.url).href},{name:"加载OBJ模型",key:"loadObj",code:N,image:new URL("data:image/jpeg;base64,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",import.meta.url).href}]}];var J={doc:"https://z2586300277.github.io/three-editor/docs/dist/",example:"https://z2586300277.github.io/three-editor/dist/#/example",editor:"https://z2586300277.github.io/three-editor/dist/#/editor",github:"https://z2586300277/three-editor",author:"https://github.com/z2586300277"};const I=l=>(b("data-v-4a91d5e8"),l=l(),T(),l),K={class:"main"},Z={class:"top"},j=I(()=>t("img",{class:"logo",src:P,alt:"logo",width:"36px",height:"36px"},null,-1)),V=I(()=>t("div",{class:"top-title-text"},"3D Examples",-1)),O=[j,V],X={class:"center"},_={class:"nav"},$={class:"examples"},AA={class:"examples-item"},eA=["onClick"],tA=["src"],oA={__name:"example",setup(l){const R=U(),W=A=>window.open(J[A]),r=M({exampleList:[],activeList:[]}),Q=[{name:"Three-Editor案例",path:"threeEditor",list:H},{name:"Three.js案例",path:"threejs",list:[]},{name:"Cesium.js案例",path:"cesiumjs",list:[]}],m=A=>{r.exampleList=Q.find(o=>o.path===A).list,localStorage.setItem("example_path",A),d(0)},x=S(0),d=A=>{var o;r.activeList=(o=r.exampleList[A])==null?void 0:o.children,x.value=A,localStorage.setItem("example_active",A)},C=A=>{const o=R.resolve({name:"codeMirror"}).href;localStorage.setItem("viewCode",A.code),window.open(`${o}`)},w=localStorage.getItem("example_path")||"threeEditor",k=localStorage.getItem("example_active")||0;return m(w),d(k),(A,o)=>{const p=D("el-menu-item"),F=D("el-menu");return a(),s("div",K,[t("div",Z,[t("div",{class:"top-title",onClick:o[0]||(o[0]=e=>W("author"))},O),E(F,{class:"menu",style:{border:"none"},"default-active":f(w),mode:"horizontal",ellipsis:!1,"active-text-color":"#fff","text-color":"#fff","default-openeds":["0"]},{default:h(()=>[(a(),s(n,null,B(Q,(e,i)=>E(p,{key:i,index:String(e.path),onClick:g=>m(e.path)},{default:h(()=>[u(c(e.name),1)]),_:2},1032,["index","onClick"])),64))]),_:1},8,["default-active"])]),t("div",X,[t("div",_,[E(F,{class:"menu",style:{border:"none"},"default-active":"0",ellipsis:!1,"text-color":"#fff","active-text-color":"#71a5ee"},{default:h(()=>[(a(!0),s(n,null,B(r.exampleList,(e,i)=>(a(),v(p,{class:L({menuItem:i==x.value}),key:i,index:String(i),onClick:g=>d(i,e)},{default:h(()=>[u(c(e.name),1)]),_:2},1032,["class","index","onClick"]))),128))]),_:1})]),t("div",$,[(a(!0),s(n,null,B(r.activeList,(e,i)=>(a(),s("div",AA,[t("div",{class:"box",onClick:g=>C(e)},[t("img",{src:e.image},null,8,tA),t("div",null,c(e.name),1)],8,eA)]))),256))])])])}}},aA=Y(oA,[["__scopeId","data-v-4a91d5e8"]]);export{aA as default};
