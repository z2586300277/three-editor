import createEditor from './quickStart/createEditor.js'
import loadParams from './quickStart/loadParams.js'
import loadGltf from './loadModel/loadGltf.js'
import loadFbx from './loadModel/loadFbx.js'
import loadObj from './loadModel/loadObj.js'
import editorEvent from './quickStart/editorEvent.js'
import loadAndSave from './quickStart/loadAndSave.js'
import skyAndEnv from './quickStart/skyAndEnv.js'
import loadCssDom from './quickStart/loadCssDom.js'
import gsapAnimate from './quickStart/gsapAnimate.js'
import modelAnimate from './loadModel/modelAnimate.js'
import objectAndShader from './loadModel/objectAndShader.js'
import sceneChange from './quickStart/sceneChange.js'
import curveAnimate from './quickStart/curveAnimate.js'
import transformAnimate from './quickStart/transformAnimate.js'

export default [
    {
        name: '快速开始',
        key: 'quickStart',
        children: [
            {
                name: '创建场景',
                key: 'createEditor',
                code: createEditor,
                image: new URL(`./quickStart/createEditor.jpg`, import.meta.url).href,
                meta: {
                    title: '使用three-editor',
                    keywords: 'three-editor使用',
                    description: '使用three-editor创建一个场景'
                }
            },
            {
                name: '加载参数',
                key: 'loadParams',
                code: loadParams,
                image: new URL(`./quickStart/loadParams.jpg`, import.meta.url).href,
                meta: {
                    title: '三维地图',
                    keywords: 'three.js 地图',
                    description: '基于three.js创建的三维可视化地图'
                }
            },
            {
                name: '事件和操作',
                key: 'editorEvent',
                code: editorEvent,
                image: new URL(`./quickStart/editorEvent.jpg`, import.meta.url).href,
                meta: {
                    title: '编辑器事件',
                    keywords: 'three-editor 事件',
                    description: 'three-editor的事件系统'
                }
            },
            {
                name: '加载和保存',
                key: 'loadAndSave',
                code: loadAndSave,
                image: '/three-editor/dist/files/channels/loadAndSave.gif',
                meta: {
                    title: '加载和保存',
                    keywords: 'three-editor 加载 保存',
                    description: 'three-editor的加载和保存'
                }
            },
            {
                name: '场景切换',
                key: 'sceneChange',
                code: sceneChange,
                image: '/three-editor/dist/files/channels/sceneChange.gif',
                meta: {
                    title: '场景切换',
                    keywords: 'three-editor,场景切换',
                    description: 'three-editor的场景切换'
                }
            },
            {
                name: '天空盒和环境贴图',
                key: 'skyAndEnv',
                code: skyAndEnv,
                image: new URL(`./quickStart/skyAndEnv.jpg`, import.meta.url).href,
                meta: {
                    title: '天空盒和环境贴图',
                    keywords: 'three-editor 天空盒 环境贴图',
                    description: 'three-editor的天空盒和环境贴图'
                }
            },
            {
                name: '加载CSS和DOM',
                key: 'loadCssDom',
                code: loadCssDom,
                image: new URL(`./quickStart/loadCssDom.jpg`, import.meta.url).href,
                meta: {
                    title: '加载CSS和DOM',
                    keywords: 'three-editor CSS DOM',
                    description: 'three-editor的CSS和DOM加载'
                }
            },
            {
                name: '视角动画',
                key: 'gsapAnimate',
                code: gsapAnimate,
                image: new URL(`./quickStart/gsapAnimate.jpg`, import.meta.url).href,
                meta: {
                    title: '视角动画',
                    keywords: 'gsap,动画',
                    description: 'three-editor的视角动画'
                }
            },
            {
                name: '曲线动画',
                key: 'curveAnimate',
                code: curveAnimate,
                image: new URL(`./quickStart/curveAnimate.jpg`, import.meta.url).href,
                meta: {
                    title: '曲线动画',
                    keywords: '曲线动画',
                    description: 'three-editor的曲线动画'
                }
            },
            {
                name: 'gsap变换动画',
                key: 'transformAnimate',
                code: transformAnimate,
                image: new URL(`./quickStart/transformAnimate.jpg`, import.meta.url).href,
                meta: {
                    title: '变换动画',
                    keywords: '变换动画',
                    description: 'three-editor的变换动画'
                }
            }
        ]
    },
    {
        name: '模型加载',
        key: 'loadModel',
        children: [
            {
                name: '加载GLTF模型',
                key: 'loadGltf',
                code: loadGltf,
                image: new URL(`./loadModel/loadGltf.jpg`, import.meta.url).href,
                meta: {
                    title: '加载GLTF模型',
                    keywords: 'three.js GLTF模型',
                    description: '使用three.js加载GLTF模型'
                }
            },
            {
                name: '加载FBX模型',
                key: 'loadFbx',
                code: loadFbx,
                image: new URL(`./loadModel/loadFbx.jpg`, import.meta.url).href,
                meta: {
                    title: '加载FBX模型',
                    keywords: 'three.js FBX模型',
                    description: '使用three.js加载FBX模型'
                }
            },
            {
                name: '加载OBJ模型',
                key: 'loadObj',
                code: loadObj,
                image: new URL(`./loadModel/loadObj.jpg`, import.meta.url).href,
                meta: {
                    title: '加载OBJ模型',
                    keywords: 'three.js OBJ模型',
                    description: '使用three.js加载OBJ模型'
                }
            },
            {
                name: '模型动画',
                key: 'modelAnimate',
                code: modelAnimate,
                image: new URL(`./loadModel/modelAnimate.jpg`, import.meta.url).href,
                meta: {
                    title: '模型动画',
                    keywords: '模型动画',
                    description: '使用three.js模型动画'
                }
            },
            {
                name: '对象和着色器',
                key: 'objectAndShader',
                code: objectAndShader,
                image: new URL(`./loadModel/objectAndShader.jpg`, import.meta.url).href,
                meta: {
                    title: '对象和着色器',
                    keywords: '着色器',
                    description: '使用three.js对象和着色器'
                }
            }
        ]
    }
]