import{_ as S,C as j,f as y,i as B,r as E,o as r,c as n,b as t,e as c,w as l,F as h,a as m,d as k,t as p,l as L,n as P,p as T,g as I,h as $}from"./index-DvG9wcDl.js";const D=`import { ThreeEditor } from '/three-editor/dist/js/index.js'

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
`,N=[{name:"快速开始",key:"quickStart",children:[{name:"创建场景",key:"createEditor",code:D,image:new URL("/three-editor/dist/assets/createEditor-BAreEh8s.png",import.meta.url).href},{name:"加载参数",key:"loadParams",code:U,image:new URL("/three-editor/dist/assets/loadParams-BzBprk3p.jpg",import.meta.url).href}]},{name:"场景元素",key:"",children:[]}];var V={doc:"https://z2586300277.github.io/three-editor/docs/dist/",example:"https://z2586300277.github.io/three-editor/dist/#/example",editor:"https://z2586300277.github.io/three-editor/dist/#/editor",github:"https://z2586300277/three-editor",author:"https://github.com/z2586300277"};const b=d=>(T("data-v-4d56a47d"),d=d(),I(),d),A={class:"main"},F={class:"top"},q=b(()=>t("img",{class:"logo",src:$,alt:"logo",width:"36px",height:"36px"},null,-1)),J=b(()=>t("div",{class:"top-title-text"},"3D Examples",-1)),M=[q,J],G={class:"center"},H={class:"nav"},K={class:"examples"},O={class:"examples-item"},Q=["onClick"],W=["src"],X={__name:"example",setup(d){const C=j(),z=o=>window.open(V[o]),a=y({exampleList:[],activeList:[]}),u=[{name:"Three-Editor案例",path:"threeEditor",list:N},{name:"Three.js案例",path:"threejs",list:[]},{name:"Cesium.js案例",path:"cesiumjs",list:[]}],_=o=>{a.exampleList=u.find(i=>i.path===o).list},f=B(0),v=o=>{a.activeList=a.exampleList[o].children,f.value=o},R=o=>{const i=C.resolve({name:"codeMirror"}).href;localStorage.setItem("viewCode",o.code),window.open(`${i}`)};return _("threeEditor"),v(0),(o,i)=>{const g=E("el-menu-item"),x=E("el-menu");return r(),n("div",A,[t("div",F,[t("div",{class:"top-title",onClick:i[0]||(i[0]=e=>z("author"))},M),c(x,{class:"menu",style:{border:"none"},"default-active":"0",mode:"horizontal",ellipsis:!1,"active-text-color":"#fff","text-color":"#fff","default-openeds":["0"]},{default:l(()=>[(r(),n(h,null,m(u,(e,s)=>c(g,{key:s,index:String(s),onClick:w=>_(e.path)},{default:l(()=>[k(p(e.name),1)]),_:2},1032,["index","onClick"])),64))]),_:1})]),t("div",G,[t("div",H,[c(x,{class:"menu",style:{border:"none"},"default-active":"0",ellipsis:!1,"text-color":"#fff","active-text-color":"#71a5ee"},{default:l(()=>[(r(!0),n(h,null,m(a.exampleList,(e,s)=>(r(),L(g,{class:P({menuItem:s==f.value}),key:s,index:String(s),onClick:w=>v(s,e)},{default:l(()=>[k(p(e.name),1)]),_:2},1032,["class","index","onClick"]))),128))]),_:1})]),t("div",K,[(r(!0),n(h,null,m(a.activeList,(e,s)=>(r(),n("div",O,[t("div",{class:"box",onClick:w=>R(e)},[t("img",{src:e.image},null,8,W),t("div",null,p(e.name),1)],8,Q)]))),256))])])])}}},Z=S(X,[["__scopeId","data-v-4d56a47d"]]);export{Z as default};
