import createEditor from './quickStart/createEditor.js'
import loadParams from './quickStart/loadParams.js'
import loadGltf from './loadModel/loadGltf.js'
import loadFbx from './loadModel/loadFbx.js'
import loadObj from './loadModel/loadObj.js'

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
            }
        ]
    }
]