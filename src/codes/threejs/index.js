import changeShader from './learnShader/changeShader'
import fenceShader from './learnShader/fenceShader'
import modelLightScan from './learnShader/modelLightScan'
import videoShader from './learnShader/videoShader'
import modelBlendShader from './learnShader/modelBlendShader'

export default [
    {
        name: '着色器',
        key: 'learnShader',
        children: [
            {
                name: '着色器切换',
                key: 'changeShader',
                code: changeShader,
                image: new URL(`./learnShader/changeShader.jpg`, import.meta.url).href,
                meta: {
                    title: '着色器切换',
                    keywords: 'three.js,着色器',
                    description: '使用three.js创建的更换着色器'
                }
            },
            {
                name: '围栏着色器',
                key: 'fenceShader',
                code: fenceShader,
                image: new URL(`./learnShader/fenceShader.jpg`, import.meta.url).href,
                meta: {
                    title: '围栏着色器',
                    keywords: 'three.js 着色器,区域围栏着色器',
                    description: '使用three.js创建的围栏着色器'
                }
            },
            {
                name: '模型扫光',
                key: 'modelLightScan',
                code: modelLightScan,
                image: new URL(`./learnShader/modelLightScan.jpg`, import.meta.url).href,
                meta: {
                    title: '模型扫光',
                    keywords: 'three.js 着色器,模型扫光',
                    description: '使用three.js创建的模型光线扫描'
                }
            },
            {
                name: '视频着色器',
                key: 'videoShader',
                code: videoShader,
                image: new URL(`./learnShader/videoShader.jpg`, import.meta.url).href,
                meta: {
                    title: '视频着色器',
                    keywords: 'three.js 着色器,视频着色器',
                    description: '使用three.js创建的视频着色器'
                }
            },
            {
                name: '模型混合着色器',
                key: 'modelBlendShader',
                code: modelBlendShader,
                image: new URL(`./learnShader/modelBlendShader.jpg`, import.meta.url).href,
                meta: {
                    title: '模型混合着色器',
                    keywords: 'three.js 着色器,模型混合着色器',
                    description: '使用three.js创建的模型混合着色器'
                }
            }
        ]
    }
]