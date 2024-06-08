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
                image: new URL(`./quickStart/createEditor.jpg`, import.meta.url).href
            },
            {
                name: '加载参数',
                key: 'loadParams',
                code: loadParams,
                image: new URL(`./quickStart/loadParams.jpg`, import.meta.url).href
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
                image: new URL(`./loadModel/loadGltf.jpg`, import.meta.url).href
            },
            {
                name: '加载FBX模型',
                key: 'loadFbx',
                code: loadFbx,
                image: new URL(`./loadModel/loadFbx.jpg`, import.meta.url).href
            },
            {
                name: '加载OBJ模型',
                key: 'loadObj',
                code: loadObj,
                image: new URL(`./loadModel/loadObj.jpg`, import.meta.url).href
            }
        ]
    }
]