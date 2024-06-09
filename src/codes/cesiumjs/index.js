import defaultLayer from './layer/defaultLayer'

export default [
    {
        name: '图层',
        key: 'layer',
        children: [
            {
                name: '创建cesium',
                key: 'defaultLayer',
                code: defaultLayer,
                image: new URL(`./layer/defaultLayer.jpg`, import.meta.url).href,
                meta: {
                    title: 'cesium初始化',
                    keywords: 'cesium, cesium初始化',
                    description: 'cesium初始化'
                }
            }
        ]
    }
]