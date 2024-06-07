import createEditor from './quickStart/createEditor.js'
import loadParams from './quickStart/loadParams.js'

export default [
    {
        name: '快速开始',
        key: 'quickStart',
        children: [
            {
                name: '创建场景',
                key: 'createEditor',
                code: createEditor,
                image: new URL(`./quickStart/createEditor.png`, import.meta.url).href
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
        name: '场景元素',
        key: '',
        children: [

        ]
    }
]