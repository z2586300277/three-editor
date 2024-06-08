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
                image: new URL(`./learnShader/fenceShader.jpg`, import.meta.url).href
            }
        ]
    }
]