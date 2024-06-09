import fenceShader from './learnShader/fenceShader'

export default [
    {
        name: '着色器',
        key: 'learnShader',
        children: [
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
            }
        ]
    }
]