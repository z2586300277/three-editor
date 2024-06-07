import createEditor from './quickStart/createEditor.js'
import loadParams from './quickStart/loadParams.js'
import loadGltf from './loadModel/loadGltf.js'
import loadFbx from './loadModel/loadFbx.js'
import loadObj from './loadModel/loadObj.js'

function getURL(path) {

    return new URL(path, import.meta.url).href

}

export default [
    {
        name: '快速开始',
        key: 'quickStart',
        children: [
            {
                name: '创建场景',
                key: 'createEditor',
                code: createEditor,
                image: getURL(`./quickStart/createEditor.jpg`)
            },
            {
                name: '加载参数',
                key: 'loadParams',
                code: loadParams,
                image: getURL(`./quickStart/loadParams.jpg`)
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
                image: getURL(`./loadModel/loadGltf.jpg`)
            },
            {
                name: '加载FBX模型',
                key: 'loadFbx',
                code: loadFbx,
                image: getURL(`./loadModel/loadFbx.jpg`)
            },
            {
                name: '加载OBJ模型',
                key: 'loadObj',
                code: loadObj,
                image: getURL(`./loadModel/loadObj.jpg`)
            }
        ]
    }
]